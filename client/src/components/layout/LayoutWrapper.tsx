"use client"
import { type ReactNode } from "react"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { usePathname } from "next/navigation"

type RootLayoutPropsType = {
  children: ReactNode
}

export const LayoutWrapper = ({ children }: RootLayoutPropsType) => {
  const pathname = usePathname()

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      {pathname?.includes("/admin") ? null : <Footer />}
      <Toaster />
    </>
  )
}
