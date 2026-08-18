import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { P5Canvas } from "@p5-wrapper/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}



// Hiermit kann ich jeder einzelnen Seite einen neuen p5 Sketch ausführen
function sketch(p5) {
  p5.setup = () => p5.createCanvas(p5.displayWidth, p5.displayHeight, p5.WEBGL);

  p5.draw = () => {
    p5.background(250);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(400);
    p5.pop();
  };
}


export default function Test() {
  return <P5Canvas sketch={sketch}  />;
}
