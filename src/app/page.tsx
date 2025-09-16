"use client"

import { CustomModal } from "@/components/customModal";

const Main = () => {

  return (
    <div className={`container ${CustomModal}`}><div className="row">
      <CustomModal msg="Desactiva el giro automático de tu dispositivo para mayor comodidad."/>

    </div></div>
  )

};

export default Main