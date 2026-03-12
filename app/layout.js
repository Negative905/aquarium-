import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Ocean Crown',
  description: 'Elevating spaces with the quiet elegance of the ocean.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* Fullscreen video — must be BEFORE Navbar to escape backdrop-blur stacking context */}
        

        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}