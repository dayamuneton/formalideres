import React from "react";
import SouthIcon from "@mui/icons-material/South";

function Workshop() {
   return (
      <div className="relative w-full pt-4 flex flex-col items-center">
         <span className="bg-black text-white text-xl absolute left-4">
            Arte, ciencia y Tecnología
         </span>
         <SouthIcon className="text-blue-800" sx={{ fontSize: "4rem" }} />
         <div className="bg-red-500 h-2 w-[90vw] my-8"></div>
         <div className="flex flex-col relative items-center">
            <p className="text-blue-600 rotate-[-5deg] text-5xl left-[-4rem] absolute">
               Workshop
            </p>
            <h2 className="text-gray-600 text-5xl font-bold mt-12">
               Forma líderes
            </h2>
            <p className="flex bg-yellow w-fit text-blue-600 text-xl">
               Que te lleven a la cima
            </p>
         </div>
         <div className="w-[90vw] max-w-xl font-thin text-sm flex flex-col  gap-3 mt-4">
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
            <p className="bg-yellow text-blue-600 font-medium px-1">
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
