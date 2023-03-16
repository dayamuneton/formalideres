import React from "react";
import SouthIcon from "@mui/icons-material/South";

function Workshop() {
   return (
      <div className="relative flex flex-col items-center w-full pt-4">
         <span className="absolute text-xl text-white bg-black left-4">
            Arte, ciencia y Tecnología
         </span>
         <div className="relative flex flex-col items-center">
            <p className="text-blue-600 rotate-[-5deg] text-5xl left-[-7rem] absolute font-cutive">
               Workshop
            </p>
            <h2 className="mt-12 text-5xl font-bold text-gray-600">
               Forma líderes
            </h2>
            <p className="flex text-xl text-blue-600 bg-yellow w-fit">
               Que te lleven a la cima
            </p>
         </div>
         <div className="w-[90vw] max-w-md font-thin text-sm flex flex-col  gap-3 mt-4">
            <p>
               Cuando piensas en crecimiento del negocio muchas veces te enfocas
               en las barreras de procesos, económicas, infraestructura o
               estrategias, olvidando cultivar la capacidad de tu equipo para
               ser cada vez más empáticos.
            </p>
            <p>
               Olvidas que antes que un producto o servicio tienes una
               incubadora de valores, actitudes y mentalidad bajo tu
               responsabilidad, tal vez es porque no te consideras como una
               escuela o un referente para ellos que puede ayudarlos a crecer
               como personas.
            </p>
            <p>
               Cuando no tienes claro tus estructuras mentales para gestionar
               emociones es más difícil transmitir lo que sabes y replicar tu
               modelo de éxito a tu equipo de trabajo.
            </p>
            <p>
               La forma más fácil de ser un equipo altamente pro-activo y
               eficiente es logrando tener coherencia emocionalmente.
            </p>
            <p className="px-1 font-medium text-blue-600 bg-yellow">
               YEP! Lo leíste correctamente!! Los beneficios de conocer tus
               emociones, tiene que ver con tener resultados, mejorar tu
               servicio o tu productividad, mejorar la comunicación y aumentar
               tus ganancias!
            </p>
            <p>
               Para llevar a otros niveles tu empresa necesitas formar líderes
               iguales o mejores que tú, en tu equipo de trabajo.
            </p>
         </div>
      </div>
   );
}

export default Workshop;
