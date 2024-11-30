import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() => {
    const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("hidden");
    });


    
  }, []);

  return (
    <>
      <nav className="bg-[#1A4D2E] fixed top-0 w-screen z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            
            <div className="flex items-center " >
              <h1 className="h-7 text-xl text-white font-semibold" >Kommex</h1>
            </div>

           
            <div className="absolute right-0 md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
          
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                <Link href="/" className="rounded-md px-3 py-2 font-xl underline1">
                  Home
                </Link>
                <Link href="/#aboutus" className="rounded-md px-3 py-2 font-xl underline1">
                  About Us
                </Link>
                <Link href="/#portofolio" className="rounded-md px-3 py-2 font-medium underline1">
                  Portofolio
                </Link>
                <Link href="#" className="rounded-md px-3 py-2 font-medium underline1">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 text-center" aria-current="page" >
              Home
            </Link>
            <Link href="/#aboutus" className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 text-center ">
              About us
            </Link>
            <Link href="/#portofolio" className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 text-center ">
              Portofolio
            </Link>
            <Link href="#"className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 text-center ">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      {/* Contact Section */}
      <section
  id="contact"
  className="pt-24 bg-gray-50 min-h-screen flex items-center gap-10"
>
  <div className="container mx-auto md:px-20 flex flex-wrap lg:flex-nowrap ">
  <div className="w-full lg:w-1/2 flex items-center justify-center md:mb-0 mb-10">
      <Image
        src="/Assets/profil3.png"
        width="512"
        height="512"
        className="lg:w-full max-w-xl w-60 lg:rounded-lg rounded-full"
      />
    </div>
    
    <div className="w-full lg:w-1/2">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Contact <span className="text-green-600">Us</span>
        </h2>
        <p className="text-gray-600 mb-6">Berikan kritik atau saran untuk kami.</p>
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

    {/* Bagian Gambar */}

  </div>
</section>


    </>
  );
}
