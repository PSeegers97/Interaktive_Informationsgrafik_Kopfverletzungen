import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";
import { P5Canvas } from "@p5-wrapper/react";
import { useState, useEffect, useId, useRef } from "react";
import Singlesymptom from "./singlesymptom";
import { useNavigate } from "react-router";



function SymptomButton ({symptomName, slug,handleClick}) {   
    let cssClasses = "";
    let svgElement = "";
    if (slug) {
        svgElement = <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 664.84 963.89"><g id="c"><path d="M93.73,963.82s.72-20.86,11.55-77.06c10.83-56.2,10.32-153.42,10.32-153.42,0,0-4.54-65.22-31.87-116.26s-35.06-101.57-35.06-101.57l-5.26-188.14c28.87-140.42,145.14-233.59,288.53-233.59s253.63,93.19,287.61,226.15v196.5s-7.73,50.53-35.06,101.57c-27.33,51.04-34.83,121.71-34.83,121.71,0,0,.16,92.01,10.99,148.21,10.83,56.2,13.88,75.88,13.88,75.88h0" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="4"/><path d="M402.96,742.76c-8.9,26.07-34.42,38.09-63.5,38.09-27.43,0-50.3-14.9-60.35-38.68l-156.16-93.7c-10.48-7.04-18.83-16.81-24.16-28.26l-47.73-102.52-5.39-177.88c11.01-123.17,127.3-242.16,286.7-242.16h0c159.39,0,269.89,128.22,286.75,238.71v172.02l-58.53,120.29c-5.01,10.3-12.69,19.07-22.25,25.4l-135.38,88.69Z" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="4"/><path d="M614.99,495.99s-2.2,32.47,14.06,33.91,20.61-32.53,20.61-32.53c.9-12.29,6.68-40.28,6.68-40.28,7.86-38.48,7.32-66.11,7.32-66.11,0-53.65-17.09-69.88-27.07-69.68-9.98.2-16.08,15.07-16.08,15.07l-5.52,159.62Z" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M621.51,349.9s7.17-19.87,18.44-19.87,22.04,40.5,21.63,55.25l-1.54-2.71s-13.28-57.41-30.85-44.55c0,0-5.56,5.56-7.68,11.88Z" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M620.83,382.46s6.23-19.56,16.38-19.56c10.14,0,28.21,25.45,26.52,46.7s-9.95,28.33-17.2,36.09c0,0-4.38,6.75-7.08,13.32s-7.68,6.46-7.68,6.46c0,0-8.33,0-9.61-11.11,0,0,9.72-17.94,9.84-28.13s-3.13-17.01-7.29-26.39-3.88-17.38-3.88-17.38Z" fill="#a57859" stroke="#a57859" stroke-miterlimit="10" stroke-width="2"/><path d="M618.8,376.13s1.6,12.79,4.57,20.33c2.97,7.54,9.37,20.33,8.68,28.78-.69,8.45-4.34,18.73-10.51,29.24s-6.4,27.41-6.4,27.41" fill="#f2b07e" stroke="#846149" stroke-miterlimit="10" stroke-width="2"/><path d="M655.56,439.01s-16.66,26.39-12.55,35.78c0,0,2.46,7.98,14.19-24.05l3.22-18.64-4.86,6.91Z" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M323.51,532.15c2.15,5.26-2.82,3.6-18.91.42s-19.53-7.66-19.53-7.66c0,0,2.47-5.1,10.98-4.33l10.75,2.05s14.18,9.52,16.71,9.52" fill="#a57859" stroke="#a57859" stroke-miterlimit="10" stroke-width="2"/><path d="M389.61,523.84s-2.83,6.72-21.35,9.93c-11.84,2.05-17,3.55-16.37-1.84,0,0,11.02-5.64,15.62-10.01s22.53-1.13,22.11,1.92Z" fill="#a57859" stroke="#a57859" stroke-miterlimit="10" stroke-width="2"/><path d="M324.5,531.89s12.62,25.58,27.01-.2" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M226.07,597.15s24.89,4.79,37.4,1.95,39.96-15.47,44.71-18.96,16.9-8.8,27.51-1.4c0,0,5.17,4.05,12.57,0,0,0,16.2-8.38,29.46.28s29.45,14.84,29.45,14.84c0,0,13.95,7.61,44.84,3.28,0,0-107.84,86.53-225.94,0" fill="#ef7f7f" stroke="#bc4242" stroke-miterlimit="10" stroke-width="2"/><path d="M232.05,598.33s9.45,11.59,42.8,10.86c34.67-.76,51.3-4.39,51.3-4.39,0,0,14.83-4.49,28.98,0s72.38,8.91,90.68-6.47" fill="none" stroke="#bc4242" stroke-miterlimit="10" stroke-width="2"/><path d="M294.53,690.18s43.9-27.05,91.8,0" fill="none" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M407.72,385.59s6.07-5.15,8.84-12.7c3.64-9.88,23.34-36.18,63.98-36.18,0,0,20.87-.55,41.6,10.09s38.19,21.28,38.19,21.28c0,0-42.82,56.46-132.29,19.64,0,0-11.1-4.36-20.31-2.12" fill="#fff" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M412.53,382.98c4.38-.29,10.43,1.17,10.43,1.17,4.43-8.24-.89-10.89-3.49-12.79-1.07,1.99-1.87,3.85-3.12,5.94-1.28,2.14-2.58,4.03-3.83,5.68Z" fill="#ed9f9f" stroke="#ed9f9f" stroke-miterlimit="10" stroke-width="2"/><circle cx="482.45" cy="368.36" r="29.43" fill="#6c85ff" stroke="#6c85ff" stroke-miterlimit="10" stroke-width="2"/><circle cx="482.45" cy="368.36" r="11.39" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><ellipse cx="486.52" cy="363.19" rx="2.99" ry="3.49" transform="translate(-71.27 602.93) rotate(-60)" fill="#fff"/><path d="M269.36,385.59s-6.07-5.15-8.84-12.7c-3.64-9.88-23.34-36.18-63.98-36.18,0,0-20.87-.55-41.6,10.09-20.73,10.64-38.19,21.28-38.19,21.28,0,0,42.82,56.46,132.29,19.64,0,0,11.1-4.36,20.31-2.12" fill="#fff" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M264.55,382.98c-4.38-.29-10.43,1.17-10.43,1.17-4.43-8.24.89-10.89,3.49-12.79,1.07,1.99,1.87,3.85,3.12,5.94,1.28,2.14,2.58,4.03,3.83,5.68Z" fill="#ed9f9f" stroke="#ed9f9f" stroke-miterlimit="10" stroke-width="2"/><circle cx="194.63" cy="368.36" r="29.43" fill="#6c85ff" stroke="#6c85ff" stroke-miterlimit="10" stroke-width="2"/><circle cx="194.63" cy="368.36" r="11.39" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><ellipse cx="198.7" cy="363.19" rx="2.99" ry="3.49" transform="translate(-215.18 353.67) rotate(-60)" fill="#fff"/><path d="M250.57,306.68s-64.08-29.29-124.89,7.44" fill="none" stroke="#604236" stroke-miterlimit="10" stroke-width="10"/><path d="M421.11,306.68s64.08-29.29,124.89,7.44" fill="none" stroke="#604236" stroke-miterlimit="10" stroke-width="10"/><path d="M193.49,186.26c-53.12,18.78-89.85,47.26-110.49,65.95-2.28,4.65-6.99,50.91-7.95,56-2.72,14.47-8.32,46.06-8.04,59.95l-13.26-2.39-2.61-28.49c-3.07-5.38-7.36-9.23-7.36-9.23-4.8-4.31-9.73-6.38-12.74-7.38-1.12-20.93-2.41-69.2,8.62-105.53C74.77,99.41,195.48,5.76,329.86,4.32l.2.03c19.67,0,156.67-14.67,267.53,144.22,22.84,34.58,34.97,89.92,35.49,119.88.1,6,.19,12.09.21,18.27.04,10.44-.07,23.5-.63,33.97-3.01,1-7.94,3.07-12.74,7.38,0,0-4.29,3.86-7.36,9.23l-2.61,28.49-13.26,2.39c.28-13.89-5.31-45.47-8.04-59.95-.96-5.09-5.66-51.35-7.95-56-20.64-18.69-57.36-47.17-110.49-65.95-59.27-20.95-130.84-17.58-130.84-17.58,0,0-86.61-3.4-145.88,17.55Z" fill="#604236" stroke="#604236" stroke-miterlimit="10" stroke-width="8"/><path d="M382.81,332.97s-10.55,9.8-11.66,23.24c-1.05,12.73-7.62,85.76,33.18,119.83,4.84,4.04,8.73,9.14,10.89,15.06,3.69,10.11,5.05,24.91-11.55,35.33l1.57-.98c-9.61,6.61-14.69.23-14.69.23-2.1-9.34-23.04-3.76-23.04-3.76-30.13,26.98-60.71.7-60.71.7l-6.98-1.56c-12.03-2.2-14.75,3.84-14.75,3.84-7.47,2.29-10.15.28-10.15.28-16.6-10.42-15.25-25.22-11.55-35.33,2.16-5.92,6.05-11.02,10.89-15.06,40.79-34.07,32.38-107.1,31.32-119.83-1.11-13.44-11.66-23.24-11.66-23.24" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M49.85,498.18s2.2,32.47-14.06,33.91c-16.27,1.45-20.61-32.53-20.61-32.53-.9-12.29-6.68-40.28-6.68-40.28-7.86-38.48-7.32-66.11-7.32-66.11,0-53.65,17.09-69.88,27.07-69.68,9.98.2,16.08,15.07,16.08,15.07l5.52,159.62Z" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M43.32,352.09s-7.17-19.87-18.44-19.87-22.04,40.5-21.63,55.25l1.54-2.71s13.28-57.41,30.85-44.55c0,0,5.56,5.56,7.68,11.88Z" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M44.01,384.65s-6.23-19.56-16.38-19.56c-10.14,0-28.21,25.45-26.52,46.7s9.95,28.33,17.2,36.09c0,0,4.38,6.75,7.08,13.32s7.68,6.46,7.68,6.46c0,0,8.33,0,9.61-11.11,0,0-9.72-17.94-9.84-28.13-.12-10.19,3.13-17.01,7.29-26.39,4.17-9.38,3.88-17.38,3.88-17.38Z" fill="#a57859" stroke="#a57859" stroke-miterlimit="10" stroke-width="2"/><path d="M46.04,378.32s-1.6,12.79-4.57,20.33c-2.97,7.54-9.37,20.33-8.68,28.78.69,8.45,4.34,18.73,10.51,29.24,6.17,10.51,6.4,27.41,6.4,27.41" fill="#f2b07e" stroke="#846149" stroke-miterlimit="10" stroke-width="2"/><path d="M9.28,441.19s16.66,26.39,12.55,35.78c0,0-2.46,7.98-14.19-24.05l-3.22-18.64,4.86,6.91Z" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/></g></svg>
        cssClasses = "bg-gray-400 px-4 py-8 rounded-4xl h-fit w-fit bg-white drop-shadow-lg hover:drop-shadow-2xl"
    } 
    else {
        cssClasses = "px-4 py-8 rounded-4xl h-fit w-fit"
    }
    return (
    <button class={cssClasses} onClick={handleClick} >
        <h3 class="">{symptomName}</h3>
    </button>
    );
}


