import Image from "next/image";
import { useEffect, useState } from "react";
import VideoModal from "./video-modal";

export default function VideoContainer({ video }: VideoContainerProps) {
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setShowModal(false);
        }
      };
      window.addEventListener("keydown", handleEsc);
  
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }, []);
  
    return (
      <>
        <div
          onClick={() => setShowModal(true)}
          className=" flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-2xl shadow-black cursor-pointer"
        >
          <Image
            height={250}
            width={1000}
            alt="Video Thumbnail"
            src={"/imgs/thumbnail.png"}
          ></Image>
          <p className="text-fontColor text-md font-semibold  px-4 py-2">
            {video?.title}
          </p>
        </div>
        <VideoModal
          video={video}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </>
    );
  }