import React from 'react'
import { ProtectedPageProvider, Sidebar } from '../components'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
   <main className='bg-gradient-to-r from-[#0f8399] from-10% via-[#289888] via-30% to-[#0bd658] to-90%'>
    <ProtectedPageProvider>
      <Sidebar>
        {children}
      </Sidebar>
    </ProtectedPageProvider>
   </main>
  )
}

export default DashboardLayout