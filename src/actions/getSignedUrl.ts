"use server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

import { auth } from "@/auth";
import { db } from "@/db";
import { recipes } from "@/db/schema/recipes";

const s3Client = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const allowedFileTypes = [
  "image/jpeg",
  "image/png",
  "video/mp4",
  "video/quicktime",
];

const maxFileSize = 1048576 * 10; // 1 MB

type GetSignedURLParams = {
  fileType: string;
  fileSize: number;
  checksum: string;
};

type SignedURLResponse = Promise<
  | {
      failure?: undefined;
      success: { url: string; key: string /*id: number */ };
    }
  | { failure: string; success?: undefined }
>;
export async function getSignedURL({
  fileType,
  fileSize,
  checksum,
}: GetSignedURLParams): SignedURLResponse {
  const session = await auth();

  if (!session) {
    return { failure: "not authenticated" };
  }

  // first just make sure in our code that we're only allowing the file types we want
  if (!allowedFileTypes.includes(fileType)) {
    return { failure: "File type not allowed" };
  }

  if (fileSize > maxFileSize) {
    return { failure: "File size too large" };
  }

  const keyname = generateFileName();
  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: keyname,
    ContentType: fileType,
    ContentLength: fileSize,
    ChecksumSHA256: checksum,
    Metadata: {
      userId: session.user.id,
    },
  });

  const url = await getSignedUrl(
    s3Client,
    putObjectCommand,
    { expiresIn: 60 } // 60 seconds
  );

  // const results = await db
  //   .insert(recipes)
  //   .values({
  //     title: "abc",
  //     description: "abc",
  //     ingredients: "abc",
  //     instructions: "abc",
  //     categoryId: 1,
  //     likes: 0,
  //     image: url.split("?")[0],
  //     userId: session.user.id,
  //   })
  //   .returning();

  return { success: { url, key: keyname /*id: results[0].id*/ } };
}
