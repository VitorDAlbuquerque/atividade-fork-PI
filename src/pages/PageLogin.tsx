import { useState } from 'react';
import houseImg from '../assets/ChatGPT Image 10 de abr. de 2025, 17_45_50.png'
import { Link } from 'react-router-dom';

export function PageLogin(){
    const [page, setPage] = useState(0)
    return(
        <main className="h-screen w-screen bg-bgBlack flex">
            <div className="h-full hidden md:block">
                <img src={houseImg} className='h-full' alt="Imagem prédio login" />
            </div>
            <div className=" h-full flex flex-col justify-between items-center flex-1">
                
                {page==0?
                <h1 className='w-full flex justify-end text-contrastWhite font-semibold text-2xl p-5'>
                    SEMAISMENOS
                </h1>
                : null
}
            </div>
            
        </main>
    )
}