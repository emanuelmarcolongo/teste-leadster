'use client';
import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";

interface VideoModalProps {
  showModal?: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function VideoContent() {
    const [showModal, setShowModal] = useState(false);
    
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === "Escape") {
            setShowModal(false);
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      }, []);

  return (
    <main className="xl:w-[60%] mx-auto">
      <Filters></Filters>
      <VideosContainer setShowModal={setShowModal}></VideosContainer>
      <VideoModal showModal={showModal} setShowModal={setShowModal}/>
    </main>
  );
}

function VideosContainer({setShowModal}: VideoModalProps) {
  const maxVideosOnDisplay = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div className="flex justify-center w-full">
      <div className="grid lg:grid-cols-3 gap-10">
        {maxVideosOnDisplay.map((i) => (
          <VideoContainer setShowModal={setShowModal}/>
        ))}
      </div>
    </div>
  );
}

function VideoContainer({setShowModal}: VideoModalProps) {
  return (
    <div onClick={()=> setShowModal(true)} className=" flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-2xl shadow-black cursor-pointer">
      <Image
        height={250}
        width={1000}
        alt="Video Thumbnail"
        src={"/imgs/thumbnail.png"}
      ></Image>
      <p className="text-fontColor text-md font-semibold  px-4 py-2">
        Como aumentar sua geração de Leads feat. Traktor
      </p>
    </div>
  );
}

function Filters() {
  return (
    <>
      <div className="flex justify-between mt-16">
        <div className="flex space-x-4">
          <p className="border-2 rounded-2xl border-fontColor py-2 px-3  text-fontColor  font-semibold hover:border-main hover:text-main ">
            Agências
          </p>
          <p className="border-2 rounded-2xl border-fontColor py-2 px-3 text-fontColor font-semibold hover:border-main hover:text-main ">
            Chatbot
          </p>
          <p className="border-2 rounded-2xl border-fontColor py-2 px-3 text-fontColor font-semibold hover:border-main hover:text-main ">
            Marketing Digital
          </p>
          <p className="border-2 rounded-2xl border-fontColor py-2 px-3 text-fontColor font-semibold hover:border-main hover:text-main ">
            Geração de Leads
          </p>
          <p className="border-2 rounded-2xl border-fontColor py-2 px-3 text-fontColor font-semibold hover:border-main hover:text-main">
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

function VideoModal({showModal, setShowModal}: VideoModalProps) {
    

  return (
    <div onClick={() => setShowModal(false)} className={` w-[100%] h-[100vh] bg-main bg-opacity-20 fixed bottom-0 left-0 flex items-center justify-center ${showModal ? "block" : "hidden"}`}>
        
      <div onClick={(e)=> e.stopPropagation()} className="bg-white w-[450px] rounded-xl mx-auto my-auto relative">
      <button onClick={()=> setShowModal(false)} className="absolute top-3 right-3 w-[40px] h-[40px]">X</button>
        <p className="text-fontColor font-semibold self-center mx-auto  p-5 w-[300px]">
          <span className="text-main">Webinar:</span> Como aumentar sua Geração
          de Leads feat. Traktor
        </p>

        {showModal &&  <iframe
          width="450"
          height="300"
          src="https://www.youtube.com/embed/a89Htfx0YKo"
        />
}
       
        <div className="py-2 px-5">
          <p className="text-fontColor font-semibold">Descrição:</p>
          <hr className="mx-auto my-6 h-[1px] w-full " ></hr>
          <p className="text-sm text-fontColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad
            rem distinctio eum aliquam, tenetur magni incidunt explicabo!
            Dolores earum fugiat culpa nisi praesentium dignissimos magni
            suscipit blanditiis nihil nesciunt.
          </p>
        </div>
      </div>
    </div>
  );
}
