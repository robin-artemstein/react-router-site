import { useState, lazy, Suspense, Activity } from 'react';

import PageLayout from "../components/PageLayout";
const Greeting = lazy(() => import('../components/Greeting'));
const About = lazy(() => import('../components/About'));
const Showcase = lazy(() => import('../components/Showcase'));
const Pricings = lazy(() => import('../components/Pricing'));
const Contact = lazy(() => import('../components/Contact'));

export default function Home() {
  const [visible,setVisible]=useState(true);
  const [showStateValue, setShowStateValue] = useState<string>("greeting");
  return (
    <PageLayout>
      <span className="page-title-1">
        Welcome to our site...
      </span>
      <h1 className="page-title-2">
        We hope you will enjoy it.
      </h1>
      <p className="page-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="grid grid-cols-5 gap-2 my-2">
          
          {/* Separate lines of button tags with explicit cursor-pointer styling */}
          <button 
            onClick={() => setShowStateValue("greeting")}
            className="button-at-homepage"
          >
            Greeting
          </button>

          <button 
            onClick={() => setShowStateValue("about")}
            className="button-at-homepage"
          >
            About
          </button>

          <button 
            onClick={() => setShowStateValue("showcase")}
            className="button-at-homepage"
          >
            Showcase
          </button>

          <button 
            onClick={() => setShowStateValue("pricing")}
            className="button-at-homepage"
          >
            Pricing
          </button>

          <button 
            onClick={() => setShowStateValue("contact")}
            className="button-at-homepage"
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
        <button className=" button-at-homepage" onClick={() => setVisible(!visible)}>Toogle show or hide content</button>
    </PageLayout>
  );
}