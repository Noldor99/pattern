"use client"

import { usePathname } from "next/navigation"

import { type ReactNode } from "react"

import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"

type RootLayoutPropsType = {
  children: ReactNode
}

export const LayoutWrapper = ({ children }: RootLayoutPropsType) => {
  const pathname = usePathname()

  return (
    <>
      <Header />
      {children}
      {pathname?.includes("/admin") ||
      pathname?.includes("/login") ||
      pathname?.includes("/registration") ? null : (
        <Footer />
      )}
    </>
  )
}
