"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export const Aside = () => {
  const pathname = usePathname()

  const navs = [
    { title: "Portfolio", path: "/admin/portfolio" },
    { title: "News", path: "/admin/news" },
    { title: "Moderators", path: "/admin/moderators" },
  ]

  return (
    <div className="fixed hidden h-screen flex-1 border-r-2 border-black  bg-white md:flex md:w-60">
      <div className="flex w-full flex-col space-y-6">
        <div className="flex flex-col px-6 py-20">
          {navs.map((item, idx) => {
            const isCurrentPath = pathname?.startsWith(item.path.split("?")[0])
            return (
              <Link
                key={idx}
                href={item.path}
                className={cn(
                  "file: flex flex-row items-center space-x-4 rounded-lg p-2",
                  isCurrentPath && "font-bold"
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
