import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeCustomizer } from "@/components/theme-customizer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: " Dashboard - OpenSource CMS",
  description: " dashboard ",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <ThemeCustomizer />
        </ThemeProvider>
      </body>
    </html>
  )
}
