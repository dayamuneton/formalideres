import Image from "next/image";
import React from "react";

function Ventajas() {
   return (
      <div className="flex flex-col items-center bg-[#fafafa] w-full pb-8">
         <h2 className="text-gray-600 text-2xl font-bold mt-6 px-4">
            Toma ventajas de los descuentos grupales
         </h2>
         <span className="font-thin text-blue-600 flex mb-6">
            Precio Regular por persona
            <p className="flex line-through decoration-red-500 ml-1">$350.00</p>
         </span>
         <div className="flex gap-4 flex-col md:flex-row w-[40rem] max-w-[95vw]">
            <div className="border-2 border-yellow rounded-2xl flex flex-col items-center bg-white px-4 py-8 gap-3 w-full">
               <h2 className="text-blue-600 font-bold text-2xl">
                  <p>Entrenamiento</p>
                  <p>1-10 personas</p>
               </h2>
               <p className="text-gray-600 font-bold text-2xl">$1,500</p>
               <p className="font-thin text-blue-600">Duración dos horas</p>
               <p className="text-sm">
                  (Precios negociables según la asistencia)
               </p>
               <button className="px-6 py-2 bg-red-500 font-medium border-2 border-black">
                  Inscribirme Ahora
               </button>
            </div>
            <div className="border-2 border-yellow rounded-2xl flex flex-col items-center bg-white px-4 py-8 gap-4 w-full">
               <h2 className="text-blue-600 font-bold text-2xl">
                  <p>Entrenamiento</p>
                  <p>20 personas</p>
               </h2>
               <p className="text-gray-600 font-bold text-2xl">$2,500</p>
               <p className="font-thin text-blue-600">Duración dos horas</p>
               <p className="text-sm">
                  (Precios negociables según la asistencia)
               </p>
               <button className="px-6 py-2 bg-red-500 font-medium border-2 border-black">
                  Inscribirme Ahora
               </button>
            </div>
         </div>
         <div className="border-2 border-yellow rounded-2xl flex items-center bg-white px-4 py-8 relative mt-20 flex-col md:flex-row w-[40rem] max-w-[95vw]">
            <p className="text-blue-600 font-bold text-4xl left-4 absolute -top-10 -rotate-6">
               + BONO
            </p>
            <Image
               src="/LogoAgeOfEmotions.png"
               alt=""
               fill
               className="!relative !w-[7rem] !h-[7rem] rounded-full  mx-4"
            />
            <div className="flex flex-col items-center text-left max-w-sm">
               <p className="font-bold text-2xl text-center">
                  PRIMERO TE LIDERAS Y LUEGO LIDERAS
               </p>
               <p className="text-2xl font-bold text-gray-600">
                  WorkShop solo para directivas
               </p>
               <p className="text-2xl font-bold line-through decoration-red-500">
                  $450.00
               </p>
               <p className="text-blue-600 font-thin">
                  Recibe este entrenamiento Gratuito
               </p>
               <span className="text-sm font-medium">
                  <p>
                     Aprende 5 técnicas de los lideres para gestionar emociones
                     que tal vez no conocías.
                  </p>
                  <p>
                     Adquiere e implementa técnicas para mejorar la comunicación
                     con tu equipo.
                  </p>
                  <p>
                     Manejo de conflictos internos entre personas del equipo.
                  </p>
               </span>
            </div>
         </div>
      </div>
   );
}

export default Ventajas;
