import React from "react";

export default function Header() {
  return (
    <header className="container mx-auto md:flex justify-center my-10 md:my-20 hidden">
      <nav className="flex">
        <ul className="menu flex text-center SMN_effect-16">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