export default function Symptoms() {
const [symptom, setSymptom] = useState({name: "Symptome", videoLink:"", slug:"" });
const navigate = useNavigate();

const handleClick = (symptomName, url, slug) => {
    if (slug) {
        setSymptom({name:symptomName, videoLink:url, slug:slug});
        navigate(`/Symptome/${slug}`);
    }
}

const symptoms = [
    {id:0, symptom:"Schwindel", url:"../../public/assets/videos/Schwindel.mp4", slug:"Schwindel"},
    {id:1, symptom:"Übelkeit und Erbrechen", url:"", slug:""},
    {id:2, symptom:"Kopf- und Nackenschmerzen", url:"../../public/assets/videos/Kopfschmerzen.mp4", slug:"Kopf-und-Nackenschmerzen"},
    {id:3, symptom:"Schlafprobleme", url:"", slug:""},
    {id:4, symptom:"Bewusstlosigkeit", url:"../../public/assets/illustration/bewusstlos.png", slug:"Bewusstlosigkeit"},
    {id:5, symptom:"Brainfog", url:"../../public/assets/videos/Brainfog.mp4", slug:"Brainfog"},
    {id:6, symptom:"Gedächtnis- und Aufmerksamkeitsprobleme", url:"../../public/assets/videos/Aufmerksamkeit.mp4", slug:"Gedaechtnis-und-Aufmerksamkeitsprobleme"},
]

/*   return <P5Canvas sketch={sketch}  />; */
return (
  <div class="container h-screen flex flex-col gap-8">
    <header class="header flex flex-row justify-between h-31 items-center">
            <a href="Ablauf" class="flex flex-row gap-4 items-center w-1/3 justify-start">
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42 16.7275C43.1046 16.7275 44 15.8321 44 14.7275C44 13.623 43.1046 12.7275 42 12.7275V14.7275V16.7275ZM0.585785 13.3133C-0.195263 14.0944 -0.195263 15.3607 0.585785 16.1418L13.3137 28.8697C14.0948 29.6507 15.3611 29.6507 16.1421 28.8697C16.9232 28.0886 16.9232 26.8223 16.1421 26.0412L4.82843 14.7275L16.1421 3.41383C16.9232 2.63278 16.9232 1.36645 16.1421 0.585403C15.3611 -0.195645 14.0948 -0.195645 13.3137 0.585403L0.585785 13.3133ZM42 14.7275V12.7275L2 12.7275V14.7275V16.7275L42 16.7275V14.7275Z" fill="black"/>
                </svg>
                <h2 class="text-3xl">Ablauf</h2>
            </a>
            <div class="flex flex-row gap-4 items-center w-1/3 justify-center">
                <svg class="h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433.66 368.47"><g id="c"><path d="M199.45,9.22L3.46,336.33c-.29.42-6.6,10.15-1.44,20.56,3.4,6.86,10.44,11.33,18.25,11.57h393.18c8.41-.42,15.78-5.48,18.8-12.91,3.95-9.72-1.62-18.38-2.14-19.17L234.2,9.42c-.61-.91-5.94-8.66-15.94-9.37-11.69-.83-18.54,8.77-18.82,9.17Z"/><path d="M86.35,327.99h260.6c9.21-.66,17.04-6.32,19.84-14.3,3.22-9.15-1.67-17.13-2.38-18.24L235.15,81.59c-.58-.87-6.38-9.3-17.23-9.84-7.82-.39-15.32,3.48-19.61,10.06l-128.98,213.39c-4.47,6.8-4.74,15.42-.69,22.28,5.71,9.65,16.85,10.46,17.7,10.51Z" fill="#fff"/><circle cx="216.83" cy="272.52" r="19.17"/><ellipse cx="216.83" cy="185.24" rx="21.93" ry="52.56"/></g></svg>
                <h1 class="text-5xl">Symptome</h1>
            </div>
            <a href="Trainer" class="flex flex-row gap-4 items-center w-1/3 justify-end">
                <h2 class="text-3xl">Trainer</h2>
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 16.7275C0.89543 16.7275 0 15.8321 0 14.7275C0 13.623 0.89543 12.7275 2 12.7275L2 14.7275L2 16.7275ZM43.4142 13.3133C44.1953 14.0944 44.1953 15.3607 43.4142 16.1418L30.6863 28.8697C29.9052 29.6507 28.6389 29.6507 27.8579 28.8697C27.0768 28.0886 27.0768 26.8223 27.8579 26.0412L39.1716 14.7275L27.8579 3.41383C27.0768 2.63278 27.0768 1.36645 27.8579 0.585403C28.6389 -0.195645 29.9052 -0.195645 30.6863 0.585403L43.4142 13.3133ZM2 14.7275L2 12.7275L42 12.7275V14.7275V16.7275L2 16.7275L2 14.7275Z" fill="black"/>
                </svg>
            </a>
        </header>

        <div class="flex flex-row flex-wrap gap-16 justify-center h-3/4 items-center">
            {symptoms.map((button) => (
               <SymptomButton
                    key={button.symptom}
                    symptomName={button.symptom}
                    slug={button.slug}
                    handleClick={() => navigate(`/Symptome/${button.slug}`, {
                state: {
                    videoLink: button.url,
                    symptom: button.symptom
                }
            })}
        />
        
      ))}
        </div>
        <div class="h-1/8 w-full flex flex-col items-center">
            <a href="Uebersicht" class="px-8 py-4 rounded-4xl text-white bg-white drop-shadow-lg hover:drop-shadow-2xl">Übersicht</a>
        </div>
  </div>
)
}