import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center items-center flex-col my-20">
        <Image alt="logo" src={"/imgs/logo.png"} height={41} width={194} />
        <p className="text-gray-600 text-xs">
          Transformando visitantes em clientes
        </p>
      </div>

      <div className="flex w-full justify-around px-32">
        <div className="space-y-4">
          <p className="text-fontColor font-semibold mb-9">Links Principais</p>
          <p className="text-gray-400 text-sm font-bold hover:text-main hover:cursor-pointer">Home</p>
          <p className="text-gray-400 text-sm font-bold hover:text-main hover:cursor-pointer" >Ferramentas</p>
          <p className="text-gray-400 text-sm font-bold hover:text-main hover:cursor-pointer">Preço</p>
          <p className="text-gray-400 text-sm font-bold hover:text-main hover:cursor-pointer">Contato</p>
        </div>
        <div className="space-y-4">
          <p className="text-fontColor font-semibold mb-9">Cases</p>
          <p className="text-gray-400 text-sm font-bold hover:text-main hover:cursor-pointer">
            Geração de Leads B2B
          </p>
          <p className="text-gray-400 text-sm font-bold hover:text-main hover:cursor-pointer">
            Geração de Leads em Software
          </p>
          <p className="text-gray-400 text-sm font-bold hover:text-main hover:cursor-pointer">
            Geração de Leads em Imobiliária
          </p>
          <p className="text-gray-400 text-sm font-bold hover:text-main hover:cursor-pointer">Cases de Sucesso</p>
        </div>
        <div className="space-y-4">
          <p className="text-fontColor font-semibold mb-9">Materiais</p>
          <p className="text-gray-400 text-sm font-bold hover:text-main hover:cursor-pointer">Blog</p>
          <p className="text-gray-400 text-sm font-bold hover:text-main hover:cursor-pointer">
            Parceria com Agências
          </p>
          <p className="text-gray-400 text-sm font-bold hover:text-main hover:cursor-pointer">
            Guia Definitivo do Marketing
          </p>
          <p className="text-gray-400 text-sm font-bold hover:text-main hover:cursor-pointer">Materiais Gratuitos</p>
        </div>
        <div className="space-y-4">
          <p className="text-fontColor font-semibold mb-9">Siga a Leadster</p>
          
          <SocialMedia></SocialMedia>

          <p className="text-gray-400 text-sm font-bold">
            <strong className="text-fontColor">E-mail:</strong>{" "}
            contato@leadster.com.br
          </p>
          <p className="text-gray-400 text-sm font-bold">
            <strong className="text-fontColor">Telefone::</strong> (42) 98828 -
            9851
          </p>
        </div>
        
      </div>
      <hr className="h-[1px] w-full my-14 "></hr>
      <AditionalInfo></AditionalInfo>
    </>
  );
}


function SocialMedia() {
    return (
<div className="flex space-x-3">
            <div className="flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[#f7f8fb] hover:bg-main">
                <Link href={"https://www.linkedin.com/company/leadster-platform/"} target="_blank">
                <Image
                
                className=""
                alt="linkedin"
                width={24}
                height={24}
                src={"/imgs/linkedin.svg"}
              ></Image>
                </Link>
              
            </div>{" "}
            <div className="flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[#f7f8fb]  hover:bg-main">
            <Link href={"https://www.linkedin.com/company/leadster-platform/"} target="_blank">
              <Image
                className=""
                alt="facebook"
                width={24}
                height={24}
                src={"/imgs/facebook.svg"}
              ></Image>
              </Link>
            </div>{" "}
            <div className="flex items-center justify-center rounded-full w-[50px] h-[50px] bg-[#f7f8fb]  hover:bg-main">
            <Link href={"https://www.instagram.com/leadster.com.br/"} target="_blank">
              <Image
                className=""
                alt="instagram"
                width={24}
                height={24}
                src={"/imgs/instagram.svg"}
              ></Image>
              </Link>
            </div>
          </div>
    )
}

function AditionalInfo() {
    return (
        <div className="flex items-center justify-around text-sm text-gray-400 font-bold px-5">
            <p>
                Copyright © 2015 - 2022 Todos os direitos reservados | <Link target="_blank" className="text-main hover:underline" href={"https://leadster.com.br/"}> Leadster </Link>
            </p>
            <p>
                Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | <span className="text-main hover:cursor-pointer hover:underline">Termos de Uso</span>
            </p>
        </div>
    )
}