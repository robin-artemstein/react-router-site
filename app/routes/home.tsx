import { useState, lazy, Suspense, Activity } from 'react';

import type { Route } from "./+types/home";
const Greeting = lazy(() => import('../components/Greeting'));
const About = lazy(() => import('../components/About'));
const Showcase = lazy(() => import('../components/Showcase'));
const Pricings = lazy(() => import('../components/Pricing'));
const Contact = lazy(() => import('../components/Contact'));

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [visible,setVisible]=useState(true);
  const [showStateValue, setShowStateValue] = useState<string>("greeting");

  return (
    <div>
      {/* Horizontal layout using a 5-column grid with a gap of 2 */}
        <div className="grid grid-cols-5 gap-2 my-2">
          
          {/* Separate lines of button tags with explicit cursor-pointer styling */}
          <button 
            onClick={() => setShowStateValue("greeting")}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors text-center"
          >
            Greeting
          </button>

          <button 
            onClick={() => setShowStateValue("about")}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors text-center"
          >
            About
          </button>

          <button 
            onClick={() => setShowStateValue("showcase")}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors text-center"
          >
            Showcase
          </button>

          <button 
            onClick={() => setShowStateValue("pricing")}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors text-center"
          >
            Pricing
          </button>

          <button 
            onClick={() => setShowStateValue("contact")}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors text-center"
          >
            Contact
          </button>
        </div>
        <Activity mode={showStateValue === "greeting" ? "visible" : "hidden"}>
          <Suspense fallback={<div>Just few seconds...</div>}>
            <Greeting />
          </Suspense>
        </Activity>
        <Activity mode={showStateValue === "about" ? "visible" : "hidden"}>
          <Suspense fallback={<div>Just few seconds...</div>}>
            <About />
          </Suspense>
        </Activity>
        <Activity mode={showStateValue === "showcase" ? "visible" : "hidden"}>
          <Suspense fallback={<div>Just few seconds...</div>}>
            <Showcase />
          </Suspense>
        </Activity>
        <Activity mode={showStateValue === "pricing" ? "visible" : "hidden"}>
          <Suspense fallback={<div>Just few seconds...</div>}>
            <Pricings />
          </Suspense>
        </Activity>
        <Activity mode={showStateValue === "contact" ? "visible" : "hidden"}>
          <Suspense fallback={<div>Just few seconds...</div>}>
            <Contact />
          </Suspense>
        </Activity>
        <div className="font-bold text-xl text-white">Show and hide things in React TS...</div>
        {visible ? (<div className="font-bold text-xl text-white">Hello world.</div>):null}
        <button className="bg-gray-500" onClick={() => setVisible(!visible)}>Toogle show or hide content</button>
    </div>
  );
}