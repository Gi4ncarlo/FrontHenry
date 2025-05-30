"use client"
import { Image } from "@heroui/react";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Image src={"https://thumbs.dreamstime.com/b/letras-del-texto-error-con-ruido-en-el-negro-fondo-de-la-representaci%C3%B3n-d-ordenador-que-genera-para-juego-121154109.jpg"} alt="404" width={500} height={500}></Image>
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-lg text-gray-600">Lo sentimos, esta página no existe.</p>
    </div>
  );
}
