import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";
import { P5Canvas } from "@p5-wrapper/react";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Doctor() {
/*   return <P5Canvas sketch={sketch}  />; */
return (
  <div class="container h-screen">
    <header class="header flex flex-row justify-between h-1/8 items-center">
            <a href="Trainer" class="flex flex-row gap-4 items-center w-1/3 justify-start">
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42 16.7275C43.1046 16.7275 44 15.8321 44 14.7275C44 13.623 43.1046 12.7275 42 12.7275V14.7275V16.7275ZM0.585785 13.3133C-0.195263 14.0944 -0.195263 15.3607 0.585785 16.1418L13.3137 28.8697C14.0948 29.6507 15.3611 29.6507 16.1421 28.8697C16.9232 28.0886 16.9232 26.8223 16.1421 26.0412L4.82843 14.7275L16.1421 3.41383C16.9232 2.63278 16.9232 1.36645 16.1421 0.585403C15.3611 -0.195645 14.0948 -0.195645 13.3137 0.585403L0.585785 13.3133ZM42 14.7275V12.7275L2 12.7275V14.7275V16.7275L42 16.7275V14.7275Z" fill="black"/>
                </svg>
                <h2 class="text-3xl">Trainer</h2>
            </a>
            <div class="flex flex-row gap-4 items-center w-1/3 justify-center">
                <svg class="h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331.03 436.55"><g id="c"><path d="M330.03,242.65c0-16.23-9.62-30.12-27.92-35.02-8.01-2.15-16.54-1.2-24.07,2.3-20.79,9.68-74.36,32.77-112.31,32.77s-89.99-22.07-111.52-31.88c-8.57-3.9-18.23-4.96-27.36-2.62-19.08,4.89-25.85,18.36-25.85,34.44v192.9l328.95-.06v-192.84" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><circle cx="165.51" cy="99.66" r="99.66"/><polygon points="186.97 358.9 186.94 399.64 140.75 399.64 140.75 358.89 140.28 358.88 100 358.89 100 312.7 140.77 312.73 140.77 312.73 140.75 271.95 186.94 271.95 186.88 312.7 186.88 312.7 227.69 312.7 227.69 358.89 187.04 358.89 186.97 358.9" fill="#fff"/></g></svg>
                <h1 class="text-5xl">Arzt</h1>
            </div>
            <a href="Behandlung" class="flex flex-row gap-4 items-center w-1/3 justify-end">
                <h2 class="text-3xl">Behandlung</h2>
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 16.7275C0.89543 16.7275 0 15.8321 0 14.7275C0 13.623 0.89543 12.7275 2 12.7275L2 14.7275L2 16.7275ZM43.4142 13.3133C44.1953 14.0944 44.1953 15.3607 43.4142 16.1418L30.6863 28.8697C29.9052 29.6507 28.6389 29.6507 27.8579 28.8697C27.0768 28.0886 27.0768 26.8223 27.8579 26.0412L39.1716 14.7275L27.8579 3.41383C27.0768 2.63278 27.0768 1.36645 27.8579 0.585403C28.6389 -0.195645 29.9052 -0.195645 30.6863 0.585403L43.4142 13.3133ZM2 14.7275L2 12.7275L42 12.7275V14.7275V16.7275L2 16.7275L2 14.7275Z" fill="black"/>
                </svg>
            </a>
        </header>
         <div class="mx-auto h-3/4">
            <div class="flex flex-row gap-32 h-full max-h-full">
                <div class="h-full">
                    <svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 664.84 963.89"><g id="c"><path d="M93.73,963.82s.72-20.86,11.55-77.06c10.83-56.2,10.32-153.42,10.32-153.42,0,0-4.54-65.22-31.87-116.26s-35.06-101.57-35.06-101.57l-5.26-188.14c28.87-140.42,145.14-233.59,288.53-233.59s253.63,93.19,287.61,226.15v196.5s-7.73,50.53-35.06,101.57c-27.33,51.04-34.83,121.71-34.83,121.71,0,0,.16,92.01,10.99,148.21,10.83,56.2,13.88,75.88,13.88,75.88h0" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="4"/><path d="M402.96,742.76c-8.9,26.07-34.42,38.09-63.5,38.09-27.43,0-50.3-14.9-60.35-38.68l-156.16-93.7c-10.48-7.04-18.83-16.81-24.16-28.26l-47.73-102.52-5.39-177.88c11.01-123.17,127.3-242.16,286.7-242.16h0c159.39,0,269.89,128.22,286.75,238.71v172.02l-58.53,120.29c-5.01,10.3-12.69,19.07-22.25,25.4l-135.38,88.69Z" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="4"/><path d="M614.99,495.99s-2.2,32.47,14.06,33.91,20.61-32.53,20.61-32.53c.9-12.29,6.68-40.28,6.68-40.28,7.86-38.48,7.32-66.11,7.32-66.11,0-53.65-17.09-69.88-27.07-69.68-9.98.2-16.08,15.07-16.08,15.07l-5.52,159.62Z" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M621.51,349.9s7.17-19.87,18.44-19.87,22.04,40.5,21.63,55.25l-1.54-2.71s-13.28-57.41-30.85-44.55c0,0-5.56,5.56-7.68,11.88Z" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M620.83,382.46s6.23-19.56,16.38-19.56c10.14,0,28.21,25.45,26.52,46.7s-9.95,28.33-17.2,36.09c0,0-4.38,6.75-7.08,13.32s-7.68,6.46-7.68,6.46c0,0-8.33,0-9.61-11.11,0,0,9.72-17.94,9.84-28.13s-3.13-17.01-7.29-26.39-3.88-17.38-3.88-17.38Z" fill="#a57859" stroke="#a57859" stroke-miterlimit="10" stroke-width="2"/><path d="M618.8,376.13s1.6,12.79,4.57,20.33c2.97,7.54,9.37,20.33,8.68,28.78-.69,8.45-4.34,18.73-10.51,29.24s-6.4,27.41-6.4,27.41" fill="#f2b07e" stroke="#846149" stroke-miterlimit="10" stroke-width="2"/><path d="M655.56,439.01s-16.66,26.39-12.55,35.78c0,0,2.46,7.98,14.19-24.05l3.22-18.64-4.86,6.91Z" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M323.51,532.15c2.15,5.26-2.82,3.6-18.91.42s-19.53-7.66-19.53-7.66c0,0,2.47-5.1,10.98-4.33l10.75,2.05s14.18,9.52,16.71,9.52" fill="#a57859" stroke="#a57859" stroke-miterlimit="10" stroke-width="2"/><path d="M389.61,523.84s-2.83,6.72-21.35,9.93c-11.84,2.05-17,3.55-16.37-1.84,0,0,11.02-5.64,15.62-10.01s22.53-1.13,22.11,1.92Z" fill="#a57859" stroke="#a57859" stroke-miterlimit="10" stroke-width="2"/><path d="M324.5,531.89s12.62,25.58,27.01-.2" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M226.07,597.15s24.89,4.79,37.4,1.95,39.96-15.47,44.71-18.96,16.9-8.8,27.51-1.4c0,0,5.17,4.05,12.57,0,0,0,16.2-8.38,29.46.28s29.45,14.84,29.45,14.84c0,0,13.95,7.61,44.84,3.28,0,0-107.84,86.53-225.94,0" fill="#ef7f7f" stroke="#bc4242" stroke-miterlimit="10" stroke-width="2"/><path d="M232.05,598.33s9.45,11.59,42.8,10.86c34.67-.76,51.3-4.39,51.3-4.39,0,0,14.83-4.49,28.98,0s72.38,8.91,90.68-6.47" fill="none" stroke="#bc4242" stroke-miterlimit="10" stroke-width="2"/><path d="M294.53,690.18s43.9-27.05,91.8,0" fill="none" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M407.72,385.59s6.07-5.15,8.84-12.7c3.64-9.88,23.34-36.18,63.98-36.18,0,0,20.87-.55,41.6,10.09s38.19,21.28,38.19,21.28c0,0-42.82,56.46-132.29,19.64,0,0-11.1-4.36-20.31-2.12" fill="#fff" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M412.53,382.98c4.38-.29,10.43,1.17,10.43,1.17,4.43-8.24-.89-10.89-3.49-12.79-1.07,1.99-1.87,3.85-3.12,5.94-1.28,2.14-2.58,4.03-3.83,5.68Z" fill="#ed9f9f" stroke="#ed9f9f" stroke-miterlimit="10" stroke-width="2"/><circle cx="482.45" cy="368.36" r="29.43" fill="#6c85ff" stroke="#6c85ff" stroke-miterlimit="10" stroke-width="2"/><circle cx="482.45" cy="368.36" r="11.39" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><ellipse cx="486.52" cy="363.19" rx="2.99" ry="3.49" transform="translate(-71.27 602.93) rotate(-60)" fill="#fff"/><path d="M269.36,385.59s-6.07-5.15-8.84-12.7c-3.64-9.88-23.34-36.18-63.98-36.18,0,0-20.87-.55-41.6,10.09-20.73,10.64-38.19,21.28-38.19,21.28,0,0,42.82,56.46,132.29,19.64,0,0,11.1-4.36,20.31-2.12" fill="#fff" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M264.55,382.98c-4.38-.29-10.43,1.17-10.43,1.17-4.43-8.24.89-10.89,3.49-12.79,1.07,1.99,1.87,3.85,3.12,5.94,1.28,2.14,2.58,4.03,3.83,5.68Z" fill="#ed9f9f" stroke="#ed9f9f" stroke-miterlimit="10" stroke-width="2"/><circle cx="194.63" cy="368.36" r="29.43" fill="#6c85ff" stroke="#6c85ff" stroke-miterlimit="10" stroke-width="2"/><circle cx="194.63" cy="368.36" r="11.39" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><ellipse cx="198.7" cy="363.19" rx="2.99" ry="3.49" transform="translate(-215.18 353.67) rotate(-60)" fill="#fff"/><path d="M250.57,306.68s-64.08-29.29-124.89,7.44" fill="none" stroke="#604236" stroke-miterlimit="10" stroke-width="10"/><path d="M421.11,306.68s64.08-29.29,124.89,7.44" fill="none" stroke="#604236" stroke-miterlimit="10" stroke-width="10"/><path d="M193.49,186.26c-53.12,18.78-89.85,47.26-110.49,65.95-2.28,4.65-6.99,50.91-7.95,56-2.72,14.47-8.32,46.06-8.04,59.95l-13.26-2.39-2.61-28.49c-3.07-5.38-7.36-9.23-7.36-9.23-4.8-4.31-9.73-6.38-12.74-7.38-1.12-20.93-2.41-69.2,8.62-105.53C74.77,99.41,195.48,5.76,329.86,4.32l.2.03c19.67,0,156.67-14.67,267.53,144.22,22.84,34.58,34.97,89.92,35.49,119.88.1,6,.19,12.09.21,18.27.04,10.44-.07,23.5-.63,33.97-3.01,1-7.94,3.07-12.74,7.38,0,0-4.29,3.86-7.36,9.23l-2.61,28.49-13.26,2.39c.28-13.89-5.31-45.47-8.04-59.95-.96-5.09-5.66-51.35-7.95-56-20.64-18.69-57.36-47.17-110.49-65.95-59.27-20.95-130.84-17.58-130.84-17.58,0,0-86.61-3.4-145.88,17.55Z" fill="#604236" stroke="#604236" stroke-miterlimit="10" stroke-width="8"/><path d="M382.81,332.97s-10.55,9.8-11.66,23.24c-1.05,12.73-7.62,85.76,33.18,119.83,4.84,4.04,8.73,9.14,10.89,15.06,3.69,10.11,5.05,24.91-11.55,35.33l1.57-.98c-9.61,6.61-14.69.23-14.69.23-2.1-9.34-23.04-3.76-23.04-3.76-30.13,26.98-60.71.7-60.71.7l-6.98-1.56c-12.03-2.2-14.75,3.84-14.75,3.84-7.47,2.29-10.15.28-10.15.28-16.6-10.42-15.25-25.22-11.55-35.33,2.16-5.92,6.05-11.02,10.89-15.06,40.79-34.07,32.38-107.1,31.32-119.83-1.11-13.44-11.66-23.24-11.66-23.24" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M49.85,498.18s2.2,32.47-14.06,33.91c-16.27,1.45-20.61-32.53-20.61-32.53-.9-12.29-6.68-40.28-6.68-40.28-7.86-38.48-7.32-66.11-7.32-66.11,0-53.65,17.09-69.88,27.07-69.68,9.98.2,16.08,15.07,16.08,15.07l5.52,159.62Z" fill="#f2b07e" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M43.32,352.09s-7.17-19.87-18.44-19.87-22.04,40.5-21.63,55.25l1.54-2.71s13.28-57.41,30.85-44.55c0,0,5.56,5.56,7.68,11.88Z" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/><path d="M44.01,384.65s-6.23-19.56-16.38-19.56c-10.14,0-28.21,25.45-26.52,46.7s9.95,28.33,17.2,36.09c0,0,4.38,6.75,7.08,13.32s7.68,6.46,7.68,6.46c0,0,8.33,0,9.61-11.11,0,0-9.72-17.94-9.84-28.13-.12-10.19,3.13-17.01,7.29-26.39,4.17-9.38,3.88-17.38,3.88-17.38Z" fill="#a57859" stroke="#a57859" stroke-miterlimit="10" stroke-width="2"/><path d="M46.04,378.32s-1.6,12.79-4.57,20.33c-2.97,7.54-9.37,20.33-8.68,28.78.69,8.45,4.34,18.73,10.51,29.24,6.17,10.51,6.4,27.41,6.4,27.41" fill="#f2b07e" stroke="#846149" stroke-miterlimit="10" stroke-width="2"/><path d="M9.28,441.19s16.66,26.39,12.55,35.78c0,0-2.46,7.98-14.19-24.05l-3.22-18.64,4.86,6.91Z" fill="#c18b67" stroke="#c18b67" stroke-miterlimit="10" stroke-width="2"/></g></svg>
                </div>
                <div class="flex flex-col gap-6 justify-center">
                    <details class="">
                        <summary class="flex flex-row items-center gap-9"> 
                            <div class="w-35 flex flex-row justify-center">
                                <svg class="w-34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.73 307.71"><g id="c"><path d="M36.99,152.49c.32,18.62-.84,41.43-5.38,66.58-6.08,33.77-16.36,61.47-25.85,82.11,16.97-10.58,44.08-24.61,79.93-31.98,44.54-9.16,81.72-3.73,102.91,1.02h0c16.43,2.84,33.72,4.38,51.48,4.38,112.75,0,204.15-60.91,204.15-136.05S352.83,2.5,240.08,2.5,35.93,63.41,35.93,138.55c0,4.71.36,9.36,1.06,13.94Z" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="5"/></g></svg>
                            </div>
                            <div class="flex flex-row gap-5 items-center">
                                <p class="font-bold text-3xl">Ansprechen</p>
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
                               Ein Arzt/eine Ärztin wird den/die Sportler:in ansprechen und auf die Verständlichkeit achten. Sie wird hierbei die Glasgow-Coma-Scale hinzuziehen, um zu schauen, wie schnell der/die Sportler:in reagiert. 
                            </p>
                        </div>
                    </details>

                    <details class="group">
                        <summary class="flex flex-row items-center gap-9">
                            <div class="w-35 flex flex-row justify-center">
                                <svg class="h-34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.12 438.93"><g id="c"><path d="M315.31,372.16C206.81,255.52.16,261.52.16,261.52c143.94-11.46,254.24-124.32,311.43-197.69,0,0,14.77,13.32,30.55,36.9,34.72,51.89,75.19,152.57-26.94,271.32" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="2"/><path d="M355.13,1s-15.29,26.6-43.54,62.83C254.4,137.2,144.1,250.06.16,261.52c0,0,278-8.37,358.34,176.61" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"/><path d="M339.86,340.83c70.18-104.7,34.64-192.78,3.12-239.89,0,0-79.18,116.21-3.12,239.89Z"/><ellipse cx="356.81" cy="168.49" rx="9.25" ry="17.28" transform="translate(-27.73 80.01) rotate(-12.32)" fill="#fff"/></g></svg>
                            </div>
                            <div class="flex flex-row gap-5 items-center"> 
                                <p class="font-bold text-3xl">Beobachten</p>
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
                           Ärzte werden die Person beobachten. Ist der/die Sportler:in ins Krankenhaus gekommen, wird sie da die Nacht über behalten, um zu schauen, wie sich die Symptome entwickeln. Verschlechtern sich die Symptome? 
                        </p>
                    </details>
        
                    <details class="group">
                        <summary class="flex flex-row items-center gap-9"> 
                            <div class="w-35 flex flex-row justify-center">
                                <svg class="h-34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331.9 439.78"><g id="c"><path d="M1.5,28.73C1.5,13.72,13.67,1.55,28.67,1.55l.85-.04h273.73c15.01-.01,27.11,12.26,27.11,27.27l-.02.96v379.37l.06,1.89c0,15.01-12.17,27.17-27.17,27.17l-1.92.12H30.47l-1.77-.04c-15.01,0-27.17-12.17-27.17-27.17l-.03-2.18V28.73Z" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><line x1="57.66" y1="112.49" x2="195.39" y2="112.49" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="5"/><line x1="57.66" y1="330.73" x2="195.39" y2="330.73" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="5"/><line x1="57.66" y1="220.75" x2="216.94" y2="220.75" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="5"/><polyline points="241.93 110.54 261.68 130.29 300.38 91.59" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><polyline points="241.93 218.73 261.68 238.48 300.38 199.78" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><line x1="241.94" y1="310.75" x2="281.79" y2="350.61" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><line x1="242.2" y1="350.61" x2="282.05" y2="310.75" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/></g></svg>
                            </div>
                            <div class="flex flex-row gap-5 items-center">
                                <p class="font-bold text-3xl">Test durchführen</p>
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
                            Ärzte werden mit den Sportler:innen kognitive Tests durchführen, um zu schauen, wie orientiert die Sportler:innen sind. Dafür eignet sich bspw. der SCAT-5. Auf Grundlage dessen können die Ärzte entscheiden, inwieweit ein mögliches Schädel-Hirn-Trauma vorliegt. Am besten eignen sich Neurologen oder Psychologen.      
                        </p>
                    </details>
                    <details class="group">
                        <summary class="flex flex-row items-center gap-9"> 
                            <div class="w-35 flex flex-row justify-center">
                               <svg class="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 437.31 330.13"><g id="c"><rect width="437.31" height="329.25" fill="#6d6d6d"/><circle cx="221.59" cy="122.31" r="95.31" fill="#fff"/><path d="M107.89,329.45c26.62-49.82,66.64-81.51,111.39-81.51s85.13,31.98,111.75,82.19" fill="#fff"/><path d="M298.5,74.36c-5.64-6.9-25.77-29.79-60.5-36.74-36.09-7.23-63.85,7.59-71.26,11.87-3,2.23-6.8,5.53-10.46,10.22-4.43,5.68-6.96,11.22-8.42,15.2-1.75,3.66-2.75,7.92-2.75,12.46,0,13.72,7.16,22.63,20.4,24.85,0,0,11.14,1.75,19.17-.43" fill="#fff" stroke="#000" stroke-miterlimit="10"/><path d="M287.7,143.16c-3.83,8.32-12,14.06-21.46,14.06-13.14,0-23.79-11.07-23.79-24.73,0-2.2.28-4.33.79-6.36" fill="#fff" stroke="#000" stroke-miterlimit="10"/><path d="M298.5,74.36c7.64,9.02,10.47,25.2,8.89,36.96-2.6,19.34-14.35,36.87-29.19,30.37,0,0-24.71-24.04-74.19-14.71-10.76,2.03-19.8-9.22-19.8-20.59s8.86-20.59,19.8-20.59c0,0,17.62,3.05,28.54-8.46" fill="#fff" stroke="#000" stroke-miterlimit="10"/><path d="M157.03,84.93s4.9,17.7,14.09,17.44" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M176.33,76.96s10.05.25,13.56,8.81" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M169.07,48.01s7.38,3.78,8.35,10.57" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M213.97,35.52s-21.87,13.66-6.86,28.86" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M221.49,63.83s1.79-2.57,1.89-5.22-1.48-5.4-8.22-5.77" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M223.38,58.6s.82-8.59,10.41-10.1" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M258.69,44.1s-12.3,6.8-4.88,18.32" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M263.23,56.32s3.21,9.22-3.88,14.06" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M196.1,113.7s-3.25-11.78,14.08-15.56c0,0,33.01.54,36.35-13.35" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M287.5,78.17s-9.71,4.75-6.85,16.63" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M258.37,81.38c10.4-.48,13.59,5.46,13.59,5.46,0,0-4.34-9.92,3.2-16.51" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M229.89,110.51s8.76-.35,12.11-3.92,5.07-6.16,13.67-4.87c0,0,3.06.2,8.12-3.78" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M289.88,99.53c.76,7.95-13.77,12.46-13.77,12.46,0,0,7.14-4.9,13.26,2.25" fill="none" stroke="#000" stroke-miterlimit="10"/><path d="M277.87,126.15s-17.03-1.02-23.47-10.21c0,0-5.78,6.02-12.99,5.22" fill="none" stroke="#000" stroke-miterlimit="10"/></g></svg>
                            </div>
                            <div class="flex flex-row gap-5 items-center">
                                <p class="font-bold text-3xl">Bildgebende Maßnahmen</p>
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
                            Ärzte werden bildgebende Maßnahmen anwenden. Dafür eignet sich eine Computertomographie. Durch diese können Ärzte mögliche Hämatome (Blutansammlungen) feststellen. Bei der Feststellung eines Hämatoms werden die Sportler:innen unter intensive Betreuung gestellt. Regelmäßige Computertomographien helfen dabei einzuschätzen, ob es kleiner wird oder mittels Operation eingegriffen werden muss. Dies ist allerdings in den meisten Fällen hauptsächlich bei schweren Schädel-Hirn-Traumata der Fall, welche weniger beim Sport auftreten.  
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