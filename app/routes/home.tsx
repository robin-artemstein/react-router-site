import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [visible,setVisible]=useState(true);
  let content: React.ReactNode = null;
  if (visible) {
    content = <h1>Hello world...</h1>;
  } else {
    content = null; // This line can be ignored because the state is null by default.
  }

  return (
    <div>
      <h1>Show and hide things in React TS...</h1>
      {content}
      <button className="bg-gray-500" onClick={() => setVisible(!visible)}>Toogle show or hide content</button>
    </div>
  );
}
