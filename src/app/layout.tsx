import { Navbar, Sidebar } from '@/app/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/redux/provider'
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { __DEV__ } from '@apollo/client/utilities/globals'
import { getServerSession } from 'next-auth'
import FontAwesomeProvider from './components/FontAwesomeProvider'
import SessionProvider from './components/SessionProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Delish Cheese Dough | Pizza',
  description: 'Management System for ID-Yours',
}


if (__DEV__) {  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SessionProvider session={session}>
          <FontAwesomeProvider>
            <ReduxProvider>
              {children}
            </ReduxProvider>
          </FontAwesomeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
