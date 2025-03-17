"use client";
import { useState, useEffect } from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  // Persist user preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <head>
        <title>My Portfolio</title>
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}