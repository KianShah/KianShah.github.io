import React, { useContext } from "react";
import "./Header.css";
import Link from "next/link";
import { greeting } from "@/portfolio.js";
import { ThemeContext, themes } from "@/util/ThemeContext";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

function ActiveLink({ href, children, style, ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      style={{ fontWeight: (isActive) ? "bold" : "normal", ...style }}
      {...props}
    >
      {children}
    </Link>
  );
};


export default function Header() {

  const {theme, changeTheme} = useContext(ThemeContext);

  const ThemeIcon =
    (theme === "dark") ? (
      <Icon
        icon="line-md:moon-twotone"
        width="28px"
        color= "#A7A7A7"
      />
    ) : (
      <Icon
        icon="solar:sun-bold"
        width="28px"
        color="#F9D784"
      />
    );

  return (
      <div>
        <header className="header">
          <style jsx>{`
            .changeTheme {
              cursor: pointer;
              height: 45px;
              width: 45px;
              margin-right: 5px;
              margin-left: 15px;
              border-radius: 50%;
              border: none;
              display: flex;
              align-items: center;
              justify-content: center;
              outline: none;
              transition: all 0.2s ease-in-out;
              background-color: ${(theme === "light") ? "#7CD1F7" : "#292C3F"}
            }

            .changeTheme:hover {
              box-shadow: 0 3px 8px ${(theme === "light") ? "#F7D774" : "#646464"}
            }

          `}</style>
          <Link href="/" className="logo">
            <span style={{ color: themes[theme].text }} />
            <span className="logo-name" style={{ color: themes[theme].text }}>
              {greeting.getLogo()}
            </span>
            <span style={{ color: themes[theme].text }} />
          </Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon" />
          </label>
          <ul className="menu">
            <li>
              <ActiveLink
                className="homei"
                href="/"
                style={{ borderRadius: 5, color: themes[theme].text }}
              >
                Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                className="ec"
                href="/education"
                style={{ borderRadius: 5, color: themes[theme].text }}
              >
                Education and Certifications
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                className="xp"
                href="/experience"
                style={{ borderRadius: 5, color: themes[theme].text }}
              >
                Experience
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                className="projects"
                href="/projects"
                style={{ borderRadius: 5, color: themes[theme].text }}
              >
                Projects
              </ActiveLink>
            </li>
            <button className="changeTheme" onClick={changeTheme}>
              {ThemeIcon}
            </button>
          </ul>
        </header>
      </div>
  );
}