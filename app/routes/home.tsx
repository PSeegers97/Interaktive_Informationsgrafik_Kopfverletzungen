import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";
import { P5Canvas } from "@p5-wrapper/react";
import { useState, useEffect } from "react";
import head from '/public/assets/illustration/Kopf.svg';



export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}



// Hiermit kann ich jeder einzelnen Seite einen neuen p5 Sketch ausführen
function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(p5.displayWidth, p5.displayHeight, p5.WEBGL); }

  p5.draw = () => {
    p5.background(250);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
  };
}

function getFile(){
  let result;
  fetch(head).then(r => result = r ).then(data => console.log(data));
}


  




export default function Home() {
  
/*   return <P5Canvas sketch={sketch}  />; */
return (
  <a href="Schaedel-Hirn-Trauma" class="w-screen h-screen flex flex-col items-center justify-center">
    <h1 class="font-sans font-bold text-headline">Schädel-Hirn-Trauma</h1>

  </a>
)
}
