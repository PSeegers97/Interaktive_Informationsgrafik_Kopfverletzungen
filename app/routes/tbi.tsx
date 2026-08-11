import type { Route } from "./+types/home";
import { P5Canvas } from "@p5-wrapper/react";
import { useState, useEffect, useId } from "react";
import P5 from "p5";



let img;

let xStarting = window.innerWidth/2 - 226;
let yStarting = 0;
let imageWidth = 552;
let imageHeight = 801;

const movingIllustration = () => {


}


type SketchCleanup = { cleanup: () => void };

const visualisation = ({ width, height }: { width: number, height: number }): SketchCleanup => {
  const sketch = (p5: P5) => {
    console.log("width = ", window.innerWidth, " Height = ", window.innerHeight);
    console.log(xStarting);
    
   p5.setup = async () => {
    p5.createCanvas(window.innerWidth, window.innerHeight); 
    img = await p5.loadImage('/assets/illustration/260714_Illustrationv2.png');
    p5.image(img, xStarting, yStarting, imageWidth, imageHeight);
  }
  p5.mouseDragged = () => {
    if (p5.mouseX <= xStarting+imageWidth && p5.mouseY <= yStarting+imageHeight && p5.mouseX >= xStarting && p5.mouseY >= yStarting) {
      p5.background(255);
      p5.image(img, p5.mouseX-imageWidth/2, p5.mouseY -imageHeight/2, imageWidth, imageHeight);
    }
    
  };

  };

  const p5 = new P5(sketch);

  return {
    cleanup: p5.remove,
  };
};



export default function Tbi() {
  


return (
  <div class="container h-screen">
    <header class="header flex flex-row justify-between h-fit items-center">
      <div class="flex flex-row gap-4 items-center w-full justify-center pt-8">
          <h1 class="font-sans font-bold text-headline text-5xl">Schädel-Hirn-Trauma</h1>
      </div>
    </header>
    <div  class="  w-screen flex flex-col items-center justify-center">
      <P5Canvas sketch={visualisation}/>
    </div>
  </div>
)
}