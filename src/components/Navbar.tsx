'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>
        <MenuItem
          setActive={setActive} active={active} item="Follow Us"
        > <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink target="_blank" href="https://www.instagram.com/rkstudio__official?utm_source=qr&igsh=MTNkM3JpZHk1bDc0dg=="><FontAwesomeIcon icon={faInstagram} size="lg" /><span>  </span>  Instagram</HoveredLink>
            <HoveredLink target="_blank" href="https://www.facebook.com/share/1CsEJ7HScM/?mibextid=qi2Omg"><FontAwesomeIcon icon={faFacebook} size="lg" /><span>  </span>
              Facebook
            </HoveredLink>
            <HoveredLink target="_blank" href="https://www.youtube.com/@rkstudioaatroli3858/videos"><FontAwesomeIcon icon={faYoutube} size="lg" /><span>  </span>  Youtube</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
          </MenuItem>
        </Link>
        <Link href={"https://maps.app.goo.gl/BSkomBa1chgQ86EPA"} target="_blank">
          <MenuItem setActive={setActive} active={active} item="Fins Us on Map">
          </MenuItem>
        </Link>
      </Menu>
    </div>

  );
}

export default Navbar