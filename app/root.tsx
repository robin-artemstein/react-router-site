import React from "react";
import { Links, Meta, Scripts, ScrollRestoration, useLocation, useOutlet } from "react-router";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./app.css";

// The Document Shell Layout
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-neutral-900 antialiased min-h-screen flex flex-col">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// App shell manager orchestrating core route switching animations
export default function App() {
  const location = useLocation();
  const element = useOutlet();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Persistent Navigation Header */}
      <Navbar />

      {/* Main Container Core Layout */}
      <main className="flex-1 flex flex-col justify-center max-w-4xl w-full mx-auto px-6 py-12 relative">
        {/* 
          mode="wait" forces the current view component to execute its exit 
          animation framework completely before mounting the new view.
        */}
        <AnimatePresence mode="wait">
          {element && React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </main>

      {/* Persistent Footer Layout */}
      <Footer />
    </div>
  );
}