import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { P5Canvas } from "@p5-wrapper/react";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}




export default function Disclaimer() {
/*   return <P5Canvas sketch={sketch}  />; */
return (
  <div  class="w-screen h-screen flex flex-col justify-center">
    <div class="grid grid-cols-12 mx-20 gap-5">
        <div class="col-start-1 col-span-6 flex flex-col gap-16">
            <h2 class="font-sans font-bold text-h2">Haftungsausschluss</h2>
            <div class="text-text">
                <p class="">Die nachfolgenden Informationen ersetzen <span class="font-bold">keinen Arztbesuch. Sie gibt nicht die Möglichkeit der Selbstdiagnose. </span>
                 Sie informiert lediglich über das Schädel-Hirn-Trauma. </p>
                <p class="">Am Ende findest Du die Quellenangaben. Die fachliche Korrektheit wurde nicht überprüft. Daher zählt, informiere Dich und suche Dir Anlaufstellen zum Schädel-Hirn-Trauma. Bei Fragen wende Dich an einen Arzt. </p>
                <p class="">Die folgende interaktive Informationsgrafik wurde im Rahmen einer Bachelorthesis an der Hochschule Bremen erstellt und gilt als Prototyp.</p>
            </div>
            <div class="flex flex-row gap-8 justify-center items-center">
                <input class="bg-gray-400 w-16 h-16 rounded-4xl" type="checkbox"></input> 
                <p class="h-fit">Ich habe verstanden, dass der Prototyp nur zur Aufklärung über das Schädel-Hirn-Trauma und <span class="font-bold">nicht der Selbstdiagnose </span> dient.</p>
            </div>
            <a class="text-black bg-gray-400 w-fit h-fit px-8 py-4 rounded-4xl" href="Schaedel-Hirn-Trauma" >Weiter</a>
        </div>
        
    </div>
  </div>
)
}