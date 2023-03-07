import Image from "next/image";
import React from "react";

function Somos() {
   return (
      <div className="flex flex-col items-center max-w-4xl overflow-hidden">
         <span>
            <p className="mt-8 text-2xl font-bold text-gray-600">
               Hola ! Somos
            </p>
            <p className="ml-10 text-4xl text-blue-600 font-haviland">
               Andrea Virdo y Daya Muneton
            </p>
         </span>
         <div className="flex flex-col items-center justify-center w-full md:flex-row">
            <Image
               src="/AndreaYDaya.png"
               alt=""
               fill
               className="!relative flex !max-w-[50%]"
            />
            <div className="flex flex-col items-center text-sm md:my-auto pl-2 max-w-[33ch] w-full leading-4 mt-6 ">
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
