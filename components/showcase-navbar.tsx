import Image from "next/image";
import Link from "next/link";

const ShowcaseNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo/navlogo.webp"
              alt="Advertsine Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link href="/showcase" className="text-blue-600 font-medium">
              Portfolio
            </Link>
            <Link
              href="/#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+8801338219333"
              className="hidden lg:block text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              +880-1338-219-333
            </a>
            <Link
              href="/meeting"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ShowcaseNavbar;
