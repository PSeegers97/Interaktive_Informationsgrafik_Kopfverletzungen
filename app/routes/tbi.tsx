import type { Route } from "./+types/home";
import { P5Canvas } from "@p5-wrapper/react";
import { useState, useEffect, useId, useRef } from "react";
import P5 from "p5";



let img;
let canvas;
let xStarting = 0;
let yStarting = 0;
let imageWidth = 0;
let imageHeight = 0;



type SketchCleanup = { cleanup: () => void };

  const sketch =(p5) => {
    let width, height;
    p5.updateWithProps = (props:any) => {
      width = props.width;
      height = props.height;
      xStarting = width/2 -226;
      imageHeight = props.height;
      imageWidth = props.height * (11/16);
    
  };
    
   p5.setup = async () => {
    p5.createCanvas(width, height); 
    img = await p5.loadImage('/assets/illustration/260714_Illustrationv2.png');
    p5.image(img, xStarting, yStarting, imageWidth, imageHeight);
  }
  p5.mouseDragged = () => {
    if (p5.mouseX <= xStarting+imageWidth && p5.mouseY <= yStarting+imageHeight && p5.mouseX >= xStarting && p5.mouseY >= yStarting) {
      p5.background(255, 247, 245);
      p5.image(img, p5.mouseX-imageWidth/2, p5.mouseY -imageHeight/2, imageWidth, imageHeight);
    }
    
  };

  };





export default function Tbi() {
const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    console.log(containerRef);
    
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      console.log("Width = ",width);
      console.log("Height = ", height);
      

      setSize({
        width: width,
        height: height,
      });
      
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  console.log("width = ",size.width);
  
return (
  <div class="container flex flex-col gap-8 h-screen">
    <header class="header flex flex-row justify-between h-1/8 items-center">
      <div class="flex flex-row gap-4 items-center w-full justify-center pt-8">
          <h1 class="font-sans font-bold text-5xl">Schädel-Hirn-Trauma</h1>
      </div>
    </header>
    <div ref={containerRef} id="sketch" class="h-7/8 w-full">
    {size.width > 0 && size.height > 0 && (
      <P5Canvas sketch={sketch}  width={size.width} height={size.height}/>
    )}
    </div>
  
  </div>
)
}