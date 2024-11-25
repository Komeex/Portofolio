import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import Typed from "typed.js";

export default function Home() {
  useEffect(() => {
    const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("hidden");
    });

    
    const typed = new Typed("#Hey", {
      strings: ["HEY"],
      startDelay: 500, 
      backSpeed: 50, 
      backDelay: 1000, 
      loop: false, 
      showCursor: false,
    });

    const typed1 = new Typed("#nama-saya", {
      strings: ["I’m Kommexx"], 
      typeSpeed: 100, 
      startDelay: 1000, 
      backSpeed: 50, 
      backDelay: 1000, 
      loop: false, 
      showCursor: false,
    });

    // Bersihkan Typed.js saat komponen dihapus
    return () => {
      typed.destroy();
    };
  }, []); // Empty array agar hanya dijalankan sekali saat komponen pertama kali dimuat

  return (
    <>
      <nav className="bg-[#1A4D2E] fixed  top-0 w-screen">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Logo di kiri */}
            <div className="flex items-center">
              <h1 className="h-7 text-xl text-white font-semibold">Kommex</h1>
            </div>

            {/* Tombol burger untuk mobile */}
            <div className="absolute right-0 md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 font-xl underline1"
                >
                  Home
                </Link>
                <Link
                  href="#aboutus"
                  className="rounded-md px-3 py-2 font-xl underline1"
                >
                  About Us
                </Link>
                <Link
                  href="#portofolio"
                  className="rounded-md px-3 py-2 font-medium underline1"
                >
                  Portofolio
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 font-medium underline1"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white underline"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="#aboutus"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white underline"
            >
              About us
            </Link>
            <Link
              href="#portofolio"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white underline"
            >
              Portofolio
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className=" mx-auto px-4 ">
        <div className="flex flex-col md:flex-row items-center overflow-hidden 2xl:mx-80 xl:mx-52 md:mx-20 sm:mx-20 xl:mt-32 lg:mt-32 md:mt-32 sm:mt-24 mt-20">
          <div className="md:w-1/2">
            <Image
              src="/Assets/profil2.png"
              width="512"
              height="512"
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-cover xl:rounded-none md:rounded-none sm:rounded-full rounded-full "
            />
          </div>

          <div className="md:w-1/2 p-4 text-center">

            <h1
              id="Hey"
              className="text-3xl font-bold text-[#4F6F52] mb-4 text-center"
            ></h1>
            <h1
              id="nama-saya"
              className="text-3xl font-bold text-[#4F6F52] mb-4 text-center"
            ></h1>
            <p className="text-gray-600 mb-6 text-center pt-4">
              Hello I’m I Komang Jaya Andika Saputra, a passionate Web Developer
              dedicated to turning ideas into beautifully crafted, responsive
              websites.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pb-4">
              {/* Daftar keterampilan */}
              <div className="flex items-center justify-center p-1 border border-green-900 hover:scale-[1.08] transition duration-300">
                <span className="text-lg font-medium">HTML</span>
              </div>
              <div className="flex items-center justify-center p-1 border border-green-900 hover:scale-[1.08] transition duration-300">
                <span className="text-lg font-medium">CSS</span>
              </div>
              <div className="flex items-center justify-center p-1 border border-green-900 hover:scale-[1.08] transition duration-300">
                <span className="text-lg font-medium">Tailwind</span>
              </div>
              <div className="flex items-center justify-center p-1 border border-green-900 hover:scale-[1.08] transition duration-300">
                <span className="text-lg font-medium">BoosStrap</span>
              </div>
              <div className="flex items-center justify-center p-1 border border-green-900 hover:scale-[1.08] transition duration-300">
                <span className="text-lg font-medium">JavaScript</span>
              </div>
              <div className="flex items-center justify-center p-1 border border-green-900 hover:scale-[1.08] transition duration-300">
                <span className="text-lg font-medium">Java</span>
              </div>
              <div className="flex items-center justify-center p-1 border border-green-900 hover:scale-[1.08] transition duration-300">
                <span className="text-lg font-medium">PHP</span>
              </div>
              <div className="flex items-center justify-center p-1 border border-green-900 hover:scale-[1.08] transition duration-300">
                <span className="text-lg font-medium">NextJS</span>
              </div>
            </div>
            <button id="aboutus"  className="bg-[#4F6F52] text-white px-6 py-2">
              See More
            </button>
          </div>
        </div>
      </div>

      <div  className="px-4 bg-gray-100 py-24 my-44">
      <div className="max-w-7xl mx-auto text-left">
        {/* Teks About Us */}
        <h2  className="text-3xl font-semibold text-[#4F6F52] mb-6 text-center">-About Me-</h2>
        <p className="text-lg text-gray-700 mb-6 text-center mx-10 lg:mx-72">
          Hello, I’m I Komang Jaya Andika Saputra, a passionate Web Developer based in Bali, Indonesia. With a keen eye for design and a love for technology, I specialize in creating responsive and user-friendly websites.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center pb-10">
      <div className="text-lg font-medium text-[#4F6F52]">
        <p className="text-gray-500 text-sm">Negara</p>
        <p>Indonesia</p>
      </div>
      <div className="text-lg font-medium text-[#4F6F52]">
        <p className="text-gray-500 text-sm">Provinsi</p>
        <p>Bali</p>
      </div>
      <div className="text-lg font-medium text-[#4F6F52]">
        <p className="text-gray-500 text-sm">Kabupaten</p>
        <p>Tabanan</p>
      </div>
    </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
  <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-xl font-semibold text-[#4F6F52] mb-2">Community Projects</h3>
            <p className="text-gray-600">I have actively participated in creating websites that support local entrepreneurs, helping them establish an online presence and grow their businesses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-xl font-semibold text-[#4F6F52] mb-2">Study</h3>
            <p className="text-gray-600">I studied RPL at Smk Wira Harapan, where I developed my skills in web development.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-xl font-semibold text-[#4F6F52] mb-2">Personal Projects</h3>
            <p className="text-gray-600">I work on personal projects that allow me to experiment with new technologies, improve my skills, and build web solutions for different needs and scenarios.</p>
          </div>
        </div>

 

      </div>
    </div>


      <h1 className="text-3xl font-bold text-[#4F6F52] mb-10 text-center mt-20 underline">
        -Our Lastest Project-
      </h1>
      <div className="  md:px-28 xl:px-32 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image 
            width="512"
            height="512"
              src="/Assets/nyarik.png"
              alt="Card 1 Image"
              className="w-full h-48 object-cover rounded-lg lg:hover:scale-[1.03] transition duration-300"
            />
            <h2 className="text-xl font-semibold text-[#4F6F52] mt-4 pb-2">
              Nyariik Kopi
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pb-4 ">
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">HTML</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">CSS</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">BoosStrap</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">AOS</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image 
            width="512"
            height="512"
              src="/Assets/adminlte.png"
              alt="Card 2 Image"
              className="w-full h-48 object-cover rounded-lg lg:hover:scale-[1.03] transition duration-300"
            />
            <h2 className="text-xl font-semibold text-[#4F6F52] mt-4">
              Admin LTE
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pb-4">
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">HTML</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">CSS</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">BoosStrap</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">PHP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image 
            width="512"
            height="512"
              src="/Assets/coffe.png"
              alt="Card 5 Image"
              className="w-full h-48 object-cover rounded-lg lg:hover:scale-[1.03] transition duration-300"
            />
            <h2 id="portofolio" className="text-xl font-semibold text-[#4F6F52] mt-4">
              Coffe Sunday
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pb-4">
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">HTML</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">CSS</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">JavaScript</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image 
            width="512"
            height="512"
              src="/Assets/coffe.png"
              alt="Card 5 Image"
              className="w-full h-48 object-cover rounded-lg lg:hover:scale-[1.03] transition duration-300"
            />
            <h2 id="portofolio" className="text-xl font-semibold text-[#4F6F52] mt-4">
              Coming Soon
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pb-4">
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">HTML</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">CSS</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">JavaScript</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image 
            width="512"
            height="512"
              src="/Assets/coffe.png"
              alt="Card 5 Image"
              className="w-full h-48 object-cover rounded-lg lg:hover:scale-[1.03] transition duration-300"
            />
            <h2 id="portofolio" className="text-xl font-semibold text-[#4F6F52] mt-4">
              Coming Soon
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pb-4">
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">HTML</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">CSS</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300">
                <span className="text-lg ">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
