import Image from "next/image";

export default function LeadsContent() {
  return (
    <div className="bg-darkBG lg:flex lg:flex-row flex-col justify-center lg:space-x-16 items-center md:px-16 md:py-10 px-10 ">
      <Image
        width={500}
        height={500}
        alt="Comparativo Geração de Leads com a Leadster"
        src="/imgs/comparativo.png"
      ></Image>
      <div className="flex flex-col items-center lg:items-start">
        <p className=" text-3xl text-fontColor">
          Pronto para triplicar a sua <br />
          <b>Geração de Leads?</b>
        </p>
        <p className=" text-lg text-fontColor">
          Criação e ativação <b>4 minutos.</b> 
        </p>
        <hr className="mx-auto my-6 h-[1px] w-full"></hr>
        <div className="flex space-x-3">
          <button className="text-white bg-main rounded-full font-bold text-base p-5 hover:bg-white hover:text-main hover:ring-2">
            VER DEMONSTRAÇÃO
          </button>
          <Image
            width={205}
            height={73}
            alt="Comparativo Geração de Leads com a Leadster"
            src="/imgs/selo_RD.png"
          ></Image>
        </div>

        <p className="text-fontColor my-5 flex">
          <Image
          className="hidden lg:block"
            width={16}
            height={16}
            alt="Comparativo Geração de Leads com a Leadster"
            src="/imgs/no-card-dark.webp"
          />
          <b>Não </b> é necessário cartão de
          crédito |
          <Image
            className="hidden lg:block"
            width={92}
            height={16}
            alt="Comparativo Geração de Leads com a Leadster"
            src="/imgs/rating.webp"
          />
          <span className="font-semibold">4.9</span> /5 média de satisfação
        </p>
      </div>
    </div>
  );
}
