export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Open Source Finder. All rights reserved.
          </p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-sm text-muted-foreground hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:underline">Terms of Service</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
