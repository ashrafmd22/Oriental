import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Gift } from "lucide-react";
import { getGiftBoxIds } from "../utils/giftBox";

export function GiftBoxFloating() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const syncCount = () => setCount(getGiftBoxIds().length);
    syncCount();

    window.addEventListener("giftbox-updated", syncCount);
    return () => window.removeEventListener("giftbox-updated", syncCount);
  }, []);

  if (count === 0) {
    return null;
  }

  return (
    <Link
      to="/gift-box"
      className="fixed bottom-16 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-4 md:left-8 md:bottom-20 z-40 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 shadow-lg transition hover:shadow-xl"
    >
      <Gift className="h-4 w-4" />
      View Gift Box ({count})
    </Link>
  );
}
