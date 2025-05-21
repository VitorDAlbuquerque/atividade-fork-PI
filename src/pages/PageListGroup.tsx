import { Navbar } from "@/Components/Navbar";
import { Quadradinho } from "@/Components/Quadradinho";
import { useDatasGroups } from "@/hooks/useDatas";
import { FaPlusSquare } from "react-icons/fa";


export function PageListGroup(){
    return(
        <div className="flex flex-col md:w-full pb-24 md:pb-0">
            <Navbar/>

            <div className='flex-1 border flex items-center md:items-start flex-col md:gap-5 border-contrastWhite30 border-b-0 border-r-0 rounded-tl-xl md:p-12 p-3 '>

                <div className="text-contrastWhite flex justify-between mb-10 md:mb-0 w-full">
                    <h1 className="font-semibold text-4xl ">Grupos de imóveis</h1>
                    <p className='cursor-pointer hover:underline flex items-center gap-2'><FaPlusSquare/>Criar grupo</p>
                </div>
                <div className='flex gap-5 flex-wrap w-11/12 md:w-full'>
                    {useDatasGroups?
                        useDatasGroups.map(group=>{
                            return(
                                <Quadradinho name={group.name} urlImg={group.urlImg}/>

                            )

                        })
                        
                        :null}
                    

                </div>
            </div>
        </div>
    )
}
