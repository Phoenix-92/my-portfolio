import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to = "/"   //exact
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Home
                    </NavLink>
                    <NavLink to = "/post" 
                        activeClassName="text-white bg-purple-400"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
                    >
                        Blog
                    </NavLink>
                    <NavLink to = "/project" 
                        activeClassName="text-white bg-purple-400"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
                    >
                        Projects
                    </NavLink>
                    <NavLink to = "/about"
                        activeClassName="text-white bg-purple-400"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-2 px-3 my-6">
                    <SocialIcon url="https://twitter.com/home" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://github.com/Phoenix-92" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/keshav-chandra-ray-264873237/" className="mr-4" target="_blank" fgcolor="#fff" style={{height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}