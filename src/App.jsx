import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <h1 className="text-4xl font-bold">Portfolio</h1>
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center px-4">
          <h2 className="text-2xl">About Me</h2>
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center px-4">
          <h2 className="text-2xl">Projects</h2>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center px-4">
          <h2 className="text-2xl">Contact</h2>
        </section>
      </main>
    </div>
  );
};

export default App;
