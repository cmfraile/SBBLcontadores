'use client'

import { useEffect, useState } from "react";

type display = {b:number,x:number};
export const basicPointsHook = () => {

    const initialState:display = {b:0,x:0};
    const [resetCondition,setResetCondition] = useState(false);

    const [bx,setbx] = useState<display>(initialState);
    const crud = {
        plusb:() => setbx({b:bx.b+1,x:bx.x}),
        plusx:() => setbx({b:bx.b,x:bx.x+1}),
        reset:() => setbx(initialState)
    };

    useEffect(() => {
        if(bx.b >= 4 || bx.x >= 4){setResetCondition(true)}else{setResetCondition(false)}
    },[bx]);

    return {bx,resetCondition,...crud}

};

