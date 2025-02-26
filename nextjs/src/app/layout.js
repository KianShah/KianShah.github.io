"use client"

import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./globals.css";
import { ThemeContext, themes } from "./util/ThemeContext";
import { Geist, Geist_Mono } from "next/font/google";
import StyledJsxRegistry from './registry'



const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });
  

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(null);

  function changeTheme() {
    if (!localStorage) return;
    if (theme === "light") localStorage.setItem("theme", "dark");
    else localStorage.setItem("theme", "light");

    setTheme(currTheme => (currTheme === "light") ? "dark" : "light");
  }

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

  if (!theme) return <html lang="en"><body></body></html>;

  return (
    <html lang="en">
      <head>
        <title>Kian S. - Full Stack Developer</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.5.0/css/all.min.css" />
      </head>

      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          style={{ backgroundColor: themes[theme].body, color: themes[theme].text }}
        >
          <StyledJsxRegistry>
            <Header/>
            {children}
            <Footer/>
          </StyledJsxRegistry>
        </body>
      </ThemeContext.Provider>
    </html>
  );
}
