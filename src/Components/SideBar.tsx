import { HiOutlineBars3BottomLeft, HiMiniSquaresPlus } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { TbLayoutList } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import { MdExitToApp } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import {  useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"

export function SideBar(){
    const local = useLocation()

    const [sideBarSize, setSizeBarSize] = useState("w-36")

    const navigate = useNavigate()
    
    return(
        <div>
            {local.pathname=="/"?
                null
            :
            
            <div className={`md:h-screen md:bg-transparent bg-bgAlmostBlack z-50 h-20 bottom-0 md:sticky fixed md:top-0 md:${sideBarSize} w-full flex justify-center transition-all duration-200 items-center p-7`}>
                <div className='md:h-full h-20 flex md:justify-between md:flex-col justify-center text-contrastWhite w-full gap-6 md:gap-0'>
                    <div className={sideBarSize=="w-60"? 'flex md:flex-col gap-10' :' md:flex-col items-center gap-10  md:flex hidden'}>
                        <p onClick={()=>{sideBarSize=="w-36"? setSizeBarSize("w-60"): setSizeBarSize("w-36")}} className='text-3xl px-3 cursor-pointer hover:brightness-50 transition-all duration-150'><HiOutlineBars3BottomLeft/> </p>
                        <p className='text-5xl flex items-center px-3 gap-3'><FaUserCircle/> {sideBarSize=="w-60"? <p className="text-xl">Kauan</p> :null}</p>
                    </div>
                    <div className={sideBarSize=="w-60"?`flex md:flex-col gap-6` :`flex md:flex-col items-center gap-6`}>
                        <div className={local.pathname=="/Home"?'text-3xl p-3 rounded-md bg-distaqueBlack flex items-center gap-3':'flex items-center gap-3 text-3xl p-3 rounded-md cursor-pointer hover:brightness-50 transition-all duration-150'} onClick={()=>navigate("/Home")}><AiFillHome/>{sideBarSize=="w-60"? <p className="text-xl">Inicio</p> :null}</div>
                        <div className={local.pathname=="/ListProperties"?'text-3xl p-3 rounded-md bg-distaqueBlack flex items-center gap-3':'flex items-center gap-3 text-3xl p-3 rounded-md cursor-pointer hover:brightness-50 transition-all duration-150'} onClick={()=>navigate("/ListProperties")}><TbLayoutList/>{sideBarSize=="w-60"? <p className="text-xl">Imóveis</p> :null}</div>
                        <div className={local.pathname=="/ListGroup"?'text-3xl p-3 rounded-md bg-distaqueBlack flex items-center gap-3':'flex items-center gap-3 text-3xl p-3 cursor-pointer hover:brightness-50 transition-all duration-150 rounded-md'} onClick={()=>navigate("/ListGroup")}><HiMiniSquaresPlus/>{sideBarSize=="w-60"? <p className="text-xl">Grupos</p> :null}</div>
                        <div className={local.pathname=="/PageSettings"?'text-3xl p-3 rounded-md bg-distaqueBlack flex items-center gap-3':'flex items-center gap-3 text-3xl p-3 cursor-pointer hover:brightness-50 transition-all duration-150 rounded-md'} onClick={()=>navigate("/PageSettings")}><FaGear/>{sideBarSize=="w-60"? <p className="text-xl">Configurações</p> :null}</div>
                    </div>
                    <div className={sideBarSize=="w-60"? 'flex md:flex-col' :'flex md:flex-col items-center'}>
                        <Dialog>
                            <DialogTrigger>
                                <div className='text-3xl px-3 flex items-center gap-3 cursor-pointer hover:brightness-50 transition-all duration-150' ><MdExitToApp/>{sideBarSize=="w-60"? <p className="text-xl">Sair</p> :null}</div>
                            </DialogTrigger>
                            <DialogContent className="bg-bgAlmostBlack text-contrastWhite min-h-40 flex flex-col justify-between">
                                <DialogHeader>
                                    <DialogTitle>Tem certeza que deseja sair?</DialogTitle>  
                                </DialogHeader>
                                <div>
                                    <button className="text-bgBlack bg-contrastWhite w-full h-10 rounded-sm hover:brightness-75 transition-all duration-200 cursor-pointer" onClick={()=>navigate("/")}>Sair</button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
            }
            
        </div>

    )
}