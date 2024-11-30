import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import Typed from "typed.js";
import AOS from "aos";
import 'aos/dist/aos.css';



export default function Home() {
  useEffect(() => {

    AOS.init({
       
  });

    const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("hidden");
    });

    
    const typed = new Typed("#Hey", {
      
      strings: ["Hey"],
      typeSpeed: 300, 
      startDelay: 400, 
      backSpeed: 50, 
      backDelay: 1000, 
      loop: false, 
      showCursor: false,
    });

    const typed1 = new Typed("#nama-saya", {
      strings: ["I’m Kommexx"], 
      typeSpeed: 150, 
      startDelay: 1500, 
      backSpeed: 50, 
      backDelay: 1000, 
      loop: false, 
      showCursor: false,
    });

    // Bersihkan Typed.js saat komponen dihapus
    return () => {
      typed.destroy();
    };

    AOS.init(

    );


  }, []); // Empty array agar hanya dijalankan sekali saat komponen pertama kali dimuat

  return (
    <>
      <nav className="bg-[#1A4D2E] fixed top-0 w-screen z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Logo di kiri */}
            <div className="flex items-center " >
              <h1 className="h-7 text-xl text-white font-semibold" >Kommex</h1>
            </div>

            {/* Tombol burger untuk mobile */}
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
                <Link href="#" className="rounded-md px-3 py-2 font-xl underline1">
                  Home
                </Link>
                <Link href="#aboutus" className="rounded-md px-3 py-2 font-xl underline1">
                  About Us
                </Link>
                <Link href="#portofolio" className="rounded-md px-3 py-2 font-medium underline1">
                  Portofolio
                </Link>
                <Link href="/contact" className="rounded-md px-3 py-2 font-medium underline1">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 text-center" aria-current="page" >
              Home
            </Link>
            <Link href="#aboutus" className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 text-center ">
              About us
            </Link>
            <Link href="#portofolio" className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 text-center ">
              Portofolio
            </Link>
            <Link href="/contact"className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 text-center ">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className=" mx-auto px-4 ">
        <div className="flex flex-col md:flex-row items-center overflow-hidden 2xl:px-80 xl:px-52 md:px-20 sm:px-20 xl:mt-48 lg:mt-48 md:mt-48 sm:mt-24 mt-20">
          <div className="md:w-1/2">
            <Image
              src="/Assets/profil2.png"
              width="512"
              height="512"
              data-aos="fade-left" data-aos-delay="200" data-aos-duration="1200"
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-cover xl:rounded-none md:rounded-none sm:rounded-full rounded-full "

            />
          </div>

          <div className="md:w-1/2 p-4 text-center" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1200">

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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <p className="text-lg font-medium">HTML</p>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white ">
                <p className="text-lg font-medium">CSS</p>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <p className="text-lg font-medium">Tailwind</p>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <p className="text-lg font-medium">BoosStrap</p>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <p className="text-lg font-medium">JavaScript</p>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <p className="text-lg font-medium">Java</p>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 lg:hover:text-white">
                <p className="text-lg font-medium">PHP</p>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 lg:hover:text-white">
                <p className="text-lg font-medium">NextJS</p>
              </div>
            </div>
            <button id="aboutus"   className="bg-[#4F6F52] text-white px-6 py-2">
              See More
            </button>
          </div>
        </div>
      </div>
<h1 id="aboutus"></h1>
    <div  className="px-4 bg-gray-100 py-12 my-24 " data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
      <div className="max-w-7xl mx-auto text-left">
      
        <h2  className="text-3xl font-semibold text-[#4F6F52] mb-12 text-center">-About Me-</h2>
        <p className="text-lg text-gray-700 mb-6 text-center mx-10 lg:mx-72">
          Hello, I’m I Komang Jaya Andika Saputra, a passionate Web Developer based in Bali, Indonesia. With a keen eye for design and a love for technology, I specialize in creating responsive and user-friendly websites.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center pb-10">
      <div className="text-lg font-medium text-[#4F6F52]" data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000">
        <p className="text-gray-500 text-sm">Negara</p>
        <p>Indonesia</p>
      </div>
      <div className="text-lg font-medium text-[#4F6F52]" data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">
        <p className="text-gray-500 text-sm">Provinsi</p>
        <p>Bali</p>
      </div>
      <div className="text-lg font-medium text-[#4F6F52]" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">
        <p className="text-gray-500 text-sm">Kabupaten</p>
        <p>Tabanan</p>
      </div>
    </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
            <h3 className="text-xl font-semibold text-[#4F6F52] mb-2">Community Projects</h3>
            <p className="text-gray-600">I have actively participated in creating websites that support local entrepreneurs, helping them establish an online presence and grow their businesses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000">
            <h3 className="text-xl font-semibold text-[#4F6F52] mb-2">Study</h3>
            <p className="text-gray-600">I studied RPL at Smk Wira Harapan, where I developed my skills in web development.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">
            <h3 className="text-xl font-semibold text-[#4F6F52] mb-2">Personal Projects</h3>
            <p id="portofolio" className="text-gray-600">I work on personal projects that allow me to experiment with new technologies, improve my skills, and build web solutions for different needs and scenarios.</p>
          </div>
        </div>
      </div>
    </div>

      <h1 className="text-3xl font-bold text-[#4F6F52] mb-14 text-center mt-20" >
        -Our Lastest Project-
      </h1>
<div className="  md:px-28 xl:px-32 py-6" >
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
    <div className="bg-white p-4 rounded-lg shadow-lg" 
    data-aos="zoom-in-down"   
    data-aos-delay="100" data-aos-duration="600"      
    >
      <div className="relative group w-full h-48 rounded-lg overflow-hidden">
        <Image
          width="512"
          height="512"
          src="/Assets/nyarik.png"
          className="w-full h-full object-cover rounded-lg transition-all "/>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ">
          <p className="text-white font-semibold text-lg">Nyarik Kopi</p>
        </div>
      </div>

      
      <h2 className="text-xl font-semibold text-[#4F6F52] mt-4 pb-2">Nyariik Kopi</h2>


      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pb-4">
        <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
          <span className="text-lg">HTML</span>
        </div>
        <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
          <span className="text-lg">CSS</span>
        </div>
        <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
          <span className="text-lg">Bootstrap</span>
        </div>
        <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
          <span className="text-lg">AOS</span>
        </div>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow-lg " data-aos="zoom-in-down" data-aos-delay="200" data-aos-duration="1200">
      <div className="relative group w-full h-48 rounded-lg overflow-hidden">
        <Image
          width="512"
          height="512"
          src="/Assets/adminlte.png"
          className="w-full h-full object-cover rounded-lg transition-all "/>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ">
          <p className="text-white font-semibold text-lg">Admin Lte</p>
        </div>
      </div>

      
      <h2 className="text-xl font-semibold text-[#4F6F52] mt-4 pb-2">dmin Lte</h2>

      {/* Tech Stack */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pb-4">
        <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
          <span className="text-lg">HTML</span>
        </div>
        <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
          <span className="text-lg">CSS</span>
        </div>
        <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
          <span className="text-lg">Bootstrap</span>
        </div>
        <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
          <span className="text-lg">AOS</span>
        </div>
      </div>
    </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white">
          <div className="bg-white p-4 rounded-lg shadow-lg" data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="600">
            <Image 
            width="512"
            height="512"
              src="/Assets/coffe.png"
              className="w-full h-48 object-cover rounded-lg lg:hover:scale-[1.03] transition duration-300"
            />
            <h2 id="portofolio" className="text-xl font-semibold text-[#4F6F52] mt-4">
              Coffe Sunday
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pb-4">
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <span className="text-lg ">HTML</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <span className="text-lg ">CSS</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <span className="text-lg ">JavaScript</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800">
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
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <span className="text-lg ">HTML</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <span className="text-lg ">CSS</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <span className="text-lg ">JavaScript</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
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
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <span className="text-lg ">HTML</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <span className="text-lg ">CSS</span>
              </div>
              <div className="flex items-center justify-center border border-green-900 lg:hover:scale-[1.05] transition duration-300 hover:bg-green-900 hover:text-white">
                <span className="text-lg ">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>



      

      <footer className="bg-gray-100 md:flex md:items-center md:justify-between shadow lg:px-44 py-8 lg:text-left mt-12 pt-11">
    <div className="flex items-center flex-wrap mb-6 md:mb-0">
        <Link href="#" className="text-sm font-normal text-gray-700 hover:underline mr-4 md:mr-6">Home</Link>
        <Link href="#aboutus" className="text-sm font-normal text-gray-700 hover:underline mr-4 md:mr-6">About Us</Link>
        <Link href="/contact" className="text-sm font-normal text-gray-700 hover:underline">Contact</Link>
    </div>
    <div className="">
      <h1 className="font-medium mb-6 lg:lg-0">© 2024 Komeex();. All rights reserved.</h1>
    </div>
    <div className="flex sm:justify-center space-x-6">
        <a href="https://www.instagram.com/komaang371/" className="text-gray-500 hover:text-gray-900">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"></path>
            </svg>
        </a>
        <a href="https://www.instagram.com/komaang371/" className="text-gray-500 hover:text-gray-900">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"></path>
            </svg>
        </a>
       
        <a href="https://github.com/Komeex/" className="text-gray-500 hover:text-gray-900">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"></path>
            </svg>
        </a>
        
    </div>
</footer>



    </>
  );
}
