import React from 'react'

const Navbar = () => {
  return (
      <header className="container mx-auto px-4 py-6 w-[85%]">
          <div className="flex items-center justify-between rounded-full border border-gray-800 bg-black/50 px-6 py-3">
              <div className="flex items-center gap-2">
                  {/* <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff3399]"> */}
                  <img src="Logo.avif" alt="" className="w-[180px]" />
                  {/* </div>   */}
              </div>

              <nav className="hidden md:block">
                  <ul className="flex items-center gap-8">
                      <li>
                          <a href="#" className="text-[#ff3399] hover:text-[#ff66b2]">
                              Home
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-white hover:text-[#ff66b2]">
                              Feature
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-white hover:text-[#ff66b2]">
                              Pricing
                          </a>
                      </li>
                      <li>
                          <a href="#" className="text-white hover:text-[#ff66b2]">
                              About
                          </a>
                      </li>
                  </ul>
              </nav>

              <a
                  href="#"
                  className="rounded-full bg-[#ff3399] px-6 py-2 text-sm font-bold text-white hover:bg-[#ff66b2]"
              >
                  Download Now
              </a>
          </div>
      </header>
  )
}

export default Navbar