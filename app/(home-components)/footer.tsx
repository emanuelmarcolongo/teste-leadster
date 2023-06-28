import Image from "next/image";

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
          <p className="text-gray-400 text-sm font-bold">Home</p>
          <p className="text-gray-400 text-sm font-bold">Ferramentas</p>
          <p className="text-gray-400 text-sm font-bold">Preço</p>
          <p className="text-gray-400 text-sm font-bold">Contato</p>
        </div>
        <div className="space-y-4">
          <p className="text-fontColor font-semibold mb-9">Cases</p>
          <p className="text-gray-400 text-sm font-bold">Geração de Leads B2B</p>
          <p className="text-gray-400 text-sm font-bold">Geração de Leads em Software</p>
          <p className="text-gray-400 text-sm font-bold">Geração de Leads em Imobiliária</p>
          <p className="text-gray-400 text-sm font-bold">Cases de Sucesso</p>
        </div>
        <div className="space-y-4">
          <p className="text-fontColor font-semibold mb-9">Materiais</p>
          <p className="text-gray-400 text-sm font-bold">Blog</p>
          <p className="text-gray-400 text-sm font-bold">Parceria com Agências</p>
          <p className="text-gray-400 text-sm font-bold">Guia Definitivo do Marketing</p>
          <p className="text-gray-400 text-sm font-bold">Materiais Gratuitos</p>
        </div>
        <div className="space-y-4">
          <p className="text-fontColor font-semibold mb-9">Siga a Leadster</p>
          <p className="text-gray-400 text-sm font-bold">Links Principais</p>
          <p className="text-gray-400 text-sm font-bold"><strong className="text-fontColor">E-mail:</strong> contato@leadster.com.br</p>
          <p className="text-gray-400 text-sm font-bold"><strong className="text-fontColor">Telefone::</strong> (42) 98828 - 9851</p>
        </div>
      </div>
    </>
  );
}
