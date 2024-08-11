import Link from "next/link"
export default function Footer() {
  return (
    <footer className="py-12 bg-black w-full text-gray-400 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-9 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-left">
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
           
        <div className="flex flex-col items-center  text-left">
          <h2 className="text-white text-lg font-semibold mb-4 ">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
           
        <div className="flex flex-col items-center text-left">
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center  text-left">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
          <div className="col-span-full text-center text-base pt-8">© 2024 Music School. All rights reserved.</div>  
        </div>
            
    </footer>
  )
}
