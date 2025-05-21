import { Navbar } from "@/Components/Navbar";
import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/Components/ui/dialog"

  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/Components/ui/accordion"
export function PageSettings() {
    const [edit, setEdit] = useState(false)

    return(
        <div className="flex flex-col w-full pb-24 md:pb-0">
            <Navbar/>
        
            <div className='flex-1 border flex flex-col gap-5 border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl md:p-12 p-3'>
                <h1 className="font-semibold text-4xl text-contrastWhite">Configurações</h1>
                <div className="text-contrastWhite bg-bgAlmostBlack p-5 flex flex-col gap-10 text-xl rounded-2xl">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-2xl text-contrastWhite">Perfil</h3>
                        {edit?
                            <Dialog>
                                <DialogTrigger className="text-bgBlack bg-contrastWhite rounded-sm p-2 hover:brightness-75 transition-all duration-200 cursor-pointer">
                                    Salvar
                                </DialogTrigger>
                                <DialogContent className="bg-bgAlmostBlack text-contrastWhite min-h-40 flex flex-col justify-between">
                                    <DialogHeader>
                                        <DialogTitle>Deseja salvar alterações?</DialogTitle>  
                                    </DialogHeader>
                                    <div>
                                        <button className="text-bgBlack bg-contrastWhite w-full h-10 rounded-sm hover:brightness-75 transition-all duration-200 cursor-pointer" onClick={()=>setEdit(false)}>Salvar alterações</button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        : 
                            <button className="text-bgBlack bg-contrastWhite rounded-sm p-2 hover:brightness-75 transition-all duration-200 cursor-pointer" onClick={()=>setEdit(true)}>Editar</button>
                        }

                    </div>
                
                    <div>
                        <p className="text-contrastWhite font-semibold">Nome:</p>
                        <input type="text" className={edit? 'border px-2 rounded-sm h-10 bg-bgBlack': 'px-2 rounded-sm h-10'} defaultValue={"Kauan Santos"} disabled={edit? false : true}/>
                    </div>
                    <div>
                        <p className="text-contrastWhite font-semibold">Email:</p>
                        <input type="text" className={edit? 'border px-2 rounded-sm h-10 bg-bgBlack': 'px-2 rounded-sm h-10'} defaultValue={"KauanSantos@gmail.com"} disabled={edit? false : true}/>
                    </div>
                    <div>
                        <p className="text-contrastWhite font-semibold">Telefone:</p>
                        <input type="text" className={edit? 'border px-2 rounded-sm h-10 bg-bgBlack': 'px-2 rounded-sm h-10'} defaultValue={"(11) 96218-0950"} disabled={edit? false : true}/>
                    </div>
                </div>

                <div className="text-contrastWhite bg-bgAlmostBlack p-5 flex flex-col gap-10 text-xl rounded-2xl">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-2xl text-contrastWhite">FAQ</h3>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}