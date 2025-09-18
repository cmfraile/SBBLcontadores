'use client'

import style from "@/styles/customModal.module.css"

export const InitialModal = ({modal,disableModal}:{modal:boolean,disableModal:() => void}) => {

    const msg = `Desactiva el giro automático para mayor comodidad. Pulse sobre los números para sumarles 1. Puedes reiniciar el contador a partir de que alguien logre los 4 puntos.`

    return(
        (modal) && 
        <div className={style.customModal}>
            <p>{msg}</p>
            <button type="button" 
                    className="btn btn-primary p-3 my-3"
                    onClick={disableModal}
                    >De acuerdo</button>
        </div>
    )

};