import { IoSearch } from "react-icons/io5";
import { PiSliders } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";


import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"
export function Navbar() {
    const local = useLocation()
    const navigate = useNavigate()
    return(
        <div className='flex items-center px-20 flex-initial h-24'>
            <div className="flex-innit flex w-full md:w-auto justify-center md:justify-normal" >
                <h1 className='text-contrastWhite font-inter text-3xl hover:brightness-75 cursor-pointer transition-all duration-200' onClick={()=>navigate("/Home")}>SEMAISMENOS</h1>
            </div>
            <div className='md:flex hidden flex-1 justify-center items-center gap-7'>
                <p className='relative left-17 text-bgBlack text-3xl'><IoSearch/></p>
                <input type="text" className='bg-distaqueBlack rounded-sm h-12 w-[550px] pl-14 pr-5 placeholder:text-bgBlack placeholder:text-xl focus:outline outline-contrastWhite ' placeholder='Pesquisar imóvel'/>
                {local.pathname=="/ListProperties"? 
                
                    <Dialog>
                        <DialogTrigger className='h-12 w-12 rounded-full bg-distaqueBlack text-bgBlack text-3xl flex justify-center items-center cursor-pointer hover:brightness-90 transition-all duration-200 hover:border border-contrastWhite'>
                            <PiSliders/>
                        </DialogTrigger>
                        <DialogContent className="bg-bgAlmostBlack text-contrastWhite min-h-40 flex flex-col justify-between">
                            <DialogHeader>
                                <DialogTitle>Tem certeza que deseja sair?</DialogTitle>  
                            </DialogHeader>
                            <div>
                                <button className="text-bgBlack bg-contrastWhite w-full h-10 rounded-sm hover:brightness-75 transition-all duration-200 cursor-pointer">Sair</button>
                            </div>
                        </DialogContent>
                    </Dialog>
                :
                    null
                }
            </div>
        </div>
    )
}