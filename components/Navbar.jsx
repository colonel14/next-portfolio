"use client";
import "@/styles/navbar.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { Facebook, Github, Linkedin, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-container">
        <Link aria-label="logo" href="/" className="app__navbar-logo">
          <Logo />
        </Link>
        <ul className="app__navbar-links">
          {navLinks.map((link) => (
            <li
              key={`link-${link.name}`}
              aria-label="nav link"
              className={cn(
                "app__flex p-text",
                pathname == link.href && "active"
              )}
            >
              <Link aria-label="nav link" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="app__navbar-contact">
          <Image
            src="/whatsapp.png"
            width={20}
            height={20}
            alt="whatsapp icon"
            className="object-cover"
          />
          <Link
            aria-label="whatsapp number"
            href="https://wa.me/+2001012234592"
            target="blank"
          >
            {" "}
            010 122 34 592
          </Link>
        </div>
        <div className="app__navbar-menu">
          <Menu onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <X onClick={() => setToggle(false)} />
              <ul className="app__navbar-links">
                {navLinks.map((link) => (
                  <li
                    key={`link-${link.name}`}
                    aria-label="nav link"
                    className="app__flex p-text"
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
                <ul className="app__navbar-social">
                  <Link
                    href="https://www.linkedin.com/in/drcolonel/"
                    target="blank"
                    aria-label="linkedin"
                  >
                    <Linkedin />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100009694934872"
                    target="blank"
                    aria-label="facebook"
                  >
                    <Facebook />
                  </Link>
                  <Link
                    href="https://github.com/colonel14"
                    target="blank"
                    aria-label="github"
                  >
                    <Github />
                  </Link>
                  <Link href="tel:+20 01012234592" aria-label="phone number">
                    <Phone />
                  </Link>
                </ul>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
