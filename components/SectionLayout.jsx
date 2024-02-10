"use client";

import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import NavigationDots from "./NavigationDots";

function SectionLayout({ children, idName }) {
  const pathname = usePathname();

  return (
    <div id={idName} className={`app__container`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        {children}

        <div className="copyright">
          <p className="p-text">@2024 Abdallah</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      {pathname === "/" ? <NavigationDots active={idName} /> : ""}
    </div>
  );
}

export default SectionLayout;
