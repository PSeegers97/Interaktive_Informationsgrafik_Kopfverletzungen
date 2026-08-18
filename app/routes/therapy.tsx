import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";
import { P5Canvas } from "@p5-wrapper/react";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Therapy() {
/*   return <P5Canvas sketch={sketch}  />; */
return (
  <div class="container h-screen">
    <header class="header flex flex-row justify-between h-1/8 items-center">
            <a href="Arzt" class="flex flex-row gap-4 items-center w-1/3 justify-start">
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42 16.7275C43.1046 16.7275 44 15.8321 44 14.7275C44 13.623 43.1046 12.7275 42 12.7275V14.7275V16.7275ZM0.585785 13.3133C-0.195263 14.0944 -0.195263 15.3607 0.585785 16.1418L13.3137 28.8697C14.0948 29.6507 15.3611 29.6507 16.1421 28.8697C16.9232 28.0886 16.9232 26.8223 16.1421 26.0412L4.82843 14.7275L16.1421 3.41383C16.9232 2.63278 16.9232 1.36645 16.1421 0.585403C15.3611 -0.195645 14.0948 -0.195645 13.3137 0.585403L0.585785 13.3133ZM42 14.7275V12.7275L2 12.7275V14.7275V16.7275L42 16.7275V14.7275Z" fill="black"/>
                </svg>
                <h2 class="text-3xl">Arzt</h2>
            </a>
            <div class="flex flex-row gap-4 items-center w-1/3 justify-center">
                <svg class="h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395.54 418.95"><g id="c"><polygon points="224.57 113.27 224.53 166.35 164.36 166.35 164.36 113.26 163.75 113.26 111.27 113.26 111.27 53.09 164.38 53.12 164.38 53.12 164.36 0 224.53 0 224.46 53.09 224.46 53.09 277.62 53.09 277.62 113.26 224.67 113.26 224.57 113.27"/><path d="M111.89,310.41s.96-4.25-11.3-11.12-62.32-29.93-62.32-29.93c0,0-18.98-7.71-21.89-23.8-.07-.39-.12-.79-.16-1.19L1.6,96.33c-.51-5.21,1.05-10.43,4.39-14.46,3.86-4.66,8.02-7.61,13.67-8.43,12.66-1.82,31.08,13.28,35.68,39.83h0l11.43,66.15,1.89,8.89" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M111.89,310.41l19.16,107.03,57.94-.15-27.67-151.98s-1.48-12.86-17.41-26.63c-.19-.16-.37-.33-.55-.5-3.23-3.14-37.42-35.91-67.49-47.56l-7.6-2.49s-24.52-5.33-29.01,7.16c-4.02,11.18-2.51,28.72,37.93,46.42" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M283.65,309.41s-.96-4.25,11.3-11.12,62.32-29.93,62.32-29.93c0,0,18.98-7.71,21.89-23.8.07-.39.12-.79.16-1.19l14.62-148.04c.51-5.21-1.05-10.43-4.39-14.46-3.86-4.66-8.02-7.61-13.67-8.43-12.66-1.82-31.08,13.28-35.68,39.83h0l-11.43,66.15-1.89,8.89" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/><path d="M283.65,309.41l-19.16,107.03-57.94-.15,27.67-151.98s1.48-12.86,17.41-26.63c.19-.16.37-.33.55-.5,3.23-3.14,37.42-35.91,67.49-47.56l7.6-2.49s24.52-5.33,29.01,7.16c4.02,11.18,2.51,28.72-37.93,46.42" stroke="#fff" stroke-miterlimit="10" stroke-width="3"/></g></svg>
                <h1 class="text-5xl">Behandlung</h1>
            </div>
            <a href="Langzeitfolgen" class="flex flex-row gap-4 items-center w-1/3 justify-end">
                <h2 class="text-3xl">Langzeitfolgen</h2>
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 16.7275C0.89543 16.7275 0 15.8321 0 14.7275C0 13.623 0.89543 12.7275 2 12.7275L2 14.7275L2 16.7275ZM43.4142 13.3133C44.1953 14.0944 44.1953 15.3607 43.4142 16.1418L30.6863 28.8697C29.9052 29.6507 28.6389 29.6507 27.8579 28.8697C27.0768 28.0886 27.0768 26.8223 27.8579 26.0412L39.1716 14.7275L27.8579 3.41383C27.0768 2.63278 27.0768 1.36645 27.8579 0.585403C28.6389 -0.195645 29.9052 -0.195645 30.6863 0.585403L43.4142 13.3133ZM2 14.7275L2 12.7275L42 12.7275V14.7275V16.7275L2 16.7275L2 14.7275Z" fill="black"/>
                </svg>
            </a>
        </header>

        <div class="mx-auto h-3/4">
            <div class="flex flex-row gap-32 h-full">
                <div class="h-full">
                    <svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 664.84 963.89"><g id="c"><path d="M93.73,963.82s.72-20.86,11.55-77.06c10.83-56.2,10.32-153.42,10.32-153.42,0,0-4.54-65.22-31.87-116.26s-35.06-101.57-35.06-101.57l-5.26-188.14c28.87-140.42,145.14-233.59,288.53-233.59s253.63,93.19,287.61,226.15v196.5s-7.73,50.53-35.06,101.57c-27.33,51.04-34.83,121.71-34.83,121.71,0,0,.16,92.01,10.99,148.21,10.83,56.2,13.88,75.88,13.88,75.88h0" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="4"/><path d="M402.96,742.76c-8.9,26.07-34.42,38.09-63.5,38.09-27.43,0-50.3-14.9-60.35-38.68l-156.16-93.7c-10.48-7.04-18.83-16.81-24.16-28.26l-47.73-102.52-5.39-177.88c11.01-123.17,127.3-242.16,286.7-242.16h0c159.39,0,269.89,128.22,286.75,238.71v172.02l-58.53,120.29c-5.01,10.3-12.69,19.07-22.25,25.4l-135.38,88.69Z" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="4"/><path d="M614.99,495.99s-2.2,32.47,14.06,33.91,20.61-32.53,20.61-32.53c.9-12.29,6.68-40.28,6.68-40.28,7.86-38.48,7.32-66.11,7.32-66.11,0-53.65-17.09-69.88-27.07-69.68-9.98.2-16.08,15.07-16.08,15.07l-5.52,159.62Z" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M621.51,349.9s7.17-19.87,18.44-19.87,22.04,40.5,21.63,55.25l-1.54-2.71s-13.28-57.41-30.85-44.55c0,0-5.56,5.56-7.68,11.88Z" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M620.83,382.46s6.23-19.56,16.38-19.56c10.14,0,28.21,25.45,26.52,46.7s-9.95,28.33-17.2,36.09c0,0-4.38,6.75-7.08,13.32s-7.68,6.46-7.68,6.46c0,0-8.33,0-9.61-11.11,0,0,9.72-17.94,9.84-28.13s-3.13-17.01-7.29-26.39-3.88-17.38-3.88-17.38Z" fill="#a57859" stroke="#a57859" stroke-miterlimit="10" stroke-width="2"/><path d="M618.8,376.13s1.6,12.79,4.57,20.33c2.97,7.54,9.37,20.33,8.68,28.78-.69,8.45-4.34,18.73-10.51,29.24s-6.4,27.41-6.4,27.41" fill="#f2b07e" stroke="#846149" stroke-miterlimit="10" stroke-width="2"/><path d="M655.56,439.01s-16.66,26.39-12.55,35.78c0,0,2.46,7.98,14.19-24.05l3.22-18.64-4.86,6.91Z" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M323.51,532.15c2.15,5.26-2.82,3.6-18.91.42s-19.53-7.66-19.53-7.66c0,0,2.47-5.1,10.98-4.33l10.75,2.05s14.18,9.52,16.71,9.52" fill="#a57859" stroke="#a57859" stroke-miterlimit="10" stroke-width="2"/><path d="M389.61,523.84s-2.83,6.72-21.35,9.93c-11.84,2.05-17,3.55-16.37-1.84,0,0,11.02-5.64,15.62-10.01s22.53-1.13,22.11,1.92Z" fill="#a57859" stroke="#a57859" stroke-miterlimit="10" stroke-width="2"/><path d="M324.5,531.89s12.62,25.58,27.01-.2" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M226.07,597.15s24.89,4.79,37.4,1.95,39.96-15.47,44.71-18.96,16.9-8.8,27.51-1.4c0,0,5.17,4.05,12.57,0,0,0,16.2-8.38,29.46.28s29.45,14.84,29.45,14.84c0,0,13.95,7.61,44.84,3.28,0,0-107.84,86.53-225.94,0" fill="#ef7f7f" stroke="#bc4242" stroke-miterlimit="10" stroke-width="2"/><path d="M232.05,598.33s9.45,11.59,42.8,10.86c34.67-.76,51.3-4.39,51.3-4.39,0,0,14.83-4.49,28.98,0s72.38,8.91,90.68-6.47" fill="none" stroke="#bc4242" stroke-miterlimit="10" stroke-width="2"/><path d="M294.53,690.18s43.9-27.05,91.8,0" fill="none" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M407.72,385.59s6.07-5.15,8.84-12.7c3.64-9.88,23.34-36.18,63.98-36.18,0,0,20.87-.55,41.6,10.09s38.19,21.28,38.19,21.28c0,0-42.82,56.46-132.29,19.64,0,0-11.1-4.36-20.31-2.12" fill="#fff" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M412.53,382.98c4.38-.29,10.43,1.17,10.43,1.17,4.43-8.24-.89-10.89-3.49-12.79-1.07,1.99-1.87,3.85-3.12,5.94-1.28,2.14-2.58,4.03-3.83,5.68Z" fill="#ed9f9f" stroke="#ed9f9f" stroke-miterlimit="10" stroke-width="2"/><circle cx="482.45" cy="368.36" r="29.43" fill="#6c85ff" stroke="#6c85ff" stroke-miterlimit="10" stroke-width="2"/><circle cx="482.45" cy="368.36" r="11.39" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><ellipse cx="486.52" cy="363.19" rx="2.99" ry="3.49" transform="translate(-71.27 602.93) rotate(-60)" fill="#fff"/><path d="M269.36,385.59s-6.07-5.15-8.84-12.7c-3.64-9.88-23.34-36.18-63.98-36.18,0,0-20.87-.55-41.6,10.09-20.73,10.64-38.19,21.28-38.19,21.28,0,0,42.82,56.46,132.29,19.64,0,0,11.1-4.36,20.31-2.12" fill="#fff" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M264.55,382.98c-4.38-.29-10.43,1.17-10.43,1.17-4.43-8.24.89-10.89,3.49-12.79,1.07,1.99,1.87,3.85,3.12,5.94,1.28,2.14,2.58,4.03,3.83,5.68Z" fill="#ed9f9f" stroke="#ed9f9f" stroke-miterlimit="10" stroke-width="2"/><circle cx="194.63" cy="368.36" r="29.43" fill="#6c85ff" stroke="#6c85ff" stroke-miterlimit="10" stroke-width="2"/><circle cx="194.63" cy="368.36" r="11.39" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><ellipse cx="198.7" cy="363.19" rx="2.99" ry="3.49" transform="translate(-215.18 353.67) rotate(-60)" fill="#fff"/><path d="M250.57,306.68s-64.08-29.29-124.89,7.44" fill="none" stroke="#604236" stroke-miterlimit="10" stroke-width="10"/><path d="M421.11,306.68s64.08-29.29,124.89,7.44" fill="none" stroke="#604236" stroke-miterlimit="10" stroke-width="10"/><path d="M193.49,186.26c-53.12,18.78-89.85,47.26-110.49,65.95-2.28,4.65-6.99,50.91-7.95,56-2.72,14.47-8.32,46.06-8.04,59.95l-13.26-2.39-2.61-28.49c-3.07-5.38-7.36-9.23-7.36-9.23-4.8-4.31-9.73-6.38-12.74-7.38-1.12-20.93-2.41-69.2,8.62-105.53C74.77,99.41,195.48,5.76,329.86,4.32l.2.03c19.67,0,156.67-14.67,267.53,144.22,22.84,34.58,34.97,89.92,35.49,119.88.1,6,.19,12.09.21,18.27.04,10.44-.07,23.5-.63,33.97-3.01,1-7.94,3.07-12.74,7.38,0,0-4.29,3.86-7.36,9.23l-2.61,28.49-13.26,2.39c.28-13.89-5.31-45.47-8.04-59.95-.96-5.09-5.66-51.35-7.95-56-20.64-18.69-57.36-47.17-110.49-65.95-59.27-20.95-130.84-17.58-130.84-17.58,0,0-86.61-3.4-145.88,17.55Z" fill="#604236" stroke="#604236" stroke-miterlimit="10" stroke-width="8"/><path d="M382.81,332.97s-10.55,9.8-11.66,23.24c-1.05,12.73-7.62,85.76,33.18,119.83,4.84,4.04,8.73,9.14,10.89,15.06,3.69,10.11,5.05,24.91-11.55,35.33l1.57-.98c-9.61,6.61-14.69.23-14.69.23-2.1-9.34-23.04-3.76-23.04-3.76-30.13,26.98-60.71.7-60.71.7l-6.98-1.56c-12.03-2.2-14.75,3.84-14.75,3.84-7.47,2.29-10.15.28-10.15.28-16.6-10.42-15.25-25.22-11.55-35.33,2.16-5.92,6.05-11.02,10.89-15.06,40.79-34.07,32.38-107.1,31.32-119.83-1.11-13.44-11.66-23.24-11.66-23.24" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M49.85,498.18s2.2,32.47-14.06,33.91c-16.27,1.45-20.61-32.53-20.61-32.53-.9-12.29-6.68-40.28-6.68-40.28-7.86-38.48-7.32-66.11-7.32-66.11,0-53.65,17.09-69.88,27.07-69.68,9.98.2,16.08,15.07,16.08,15.07l5.52,159.62Z" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M43.32,352.09s-7.17-19.87-18.44-19.87-22.04,40.5-21.63,55.25l1.54-2.71s13.28-57.41,30.85-44.55c0,0,5.56,5.56,7.68,11.88Z" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M44.01,384.65s-6.23-19.56-16.38-19.56c-10.14,0-28.21,25.45-26.52,46.7s9.95,28.33,17.2,36.09c0,0,4.38,6.75,7.08,13.32s7.68,6.46,7.68,6.46c0,0,8.33,0,9.61-11.11,0,0-9.72-17.94-9.84-28.13-.12-10.19,3.13-17.01,7.29-26.39,4.17-9.38,3.88-17.38,3.88-17.38Z" fill="#a57859" stroke="#a57859" stroke-miterlimit="10" stroke-width="2"/><path d="M46.04,378.32s-1.6,12.79-4.57,20.33c-2.97,7.54-9.37,20.33-8.68,28.78.69,8.45,4.34,18.73,10.51,29.24,6.17,10.51,6.4,27.41,6.4,27.41" fill="#f2b07e" stroke="#846149" stroke-miterlimit="10" stroke-width="2"/><path d="M9.28,441.19s16.66,26.39,12.55,35.78c0,0-2.46,7.98-14.19-24.05l-3.22-18.64,4.86,6.91Z" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/></g></svg>
                </div>
                <div class="flex flex-col gap-6 justify-center">
                    <details class="">
                        <summary class="flex flex-row items-center gap-9"> 
                            <div class="w-35 flex flex-row justify-center">
                                <svg class="h-34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331.03 436.55"><g id="c"><path d="M330.03,242.65c0-16.23-9.62-30.12-27.92-35.02-8.01-2.15-16.54-1.2-24.07,2.3-20.79,9.68-74.36,32.77-112.31,32.77s-89.99-22.07-111.52-31.88c-8.57-3.9-18.23-4.96-27.36-2.62-19.08,4.89-25.85,18.36-25.85,34.44v192.9l328.95-.06v-192.84" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><circle cx="165.51" cy="99.66" r="99.66"/><polygon points="186.97 358.9 186.94 399.64 140.75 399.64 140.75 358.89 140.28 358.88 100 358.89 100 312.7 140.77 312.73 140.77 312.73 140.75 271.95 186.94 271.95 186.88 312.7 186.88 312.7 227.69 312.7 227.69 358.89 187.04 358.89 186.97 358.9" fill="#fff"/></g></svg>
                            </div>
                            <div class="flex flex-row gap-5 items-center">
                                <p class="font-bold text-3xl">Fachärztliche Betreuung</p>
                                <svg width="33" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_179_2305)">
                                        <path d="M2 2L16.14 16.14" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
                                        <path d="M16.2 16.14L30.34 2" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_179_2305">
                                        <rect width="32.34" height="18.14" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </summary>
                        <div class="pl-40">
                            <p class="">
                               Sportler:innen sollten während der Regenerationszeit von Fachärzten (Neurologen oder Psychologen) betreut werden. Somit kann sichergestellt werden, ab wann das Gehirn wieder die volle Leistung besitzt. Die Ärzte können feststellen, ab wann wieder mit leichter Bewegung begonnen werden kann. 
                            </p>
                            </div>
                    </details>

                    <details class="group">
                        <summary class="flex flex-row items-center gap-9">
                            <div class="w-35 flex flex-row justify-center">
                                <svg class="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436.23 167.64"><g id="c"><polyline points="379.44 111.41 379.44 167.64 436.23 167.64 436.23 83.21 436.23 83.21 54.58 83.21 54.58 83.18 54.58 0 0 0 0 167.51 54.58 167.51 54.58 111.48 54.58 111.41 379.52 111.41"/><circle cx="88.57" cy="59.38" r="27.02"/><path d="M436.22,83.66H125.4v-32.78c0-3.83.91-7.55,2.6-10.59,8.35-15.11,38.38-24.68,111.05-34.74,14.12-1.96,47.06-3.54,66.44,0,13.13,2.34,89.29,13.39,130.73,78.12Z"/></g></svg>
                            </div>
                            <div class="flex flex-row gap-5 items-center"> 
                                <p class="font-bold text-3xl">Schlafen/Ruhe</p>
                                <svg class="open:group:rotate-180" width="33" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_179_2305)">
                                        <path d="M2 2L16.14 16.14" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
                                        <path d="M16.2 16.14L30.34 2" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_179_2305">
                                        <rect width="32.34" height="18.14" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </summary>
                        <p class="pl-40">
                            Sportler:innen sollten eine Sportpause einlegen, damit sich das Gehirn erholen kann. Für sportliche Tätigkeit wird das Gehirn benötigt, um die Bewegungsabläufe zu koordinieren. Gerade das ist für das Gehirn, welches sich im Ausnahmezustand befindet, kontraproduktiv. Es benötigt eine Sportpause, um den eigenen Haushalt wieder herzustellen. Nach ärztlicher Abklärung kann langsam wieder mit dem Sport begonnen werden.
                        </p>
                    </details>
        
                    <details class="group">
                        <summary class="flex flex-row items-center gap-9"> 
                            <div class="w-35 flex flex-row justify-center">
                                <svg class="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435.74 435.74"><g id="c"><circle cx="217.87" cy="217.87" r="217.87"/><path d="M392.28,217.87c0,96.32-78.08,174.4-174.4,174.4-58.21,0-109.75-28.51-141.43-72.34-20.74-28.7-32.97-63.95-32.97-102.07,0-96.32,78.08-174.4,174.4-174.4s174.4,78.08,174.4,174.4Z" fill="#fff"/><circle cx="284.01" cy="125.84" r="30.11" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="5"/><path d="M168.87,191l-9.94,9.28s-16.46,11.43-19.52,34.92-6.68,33.12-18.07,32.97l-17.63.77c-9.89,0-17.9,8.01-17.9,17.9s7.86,18.93,17.75,18.93l42.34-.79c7.88,0,13.38-6.97,15.61-14.53l8.18-24.95s4.01-11.76,11.26-4.26l29.48,34.39s3.49,3.89,3.57,11.91.31,29.49.31,29.49c0,9.89,8.01,17.9,17.9,17.9s18.94-7.89,18.94-17.78l-.31-44.52c0-7.88-7.04-14.4-12.39-19.3l-12.27-10.56.1-.05c-2.41-2.55-3.88-6-3.88-9.78,0-7.88,6.9-12.41,12.62-17.84l21.8-21.81s3.68-2.36,4.62,4.34,4.24,21.47,4.24,21.47c0,0,3.22,18.72,23.11,12.94l33.73-9.62c5.07-1.89,8.69-6.78,8.69-12.51,0-7.37-7.36-14.33-15.22-11.9l-14.1,4.58s-8.57,2.6-9.64-7.88-3.67-29.37-3.67-29.37c-.86-7.24-5.97-13.34-13.34-13.34l-2.69.14c-16.63,0-30.14-11.5-30.14-28.13,0-7.37-6.46-14.01-15.33-14.86l-56.85-4.08c-7.37,0-13.34,5.97-13.34,13.34l.39,39.37c0,7.37,5.97,13.34,13.34,13.34s11.9-6,12.24-13.02c.01-.27.02-.55.02-.82l-.61-14.4s-1.3-7.9,7.98-8.16,14.01-.24,14.01-.24l-21.38,23.57" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="5"/><polygon points="78.14 327.08 326.61 79.07 353.37 105.23 104.34 354.02 78.14 327.08"/></g></svg>
                                </div>
                            <div class="flex flex-row gap-5 items-center">
                                <p class="font-bold text-3xl">Sportpause</p>
                                <svg class="open:group:rotate-180" width="33" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_179_2305)">
                                        <path d="M2 2L16.14 16.14" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
                                        <path d="M16.2 16.14L30.34 2" stroke="black" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_179_2305">
                                        <rect width="32.34" height="18.14" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </summary>
                        <p class="pl-40">
                            Der/Die Sportler:in sollte eine Sportpause einlegen, damit sich das Gehirn erholen kann. Für sportliche Tätigkeit wird das Gehirn benötigt, um die Bewegungsabläufe zu koordinieren. Gerade das ist für das Gehirn, welches sich im Ausnahmezustand befindet, kontraproduktiv. Es benötigt eine Sportpause, um den eigenen Haushalt wieder herzustellen. Nach ärztlicher Abklärung kann langsam wieder mit dem Sport begonnen werden.   
                        </p>
                    </details>
                </div>
            </div>
        </div>

        <div class="h-1/8 w-full flex flex-col items-center">
            <a href="Uebersicht" class="bg-white drop-shadow-lg hover:drop-shadow-2xl px-8 py-4 rounded-4xl text-black">Übersicht</a>
        </div>
  </div>
)
}