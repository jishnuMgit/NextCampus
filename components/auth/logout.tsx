"use client";

import { SquareArrowRightExit } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      router.replace("/login");
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-3xl border border-white/10 bg-white/10 p-5 cursor-pointer text-sm font-semibold text-white transition hover:bg-white/20 hover:text-red-300 flex items-center gap-2"
    >
       <span>Logout</span>

<SquareArrowRightExit />
    </button>
  );
}