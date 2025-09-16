'use client'

import { useState } from "react";
import cmstyle from "../styles/customModal.module.css"

export const CustomModal = ({msg}:{msg:string}) => {

    const [appear,setAppear] = useState(true);


    return(
        (appear) && 
        <div className={cmstyle.customModal}>
            <p>{msg}</p>
            <button type="button" 
                    className="btn btn-primary p-3"
                    onClick={() => setAppear(false)}
                    >De acuerdo</button>
        </div>
    )

};