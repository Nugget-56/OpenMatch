import Link from 'next/link'
import Footer from './footer'

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">OpenMatch</h1>
        <p className="text-lg text-muted-foreground">Find open source projects and libraries</p>
        <Link href="/projects">feed</Link>
      </div>
      <Footer />
    </>
  )
}
