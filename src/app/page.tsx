'use client'
import '../styles/global.css'
import { InitialModal } from "@/components/modals/initialModal";
import { ResetButton } from '@/components/ResetButton';
import { basicPointsHook } from "@/hooks/basicPoints.hook";
import { Logo } from '@/components/Logo';

const Main = () => {

  const { bx , plusb , plusx , resetCondition , reset ,
          modal , setModal } = basicPointsHook();

  return (
    <div className='maincontain'>
      <InitialModal modal={modal} disableModal={() => setModal(false)}/>
      <div className="led bled">
      { (!modal) && <p onClick={plusb}>{bx.b}</p> }
      </div>
      <ResetButton reset={reset} resetCondition={resetCondition}/>
      <div className="led xled">
      { (!modal) && <p onClick={plusx}>{bx.x}</p> }
      </div>
      <Logo imgsrc={"sbbl.webp"} />
    </div>
  )

};

export default Main