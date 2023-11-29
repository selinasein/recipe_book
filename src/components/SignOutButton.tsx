"use client";

export default function SignOutButton({ signOut }: { signOut: () => void }) {
  return (
    <button
      onClick={() => signOut()}
      className="btn btn-primary bg-pink-500 hover:bg-pink-600 text-white rounded-full px-4 py-2 transition-colors border-none"
    >
      Sign Out
    </button>
  );
}
