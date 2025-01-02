import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Maven_Pro, Roboto_Mono } from "next/font/google"

const maven = Maven_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-maven",
})

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-mode="light"
      className={`${maven.variable} ${roboto_mono.variable}`}
    >
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
