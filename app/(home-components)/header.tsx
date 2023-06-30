import Image from "next/image"



export default function Header() {
    return (
        <>
        <nav className="flex justify-center p-10">
            <Image alt='logo' src={"/imgs/logo.png"} height={41} width={140}/>
        </nav>
        <div className="bg-darkBG gap-3 flex justify-center items-center flex-col w-full h-[50vh]">
            <p className="border-2 rounded-t-3xl rounded-br-3xl py-1 px-4 border-main text-main font-extrabold text-sm">
                WEBINARS EXCLUSIVOS
            </p>
            <h2 className="text-fontColor sm:text-4xl text-2xl"> Menos Conversinha, </h2>
            <div className="">
            <h1 className=" relative font-extrabold text-transparent text-4xl sm:text-6xl bg-clip-text bg-gradient-to-br from-main to-secondary"> Mais Conversão
            <Image className="absolute sm:bottom-9 sm:-right-4 max-sm:hidden " alt='logo' src={"/imgs/asset-header.png"} height={41} width={41}/>
             </h1>
            
            </div>
            <hr className="h-[1px] w-1/4 my-2 "></hr>
            <p className="text-red text-xs">Conheça nossas estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
            
        </div>
        </>
        
    )
}