'use client';
import '../styles/globals.css'
import Header from './Header';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>{`Marco's Portfolio`}</title>
      </head>
      <body className="bg-portfolioGrey-900">
        <div className="h-screen scroll-smooth snap-y snap-mandatory overflow-scroll z-0">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
