import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu"; // Assume this is your custom SVG hamburger component
const Navbar = () => {
  const [isInternmentCampsDropdownOpen, setInternmentCampsDropdownOpen] = useState(false);
  const [isAboutArtistDropdownOpen, setAboutArtistDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center flex-column justify-between py-4" aria-label="Primary">
      <div className="logo ml-2 md:ml-24">
        <a href="/" aria-label="Go Home">Masumi Hayashi</a>
      </div>

      <div className="md:hidden">
        {/* The HamburgerMenu has its own sub-menu */}
        <HamburgerMenu />
      </div>

      <ul
        className= "nav-links flex flex-col hidden md:flex-row md:space-x-4 md:flex mr-2 md:mr-24"
      >
        <li>
          <a href="/internment-camps" onClick={() => setInternmentCampsDropdownOpen(!isInternmentCampsDropdownOpen)}>
            Internment Camps
          </a>
          <ul className={`dropdown ${isInternmentCampsDropdownOpen ? "block" : "hidden"}`}>
            <li>
              <a href="/japanese-american-internment-camps">
                Japanese-American Concentration Camps
              </a>
            </li>
            <li>
              <a href="/japanese-canadian-internment-camps">
                Japanese-Canadian Internment Camps
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/family-album-project">Family Album</a>
        </li>
        <li>
         <a href="#" onClick={() => setAboutArtistDropdownOpen(!isAboutArtistDropdownOpen)}>About the Artist</a>
          <ul className={`dropdown ${isAboutArtistDropdownOpen ? 'block' : 'hidden'}`}>
            <li>
              <a href="/artist-statement">Artist Statement</a>
            </li>
            <li>
              <a href="/artist-biography">Artist Biography</a>
            </li>
          </ul>
        </li>
        <li>
         <a href="#" onClick={() => setResourcesDropdownOpen(!isResourcesDropdownOpen)}>Resources</a>
          <ul className={`dropdown ${isResourcesDropdownOpen ? 'block' : 'hidden'}`}>
            <li>
              <a href="/acknowledgements">Acknowledgements</a>
            </li>
            <li>
              <a href="/bibliography">Bibliography</a>
            </li>
            <li>
              <a href="/links">Links</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>)};

export default Navbar;
