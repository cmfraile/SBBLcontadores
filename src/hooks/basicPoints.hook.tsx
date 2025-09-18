'use client'

import { useEffect, useState } from "react";

type display = {b:number,x:number};
export const basicPointsHook = () => {

    const initialState:display = {b:0,x:0};
    const [modal,setModal] = useState(true);
    const [resetCondition,setResetCondition] = useState(false);

    const [bx,setbx] = useState<display>(initialState);
    const crud = {
        plusb:() => {if(!modal){setbx({b:bx.b+1,x:bx.x})}},
        plusx:() => {if(!modal){setbx({b:bx.b,x:bx.x+1})}},
        reset:() => setbx(initialState)
    };

    useEffect(() => {
        if(bx.b >= 4 || bx.x >= 4){setResetCondition(true)}else{setResetCondition(false)}
        if(bx.b == 10){ setbx({...bx,b:0}) };
        if(bx.x == 10){ setbx({...bx,x:0}) };
    },[bx]);

    return {bx,modal,setModal,resetCondition,...crud}

};

