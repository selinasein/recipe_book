import hasNotPassedADay from "@/utils/hasNotPassedADay";

type Props = {
  createdAt: Date;
};

export default function NewIcon({ createdAt }: Props) {
  const isNew = hasNotPassedADay(createdAt);

  return (
    <div>
      {isNew ? (
        <span className="indicator-item badge badge-primary absolute top-5 left-5 z-10">
          new
        </span>
      ) : null}
    </div>
  );
}
