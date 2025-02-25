"use client"

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/HomeComponent";

export default function App() {
  return (
    <div>
      <div>
          <Header />
          <Home />
          <Footer />
      </div>
    </div>
  );
}