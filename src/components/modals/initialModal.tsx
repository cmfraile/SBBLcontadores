'use client'

import { useState } from "react";
import style from "@/styles/customModal.module.css"

export const InitialModal = ({msg}:{msg:string}) => {

    const [appear,setAppear] = useState(true);

    return(
        (appear) && 
        <div className={style.customModal}>
            <p>{msg}</p>
            <button type="button" 
                    className="btn btn-primary p-3"
                    onClick={() => setAppear(false)}
                    >De acuerdo</button>
        </div>
    )

};