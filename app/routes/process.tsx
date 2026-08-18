import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";
import { P5Canvas } from "@p5-wrapper/react";

import { useState, useEffect, useId, useRef } from "react";


export default function Process() {

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
/*   return <P5Canvas sketch={sketch}  />; */
return (
  <div class="container h-screen">
    <header class="header flex flex-row justify-between h-1/8 items-center">
            <a href="Uebersicht" class="flex flex-row gap-4 items-center w-1/3 justify-start">
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42 16.7275C43.1046 16.7275 44 15.8321 44 14.7275C44 13.623 43.1046 12.7275 42 12.7275V14.7275V16.7275ZM0.585785 13.3133C-0.195263 14.0944 -0.195263 15.3607 0.585785 16.1418L13.3137 28.8697C14.0948 29.6507 15.3611 29.6507 16.1421 28.8697C16.9232 28.0886 16.9232 26.8223 16.1421 26.0412L4.82843 14.7275L16.1421 3.41383C16.9232 2.63278 16.9232 1.36645 16.1421 0.585403C15.3611 -0.195645 14.0948 -0.195645 13.3137 0.585403L0.585785 13.3133ZM42 14.7275V12.7275L2 12.7275V14.7275V16.7275L42 16.7275V14.7275Z" fill="black"/>
                </svg>
                <h2 class="text-3xl">Übersicht</h2>
            </a>
            <div class="flex flex-row gap-4 items-center w-1/3 justify-center">
                <svg class="h-16"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.58 372.52"><g id="c"><path d="M412.14,101.29c-15.1-17.76-69.01-76.71-161.98-94.61C153.54-11.92,79.21,26.23,59.38,37.23c-8.03,5.73-18.2,14.24-27.99,26.31-11.85,14.61-18.63,28.9-22.54,39.14-4.68,9.43-7.35,20.39-7.35,32.08,0,35.34,19.18,58.28,54.61,63.98,0,0,29.83,4.52,51.32-1.12" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><polygon points="311.04 312.59 336.5 370.8 275.95 371.01 214.25 232.08 272.7 220.04 311.04 312.59" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M383.58,277.17c-10.26,21.41-32.5,37.48-57.83,37.48-35.17,0-63.68-28.51-63.68-63.68,0-5.66.74-11.15,2.13-16.38,14.16-.16,34.56,1.24,57.72,8.64,29.03,9.27,49.64,23.89,61.67,33.94Z" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M412.14,101.29c20.47,23.23,28.03,64.88,23.8,95.17-6.95,49.8-38.41,94.93-78.14,78.19,0,0-66.15-61.9-198.64-37.87-28.8,5.22-53-23.73-53-53s23.73-53,53-53c0,0,47.18,7.85,76.41-21.79" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M85.04,107.99s26.9.65,36.29,22.68" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M65.6,33.45s19.77,9.72,22.36,27.22" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M185.81,1.29s-58.56,35.18-18.36,74.32" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M205.95,74.18s4.79-6.61,5.07-13.45-3.96-13.92-22.01-14.85" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M211.02,60.73s2.19-22.11,27.88-26.02" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M305.54,23.39s-32.94,17.51-13.06,47.18" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M317.7,54.84s8.61,23.74-10.39,36.2" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M137.98,202.6s-8.7-30.32,37.7-40.07c0,0,88.37,1.4,97.32-34.38" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M382.68,111.12s-26,12.23-18.35,42.82" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M304.69,119.38c27.83-1.22,36.4,14.07,36.4,14.07,0,0-11.62-25.54,8.56-42.51" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M228.43,194.38s23.46-.89,32.41-10.1,13.56-15.86,36.59-12.54c0,0,8.19.51,21.75-9.72" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M389.05,166.12c2.05,20.48-36.86,32.08-36.86,32.08,0,0,19.11-12.63,35.49,5.8" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M356.89,234.65s-45.59-2.63-62.83-26.3c0,0-15.49,15.49-34.77,13.44" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M33.37,128.53s13.11,45.56,37.73,44.92" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/></g></svg>
                <h1 class="text-5xl">Ablauf</h1>
            </div>
            <a href="Symptome" class="flex flex-row gap-4 items-center w-1/3 justify-end">
                <h2 class="text-3xl">Symptome</h2>
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 16.7275C0.89543 16.7275 0 15.8321 0 14.7275C0 13.623 0.89543 12.7275 2 12.7275L2 14.7275L2 16.7275ZM43.4142 13.3133C44.1953 14.0944 44.1953 15.3607 43.4142 16.1418L30.6863 28.8697C29.9052 29.6507 28.6389 29.6507 27.8579 28.8697C27.0768 28.0886 27.0768 26.8223 27.8579 26.0412L39.1716 14.7275L27.8579 3.41383C27.0768 2.63278 27.0768 1.36645 27.8579 0.585403C28.6389 -0.195645 29.9052 -0.195645 30.6863 0.585403L43.4142 13.3133ZM2 14.7275L2 12.7275L42 12.7275V14.7275V16.7275L2 16.7275L2 14.7275Z" fill="black"/>
                </svg>
            </a>
        </header>

        <div ref={containerRef} class="mx-auto h-3/4 flex flex-col items-center justify-center">
            <video class="h-full" src="./public/assets/videos/ausloeser/ausloeser.mp4" autoplay="true" />
        </div>
        <div class="h-1/8 w-full flex flex-col items-center">
            <a href="Uebersicht" class="bg-gray-500 px-8 py-4 rounded-4xl text-white">Übersicht</a>
        </div>
  </div>
)
}