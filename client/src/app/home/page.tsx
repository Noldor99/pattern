import { About } from "./_components/About"

export const generateMetadata = async () => {
  return {
    title: "Home Page",
    description: "V3V - Home Page",
  }
}

const HomePage = async () => {
  return (
    <main className="flex-1">
      <About />
    </main>
  )
}

export default HomePage
