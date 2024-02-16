import {
  IconBrandDiscord,
  IconBrandTelegram,
  IconBrandX,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
//simple
export const Footer = () => {
  const links = [
    {
      label: "Investor Inquiries",
      url: "mailto:example@mail.com",
      urlLabel: "example@mail.com",
    },
    {
      label: "Investor Inquiries",
      url: "mailto:example@mail.com",
      urlLabel: "example@mail.com",
    },
  ]
  return (
    <footer className="bg-white py-20">
      <section className="container">
        <div className="flex flex-col">
          <h3 className="t-h2 mb-8 w-full border-b border-[#F0F0F0] pb-6 text-left">
            Contact
          </h3>

          <div className="flex w-full flex-wrap items-start justify-between gap-2">
            <div className="flex w-full flex-col items-start justify-start md:w-1/2">
              <h3 className="text-m md:text-h3 mb-6">
                Privacy is our paramount
              </h3>
              {links.map(({ label, url, urlLabel }, index) => (
                <div
                  className="flex w-full max-w-[560px] flex-col flex-wrap items-start justify-between md:flex-row md:flex-nowrap md:gap-x-8"
                  key={index}
                >
                  <p className="t-sm1 w-full max-w-[280px] whitespace-nowrap text-left">
                    {label}
                  </p>
                  <a
                    className="t-sm1 w-full max-w-[280px] text-left underline underline-offset-2"
                    href={url}
                  >
                    {urlLabel}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start justify-end gap-4 md:mt-0">
              <Button className="p-2" variant={"black"}>
                <IconBrandTelegram />
              </Button>
              <Button className="p-2" variant={"black"}>
                <IconBrandDiscord />
              </Button>
              <Button className="p-2" variant={"black"}>
                <IconBrandX />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
