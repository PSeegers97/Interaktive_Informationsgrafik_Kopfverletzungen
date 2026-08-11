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
      <a href="Uebersicht" class="flex flex-row gap-4 items-center w-1/3 justify-end">
                <h2 class="text-3xl">Weiter</h2>
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 16.7275C0.89543 16.7275 0 15.8321 0 14.7275C0 13.623 0.89543 12.7275 2 12.7275L2 14.7275L2 16.7275ZM43.4142 13.3133C44.1953 14.0944 44.1953 15.3607 43.4142 16.1418L30.6863 28.8697C29.9052 29.6507 28.6389 29.6507 27.8579 28.8697C27.0768 28.0886 27.0768 26.8223 27.8579 26.0412L39.1716 14.7275L27.8579 3.41383C27.0768 2.63278 27.0768 1.36645 27.8579 0.585403C28.6389 -0.195645 29.9052 -0.195645 30.6863 0.585403L43.4142 13.3133ZM2 14.7275L2 12.7275L42 12.7275V14.7275V16.7275L2 16.7275L2 14.7275Z" fill="black"/>
                </svg>
            </a>
    </header>
    <div ref={containerRef} id="sketch" class="h-7/8 w-full">
    {size.width > 0 && size.height > 0 && (
      <P5Canvas sketch={sketch}  width={size.width} height={size.height}/>
    )}
    </div>
  
  </div>
)
}