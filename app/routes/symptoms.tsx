import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
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
  <div class="container">
    <header class="header flex flex-row justify-between h-31 items-center">
            <a href="Ablauf" class="flex flex-row gap-4 items-center">
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42 16.7275C43.1046 16.7275 44 15.8321 44 14.7275C44 13.623 43.1046 12.7275 42 12.7275V14.7275V16.7275ZM0.585785 13.3133C-0.195263 14.0944 -0.195263 15.3607 0.585785 16.1418L13.3137 28.8697C14.0948 29.6507 15.3611 29.6507 16.1421 28.8697C16.9232 28.0886 16.9232 26.8223 16.1421 26.0412L4.82843 14.7275L16.1421 3.41383C16.9232 2.63278 16.9232 1.36645 16.1421 0.585403C15.3611 -0.195645 14.0948 -0.195645 13.3137 0.585403L0.585785 13.3133ZM42 14.7275V12.7275L2 12.7275V14.7275V16.7275L42 16.7275V14.7275Z" fill="black"/>
                </svg>
                <h2 class="text-3xl">Ablauf</h2>
            </a>
            <div class="flex flex-row gap-4 items-center">
                <svg class="h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433.66 368.47"><g id="c"><path d="M199.45,9.22L3.46,336.33c-.29.42-6.6,10.15-1.44,20.56,3.4,6.86,10.44,11.33,18.25,11.57h393.18c8.41-.42,15.78-5.48,18.8-12.91,3.95-9.72-1.62-18.38-2.14-19.17L234.2,9.42c-.61-.91-5.94-8.66-15.94-9.37-11.69-.83-18.54,8.77-18.82,9.17Z"/><path d="M86.35,327.99h260.6c9.21-.66,17.04-6.32,19.84-14.3,3.22-9.15-1.67-17.13-2.38-18.24L235.15,81.59c-.58-.87-6.38-9.3-17.23-9.84-7.82-.39-15.32,3.48-19.61,10.06l-128.98,213.39c-4.47,6.8-4.74,15.42-.69,22.28,5.71,9.65,16.85,10.46,17.7,10.51Z" fill="#fff"/><circle cx="216.83" cy="272.52" r="19.17"/><ellipse cx="216.83" cy="185.24" rx="21.93" ry="52.56"/></g></svg>
                <h1 class="text-5xl">Symptome</h1>
            </div>
            <a href="Trainer" class="flex flex-row gap-4 items-center">
                <h2 class="text-3xl">Trainer</h2>
                <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 16.7275C0.89543 16.7275 0 15.8321 0 14.7275C0 13.623 0.89543 12.7275 2 12.7275L2 14.7275L2 16.7275ZM43.4142 13.3133C44.1953 14.0944 44.1953 15.3607 43.4142 16.1418L30.6863 28.8697C29.9052 29.6507 28.6389 29.6507 27.8579 28.8697C27.0768 28.0886 27.0768 26.8223 27.8579 26.0412L39.1716 14.7275L27.8579 3.41383C27.0768 2.63278 27.0768 1.36645 27.8579 0.585403C28.6389 -0.195645 29.9052 -0.195645 30.6863 0.585403L43.4142 13.3133ZM2 14.7275L2 12.7275L42 12.7275V14.7275V16.7275L2 16.7275L2 14.7275Z" fill="black"/>
                </svg>
            </a>
        </header>
  </div>
)
}