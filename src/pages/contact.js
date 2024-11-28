import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuButton && mobileMenu) {
      menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", !isExpanded);
        mobileMenu.classList.toggle("hidden");
      });
    }

    return () => {
      if (menuButton) {
        menuButton.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#1A4D2E] fixed top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">Kommex</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link href="#" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link href="#aboutus" className="text-white hover:text-gray-300">
                About Us
              </Link>
              <Link
                href="#portofolio"
                className="text-white hover:text-gray-300"
              >
                Portofolio
              </Link>
              <Link href="#contact" className="text-white hover:text-gray-300">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-white hover:text-gray-300 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-16 6h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3">
            <Link
              href="#"
              className="block px-3 py-2 text-white hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              href="#aboutus"
              className="block px-3 py-2 text-white hover:bg-gray-700"
            >
              About Us
            </Link>
            <Link
              href="#portofolio"
              className="block px-3 py-2 text-white hover:bg-gray-700"
            >
              Portofolio
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-white hover:bg-gray-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section
        id="contact"
        className="pt-24 bg-gray-50 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4 flex flex-wrap lg:space-x-6">
          {/* Google Maps */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <div className="aspect-w-16 aspect-h-9 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.30235284745!2d115.13905588489216!3d-8.371890062895856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd227aa51bd1973%3A0xc685e71d38e6d69d!2sNyarik%20Kopi!5e0!3m2!1sid!2sid!4v1724809704701!5m2!1sid!2sid"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact <span className="text-green-600">Us</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Berikan kritik atau saran untuk kami.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Masukan Nama Anda"
                  required
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  rows="5"
                  placeholder="Pesan Anda"
                  required
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
