import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter,Roboto,Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'sousarg site',
  description: 'this website is for selling oils in moroco and other contries.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
        <Navbar/>
          {children}
        <Footer/>
        </div>
      </body>
    </html>
  )
}
