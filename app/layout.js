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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-screen h-screen object-cover -z-10 pointer-events-none"
        >
          <source src="/tortoise2.mp4" type="video/mp4" />
        </video>

        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}