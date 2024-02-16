import { Aside } from "@/app/admin/_components/Aside"
import { type ReactNode } from "react"

type RootLayoutPropsT = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutPropsT) => {
  return (
    <>
      <div className="flex">
        <Aside />
        <main className="flex-1">
          <div className="flex flex-1 flex-col sm:border-r sm:border-zinc-700 md:ml-60">
            <div className="flex flex-grow flex-col space-y-2 px-4 pb-4 pt-2">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default RootLayout
