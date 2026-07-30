import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { P5Canvas } from "@p5-wrapper/react";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Tbi() {
/*   return <P5Canvas sketch={sketch}  />; */
return (
  <a href="Uebersicht" class="w-screen h-screen flex flex-col items-center justify-center">
    <h1 class="font-sans font-bold text-headline">Schädel-Hirn-Trauma</h1>
  </a>
)
}