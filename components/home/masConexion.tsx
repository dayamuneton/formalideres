import React from "react";

function MasConexion() {
   return (
      <div className="flex flex-col items-center bg-cyan-100/40 w-full py-8 px-4">
         <h2 className="text-blue-600 font-bold text-2xl">
            Logra más conexión con tu equipo de trabajo
         </h2>
         <span>
            <p className="font-haviland text-5xl">Ayudalos a sentirse bien </p>
            <p className="text-3xl font-bold text-yellow text-shadow ml-20">
               En Aspectos personales
            </p>
         </span>
         <p className="max-w-lg font-thin mx-auto w-fit text-center">
            Cuando les demuestras cuanto te importan creas más <b>conexión, </b>
            alimentando el sentido de pertenencia y
            <b> crecerás junto a ellos.</b>
         </p>
      </div>
   );
}

export default MasConexion;
