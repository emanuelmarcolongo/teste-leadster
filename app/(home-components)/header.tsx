import Image from "next/image"



export default function Header() {
    return (
        <>
        <nav className="flex justify-center p-10">
            <Image alt='logo' src={"/imgs/logo.png"} height={41} width={194}/>
        </nav>
        <div className="bg-darkBG gap-3 flex justify-center items-center flex-col w-full h-[50vh]">
            <p className="border-2 rounded-t-3xl rounded-br-3xl py-1 px-4 border-main text-main font-extrabold text-sm">
                WEBINARS EXCLUSIVOS
            </p>
            <p className="text-fontColor text-4xl "> Menos Conversinha, </p>
            <div className="">
            <p className=" relative font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-br from-main to-secondary"> Mais Conversão
            <Image className="absolute bottom-9 -right-4" alt='logo' src={"/imgs/asset-header.png"} height={41} width={41}/>
             </p>
            
            </div>
            <hr className="h-[1px] w-1/4 my-2 "></hr>
            <p className="text-red text-xs">Conheça nossas estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
            
        </div>
        </>
        
    )
}