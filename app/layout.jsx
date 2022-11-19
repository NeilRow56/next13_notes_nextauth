
import { NoteProvider } from './modules/AppContext'
import Footer from './Footer'
import './globals.css'
import SiteHeader from './SiteHeader'


export default function RootLayout({ children, ...props }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SiteHeader />
        <main>
          <NoteProvider>
        {children}
          </NoteProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
