//aqui imprtamos React y useState
import React, { useState } from "react";

// componente inicial del semaforo
const TrafficLight = () => {
    const [color, setColor] = useState("red"); //color actual del semaforo

    return (
        <div className="text-center d-flex justify-content-center">

             {/* Caja negra del semáforo */}
             <div className="traffic-light">
                {/* Luz roja */}
                <div
                    className={"light red" + (color === "red" ? " brillo" : "")} //equi me indica si el colo es rojo se pondra la clase brillante
                    onClick={() => setColor("red")} //esto es para darle click y que cambie de color
                ></div>

                {/* Luz amarilla */}
                <div
                    className={"light yellow" + (color === "yellow" ? " brillo" : "")}
                    onClick={() => setColor("yellow")}
                ></div>

                {/* Luz verde */}
                <div
                    className={"light green" + (color === "green" ? " brillo" : "")}
                    onClick={() => setColor("green")}
                ></div>
            </div>
        </div>
    );
};

export default TrafficLight; //aqui siempre al fina para exportar 
