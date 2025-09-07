"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ current = "pt" }) {
  const pathname = usePathname() || "/pt";
  const clean = pathname.replace(/^\/(pt|en|fr)/, "");
  return (
    <div className="flex items-center gap-2">
      {["pt","en","fr"].map((lng) => (
        <Link key={lng} href={`/${lng}${clean || ""}`} className={`px-2 py-1 text-sm border rounded-lg ${lng===current ? "bg-emerald-600 text-white" : ""}`}>
          {lng.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
