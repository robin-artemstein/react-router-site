import { useState} from 'react';
import type { Route } from "./+types/home";

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
      <div className="font-semibold text-lg text-white">{showStateValue}</div>
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
        <div className="font-bold text-xl text-white">Show and hide things in React TS...</div>
        {visible ? (<div className="font-bold text-xl text-white">Hello world.</div>):null}
        <button className="bg-gray-500" onClick={() => setVisible(!visible)}>Toogle show or hide content</button>
    </div>
  );
}