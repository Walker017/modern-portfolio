import * as React from "react"
import { cn } from "@/lib/utils"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = ({ className }): { className: string } => {
  
  return (

<nav className={cn("sticky top-0 w-full h-14 md:h-16 bg-gray-950 flex flex-row items-center justify-between z-30 backdrop-filter backdrop-blur-md bg-opacity-30", className)}>
        <div className="flex flex-row items-center mx-4">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white flex flex-row">
             <p className="text-sky-300">liby</p>zxy0
          </h3>
        </div>
        <div className="flex flex-row items-center mx-3">
          <button className="text-white text-xl md:text-2xl  mx-1.5 hover:text-sky-400 transition-all duration-300">
            <FaLinkedin />
          </button>
          <button className="text-white text-xl md:text-2xl mx-1.5 hover:text-sky-400 transition-all duration-300">
            <FaXTwitter />
          </button>
          <button className="text-white text-xl md:text-2xl mx-1.5 hover:text-sky-400 transition-all duration-300">
            <FaGithub />
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white text-xl md:text-2xl ml-2 mr-1.5 outline-none border-none">
            <HiOutlineMenuAlt3 />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 border-none text-white mx-3 my-3">
              <DropdownMenuLabel>Go To</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-800" />
              <DropdownMenuItem>
                <a className="hover:text-sky-400 transition-all duration-300" href="#">Start</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a className="hover:text-sky-400 transition-all duration-300" href="#about">About</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a className="hover:text-sky-400 transition-all duration-300" href="#skills">Skills</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a className="hover:text-sky-400 transition-all duration-300" href="#experience">Experience</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a className="hover:text-sky-400 transition-all duration-300" href="#education">Education</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a className="hover:text-sky-400 transition-all duration-300" href="#projects">Projects</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a className="hover:text-sky-400 transition-all duration-300" href="#contact">Contact</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          
        </div>
      </nav>
)} 

export { Navbar }
