"use client"

import { useState, useEffect } from "react";
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
  

export default function MainBody({ children }) {
    const [theme, setTheme] = useState(null);

    function changeTheme(theme) {
        if (!localStorage) return;
        localStorage.setItem("theme", theme);
        setTheme(currTheme => (currTheme === "light") ? "dark" : "light")
    }

    useEffect(() => {
        setTheme(localStorage.getItem("theme") || "light");
    }, []);

    if (!theme) return <body />

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                style={{backgroundColor: themes[theme].body, color: themes[theme].text}}
            >
                <StyledJsxRegistry>{children}</StyledJsxRegistry>
            </body>
        </ThemeContext.Provider>
    )

}