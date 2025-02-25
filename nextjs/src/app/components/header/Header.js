import React, { useContext } from "react";
import "./Header.css";
import Link from "next/link";
import { greeting } from "@/portfolio.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { ThemeContext, themes } from "@/app/util/ThemeContext";

export default function Header() {

  const {theme, changeTheme} = useContext(ThemeContext);

  const icon =
    theme === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={theme === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={theme === "light" ? "#F9D784" : "#A7A7A7"}
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
              padding-top: 5px;
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
          <Link href="/home" className="logo">
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
              <Link
                className="homei"
                href="/"
                // activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: themes[theme].text }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="ec"
                href="/education"
                style={{ borderRadius: 5, color: themes[theme].text }}
              >
                Education and Certifications
              </Link>
            </li>
            <li>
              <Link
                className="xp"
                href="/experience"
                style={{ borderRadius: 5, color: themes[theme].text }}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                className="projects"
                href="/projects"
                style={{ borderRadius: 5, color: themes[theme].text }}
              >
                Projects
              </Link>
            </li>
            <button className="changeTheme" onClick={changeTheme}>
              {icon}
            </button>
          </ul>
        </header>
      </div>
  );
}