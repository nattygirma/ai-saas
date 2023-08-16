import { useEffect, useState } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { ClerkProvider } from '@clerk/nextjs'

import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'
// import { Loading } from '@/components/loading-page'
import { CrispProvider } from '@/components/crisp-provider'
import { useRouter } from 'next/router'

import './globals.css'

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    

  return (
    // <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/* <CrispProvider /> */}
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {/* <Loading /> */}
          {children}
        </body>
      </html>
    // </ClerkProvider>
  )
}
