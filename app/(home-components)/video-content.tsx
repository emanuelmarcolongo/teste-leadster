import Image from "next/image";


export default function VideoContent() {
   

  return (
    <main className="xl:w-[60%] mx-auto">
      <Filters></Filters>
      <VideosContainer></VideosContainer>
    </main>
  );
}

function VideosContainer() {
    const maxVideosOnDisplay = Array.from({ length: 9 }, (_, index) => index);

    return (
        <div className="flex justify-center w-full">
            <div className="grid lg:grid-cols-3 gap-10">
            {maxVideosOnDisplay.map((i) => <VideoContainer></VideoContainer>)}
            </div>
            
        </div>
    )

}

function VideoContainer() {
    return (
    <div className=" flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-2xl shadow-black">
        <Image height={250} width={1000} alt="Video Thumbnail" src={'/imgs/thumbnail.png'}></Image>
        <p className="text-fontColor text-xs font-semibold  px-4 py-2">Como aumentar sua geração de Leads feat. Traktor</p>
    </div>
    )
}

function Filters() {
  return (
    <>
      <div className="flex justify-between mt-16">
        <div className="flex space-x-4">
          <p className="border-2 rounded-2xl border-fontColor py-2 px-3  text-fontColor  font-semibold hover:border-main hover:text-white hover:bg-main">
            Agências
          </p>
          <p className="border-2 rounded-2xl border-fontColor py-2 px-3 text-fontColor font-semibold hover:border-main hover:text-white hover:bg-main">
            Chatbot
          </p>
          <p className="border-2 rounded-2xl border-fontColor py-2 px-3 text-fontColor font-semibold hover:border-main hover:text-white hover:bg-main">
            Marketing Digital
          </p>
          <p className="border-2 rounded-2xl border-fontColor py-2 px-3 text-fontColor font-semibold hover:border-main hover:text-white hover:bg-main">
            Geração de Leads
          </p>
          <p className="border-2 rounded-2xl border-fontColor py-2 px-3 text-fontColor font-semibold hover:border-main hover:text-white hover:bg-main">
            Mídia Paga
          </p>
        </div>
        <div className="flex items-center ml-10">
          <p className="text-fontColor font-semibold mr-2">Ordernar por</p>
          <select className="bg-white border-2 rounded-2xl border-fontColor py-2 px-4">
            <option>Data de publicação</option>
          </select>
        </div>
      </div>

      <hr className="mx-auto my-6 h-[1px] w-full"></hr>
    </>
  );
}
