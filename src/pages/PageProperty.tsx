import { Navbar } from "@/Components/Navbar";
import itau from '../assets/Section-4_Image-with-text.avif'
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { useDataProperty } from '@/hooks/useDatas';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface PropertyProps {
    id: string,
    name: string,
    description: string,
    value: string,
    urlImg: string,
    location: string,
    area: string
}
export function PageProperty(){
    const {id} = useParams()
    const [property, setProperty] = useState<PropertyProps>()

    useEffect(()=>{
        setProperty(useDataProperty.filter((proper) => proper.id == id)[0])
    }, [])
    
    return(
        <div className="flex flex-col w-full pb-24 md:pb-0">
            <Navbar/>
            <div className='flex-1 border flex flex-col border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl md:p-12 p-3 '>
                <div className="flex flex-wrap">

                    <div className="md:flex-1 ">
                        {property?
                            <img src={property.urlImg} className="rounded-sm" alt={property.name} />

                        : null}
                    </div>
                    <div className="flex-1 text-contrastWhite flex justify-center">
                        <div className="max-w-80">
                            <h2 className="font-semibold text-3xl">{property?.name}</h2>
                            <div className="flex justify-between  my-6">
                                <p className="flex items-center gap-2"><MdOutlineLocationOn/>{property?.location}</p>
                                <p className="flex items-center gap-2">Área total: {property?.area} <LiaRulerCombinedSolid/></p>
                            </div>
                            <div>
                                <div className="flex items-center justify-between  my-6">
                                    <p>Imóvel disponivel em:</p> 
                                    <img className="h-10" src={itau} alt="Banco" />
                                </div>
                                <hr />
                                <div className="flex items-center justify-between my-6">
                                    <p>Imóvel avaliado em:</p>
                                    <p>R$ {property?.value}</p>
                                </div>
                                <hr />
                                <div className="flex items-center justify-between  my-6">
                                    <p>Valor inicial:</p>
                                    <p>R$ {property?.value}</p>
                                </div>

                                <button className="bg-contrastWhite text-bgBlack font-semibold w-full h-14 rounded-sm text-2xl hover:brightness-50 transition-all duration-200 cursor-pointer flex justify-center items-center px-3"><p className="flex-1">Ir para o leilão</p> <FaArrowRight/></button>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="text-contrastWhite mt-5">
                    <p className="font-semibold">Descrição:</p>
                    <p>{property?.description}</p>
                    
                </div>
            </div>
        </div>
    )
}
