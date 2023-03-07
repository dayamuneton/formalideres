import React from "react";

function Beneficios() {
   return (
      <div className="flex flex-col w-full items-center my-8 px-4">
         <h2 className="text-2xl font-bold w-full max-w-xl mb-8">
            Beneficios del WorkShop
         </h2>
         <div className="flex flex-col gap-3 text-sm max-w-md leading-4">
            <p>
               Tu equipo pondrá en práctica nuevas habilidades para servir mejor
               a sus clientes y a la empresa.
            </p>
            <p>
               Tu equipo mejorará la gestión de emociones y por consiguiente
               mejorar la comunicación tanto entre las personas de tu equipo
               como la comunicación con los clientes.
            </p>
            <p>
               Experimentarás un ambiente agradable, en donde todos quieren
               cooperar, ayudar y servir.
            </p>
            <p>
               Tendrás un equipo con una cultura de pertenencia, impulsando tu
               negocio al crecimiento.
            </p>
         </div>
      </div>
   );
}

export default Beneficios;
