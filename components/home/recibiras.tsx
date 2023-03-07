import React from "react";

function Recibiras() {
   return (
      <div className="w-[90vw] max-w-xl  flex flex-col ">
         <p className="my-8 text-3xl font-bold text-gray-500">
            Lo que recibirás...
         </p>
         <div className="flex flex-col w-[90%] mx-auto max-w-md">
            <p className="text-sm font-bold">Un entrenamiento GRATUITO</p>
            <p className="text-lg font-bold border-b-[3px] border-yellow py-4">
               Evalúa si las prácticas de gestión de emociones en tu equipo son
               efectivas. ( Sesión de 30 min)
            </p>
            <p className="border-b-[3px] border-yellow py-4">
               Una entrevista para personalizar el entrenamiento de acuerdo a
               las necesidades de tu empresa.
            </p>
            <span className="border-b-[3px] border-yellow py-4 flex flex-col">
               <p>El Workshop</p>
               <p className="text-xl font-bold">
                  FORMA LÍDERES QUE TE LLEVEN A LA CIMA.
               </p>
            </span>
            <p className="border-b-[3px] border-yellow py-4">
               Un diploma de finalización del taller a cada uno de los
               participantes, ejecutivos, gerentes y empleados.
            </p>
            <span className="border-b-[3px] border-yellow py-4">
               Una membresía de
               <p className="inline mx-1 font-bold bg-yellow">
                  Age of emotions club
               </p>
               por un año (Acceso a todo el contenido solo a 3.00 USD para
               entender mejor tus emociones, sorpresas, concursos etc.. )
            </span>
            <p className="border-b-[3px] border-yellow py-4">
               Sorteo de sesiones gratuitas de coaching y asesoramiento.
            </p>
            <p className="border-b-[3px] border-yellow py-4">
               Una sesión online o presencial de seguimiento aproximadamente un
               mes después del entrenamiento para evaluar y abordar cambios.
            </p>
            <p className="border-b-[3px] border-yellow py-4">
               Proporcionamos copias impresas y carpetas, bolígrafos o
               lapiceros, presentación, enlaces virtuales, material de apoyo al
               taller
            </p>
            <span className="border-b-[3px] border-yellow flex">
               <span className="relative mx-auto mt-12 mb-4 font-bold text-gray-400 w-fit">
                  <p className="absolute text-3xl font-bold text-blue-600 -rotate-12 -top-8 ">
                     + BONO
                  </p>
                  <p className="ml-8 text-2xl">WorkShop Solo para directivas</p>
               </span>
            </span>
         </div>
      </div>
   );
}

export default Recibiras;
