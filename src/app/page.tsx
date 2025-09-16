'use client'
import '../styles/global.css'
import { InitialModal } from "@/components/modals/initialModal";
import { ResetButton } from '@/components/ResetButton';
import { basicPointsHook } from "@/hooks/basicPoints.hook";

const Main = () => {

  const { bx , plusb , plusx , resetCondition , reset } = basicPointsHook();

  return (
    <div className='maincontain'>
      <InitialModal msg="Desactiva el giro automático de tu dispositivo para mayor comodidad."/>
      <div className="led bled"><p onClick={plusb}>{bx.b}</p></div>
      <ResetButton reset={reset} resetCondition={resetCondition}/>
      <div className="led xled"><p onClick={plusx}>{bx.x}</p></div>
    </div>
  )

};

export default Main