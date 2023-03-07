import Image from "next/image";
import React from "react";

function Somos() {
   return (
      <div>
         <span>
            <p className="text-gray-600 text-2xl font-bold mt-8">
               Hola ! Somos
            </p>
            <p className="font-haviland text-4xl text-blue-600 ml-10">
               Andrea Virdo y Daya Muneton
            </p>
         </span>
         <div className="w-full max-w-4xl flex items-center flex-col md:flex-row">
            <Image
               src="/TempDaya.webp"
               alt=""
               fill
               className="!relative w-full"
            />
            <div className="text-sm md:my-auto pl-2 max-w-[33ch] w-[70%] leading-4 mt-6">
               <p>
                  Andrea psicóloga, con una maestría en Salud mental (Nova
                  Southeastern University) y Daya artista durante siete años
                  hice una investigación del arte como una metodología para
                  entender mejor las emociones.
               </p>
               <p className="font-bold">
                  Unimos nuestros conocimientos, técnicas y habilidades para
                  crear este WORKSHOP.
               </p>
            </div>
         </div>
      </div>
   );
}

export default Somos;
