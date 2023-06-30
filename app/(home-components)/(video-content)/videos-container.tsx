import VideoContainer from "./video-container";


export default function VideosContainer({ videos, currentPage, setCurrentPage }: VideoFilterProps & PageProps) {
    const videosPerPage = 9;
    const totalPages = videos && Math.ceil(videos.length / videosPerPage);
   
  
    const handlePageClick = (pageNumber: Number) => {
      setCurrentPage(Number(pageNumber));
    };
  
    return (
      <div className="flex flex-col justify-center w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 px-10 lg:px-0">
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