import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logo/logo.webp"
              width={150}
              height={50}
              alt="Advertsine Logo"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              We&apos;re a full-service digital marketing agency helping
              businesses grow through strategic online presence and innovative
              solutions.
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:support@advertsine.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                support@advertsine.com
              </a>
              <a
                href="tel:+8801338219333"
                className="text-gray-300 hover:text-white transition-colors"
              >
                +880-1338-219-333
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/meeting"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2025 Advertsine. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
