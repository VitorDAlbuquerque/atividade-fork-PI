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
                <div className='flex flex-col justify-center items-center flex-1'>
                    <div className='w-96 mb-5'>
                        {page==0?
                            <h2 className='font-semibold text-3xl text-contrastWhite'>Entrar</h2>
                        
                        :
                            <h2 className='font-semibold text-3xl text-contrastWhite'>Cadastre-se</h2>
                        }
                    </div>
                    {page==0?
                    <div className=' max-h-96 pb-5 bg-distaqueBlack30 w-96 rounded-md p-5 flex-1'>
                        
                        <div className='text-contrastWhite flex flex-col gap-5'>
                            <div>
                                <h3>Email:</h3>
                                <input type="text" className='bg-bgAlmostBlack w-full h-10 rounded-sm px-3' name="" id="" />
                            </div>
                            <div>
                                <h3>Senha:</h3>
                                <input type="text" className='bg-bgAlmostBlack w-full h-10 rounded-sm' name="" id="" /> 
                            </div>
                            <Link to={"/Home"} className='w-full'><button className='bg-contrastWhite w-full text-bgBlack h-10 rounded-sm mt-5 hover:brightness-75 transition-all duration-200 cursor-pointer'>Entrar</button></Link>
                            <hr />
                            <p className='flex justify-center'>Ainda não possui uma conta? <b className='underline cursor-pointer' onClick={()=>setPage(1)}> Cadastre-se</b></p>
                            
                            <p className='flex justify-center'>Precisa recuperar a senha? <b className='underline cursor-pointer' onClick={()=>setPage(1)}> Clique aqui</b></p>

                        </div>
                        
                        
                    </div>
                    :
                    <div className=' pb-5 bg-distaqueBlack30 w-96 rounded-md p-5 flex-1'>
                        <div className='text-contrastWhite flex flex-col gap-5'>
                            <div>
                                <h3>Nome completo:</h3>
                                <input type="text" className='bg-bgAlmostBlack w-full h-10 rounded-sm px-3' name="" id="" />
                            </div>
                            <div>
                                <h3>Email:</h3>
                                <input type="text" className='bg-bgAlmostBlack w-full h-10 rounded-sm' name="" id="" /> 
                            </div>
                            <div>
                                <h3>Senha:</h3>
                                <input type="text" className='bg-bgAlmostBlack w-full h-10 rounded-sm' name="" id="" /> 
                            </div>
                            <div>
                                <h3>Confirmar senha:</h3>
                                <input type="text" className='bg-bgAlmostBlack w-full h-10 rounded-sm' name="" id="" /> 
                            </div>
                            <div>
                                <h3>Telefone:</h3>
                                <input type="text" className='bg-bgAlmostBlack w-full h-10 rounded-sm' name="" id="" /> 
                            </div>
                            <Link to={"/Home"} className='w-full'><button className='bg-contrastWhite w-full text-bgBlack h-10 rounded-sm mt-5 hover:brightness-75 transition-all duration-200 cursor-pointer'>Entrar</button></Link>
                            <hr />
                            <p className='flex justify-center'>Já possui uma conta? <b className='underline cursor-pointer' onClick={()=>setPage(0)}> Entrar</b></p>
                        </div>
                    </div>

                    }
                </div>
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
