"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import videos from "@/public/assets/videos1.json";

interface VideoModalProps {
  video: VideoProps;
  showModal?: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface VideoProps {
  id: number;
  urlId: string;
  title: string;
}

interface VideoContainerProps {
  video: VideoProps;
}

type VideoFilterProps = {
  videos?: VideoProps[] | null;
};

type FilterProps = {
  filter?: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

type PageProps = {
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export default function VideoContent() {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredVideos: VideoProps[] | null = videos.filter((video) => {
    if (filter === "all") {
      return true;
    } else {
      return video.title.toLowerCase().includes(filter);
    }
  });

  return (
    <main className="xl:w-[60%] mx-auto">
      <Filters setCurrentPage={setCurrentPage} currentPage={currentPage} filter={filter} setFilter={setFilter}></Filters>
      <VideosContainer currentPage={currentPage} setCurrentPage={setCurrentPage} videos={filteredVideos}></VideosContainer>
    </main>
  );
}

function VideosContainer({ videos, currentPage, setCurrentPage }: VideoFilterProps & PageProps) {
  const videosPerPage = 9;
  const totalPages = videos && Math.ceil(videos.length / videosPerPage);
 

  const handlePageClick = (pageNumber: Number) => {
    setCurrentPage(Number(pageNumber));
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="grid lg:grid-cols-3 gap-10">
        {videos &&
          videos
            .slice(
              (currentPage - 1) * videosPerPage,
              currentPage * videosPerPage
            )
            .map((video, index) => (
              <VideoContainer key={index} video={video} />
            ))}
          
      </div>
      {totalPages == 0 && <p className="font-semibold w-full text-fontColor flex justify-center items-center mx-auto">Não há videos com esse tema</p>}
      <hr className="mx-auto my-12 h-[1px] w-full "></hr>
      <div
        id="pagination"
        className="flex items-center justify-center my-4 space-x-4"
      >
        <p className="text-fontColor font-semibold text-xl">Página </p>
        {totalPages != 0 &&
          totalPages &&
          Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`w-[40px] h-[40px] text-fontColor font-semibold text-xl ${
                  currentPage === page
                    ? "border-2 border-secondary rounded-lg p-1 px-2 text-secondary"
                    : ""
                }  `}
              >
                {page}
              </button>
            )
          )}
      </div>
    </div>
  );
}

function VideoContainer({ video }: VideoContainerProps) {
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

function VideoModal({ video, showModal, setShowModal }: VideoModalProps) {
  return (
    <div
      onClick={() => setShowModal(false)}
      className={` w-[100%] h-[100vh] bg-main bg-opacity-20 fixed bottom-0 left-0 flex items-center justify-center z-10 ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[450px] rounded-xl mx-auto my-auto relative"
      >
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 w-[40px] h-[40px]"
        >
          X
        </button>
        <p className="text-fontColor font-semibold self-center mx-auto  py-7 px-14">
          <span className="text-main">Webinar: </span> {video?.title}
        </p>

        {showModal && (
          <iframe
            width="450"
            height="300"
            src={`https://www.youtube.com/embed/${video?.urlId}`}
          />
        )}

        <div className="py-2 px-5">
          <p className="text-fontColor font-semibold">Descrição:</p>
          <hr className="mx-auto my-4 mt-2 h-[1px] w-full "></hr>
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

function Filters({ setCurrentPage, currentPage, filter, setFilter }: FilterProps & PageProps) {

  function handleFilterClick (filter: string) {
    setFilter(filter);
    setCurrentPage(1);
  }
  return (
    <>
      <div className="flex justify-between mt-16">
        <div className="flex space-x-4">
          <p
            onClick={() => handleFilterClick("agencias")}
            className={`${filter === 'agencias' ? 'text-white bg-main border-main' : 'hover:text-main'} border-2 rounded-2xl border-fontColor py-2 px-3  text-fontColor  font-semibold hover:border-main `}
          >
            Agências
          </p>
          <p
            onClick={() => handleFilterClick("chatbot")}
            className={`${filter === 'chatbot' ? 'text-white bg-main border-main' : 'hover:text-main'} border-2 rounded-2xl border-fontColor py-2 px-3  text-fontColor  font-semibold hover:border-main `}
          >
            Chatbot
          </p>
          <p
            onClick={() => handleFilterClick("marketing")}
            className={`${filter === 'marketing' ? 'text-white bg-main border-main' : 'hover:text-main'} border-2 rounded-2xl border-fontColor py-2 px-3  text-fontColor  font-semibold hover:border-main `}
          >
            Marketing Digital
          </p>
          <p
            onClick={() => handleFilterClick("leads")}
            className={`${filter === 'leads' ? 'text-white bg-main border-main' : 'hover:text-main'} border-2 rounded-2xl border-fontColor py-2 px-3  text-fontColor  font-semibold `}
          >
            Geração de Leads
          </p>
          <p
            onClick={() => handleFilterClick("midia")}
            className={`${filter === 'midia' ? 'text-white bg-main border-main' : 'hover:text-main'} border-2 rounded-2xl border-fontColor py-2 px-3  text-fontColor  font-semibold hover:border-main `}
          >
            Mídia Paga
          </p>
          <p
            onClick={() => handleFilterClick("all")}
            className={`${filter === 'all' ? 'text-white bg-main border-main' : 'hover:text-main'} border-2 rounded-2xl border-fontColor py-2 px-3  text-fontColor  font-semibold hover:border-main `}
          >
            Todos
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
