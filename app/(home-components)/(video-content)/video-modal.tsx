import Image from "next/image";

type DownloadContentProps = {
  direction: 'row' | 'column';
};

export default function VideoModal({
  video,
  showModal,
  setShowModal,
}: VideoModalProps) {
  return (
    <div
      onClick={() => setShowModal(false)}
      className={` w-[100%] h-[100vh] bg-main bg-opacity-20 fixed bottom-0 left-0 flex items-center justify-center z-10 ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[100%] lg:w-1/2 flex flex-col items-center justify-center rounded-xl mx-auto my-auto relative"
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

        <div className="py-2 px-5 w-full">
          <p className="text-fontColor font-semibold">Descrição:</p>
          <hr className="mx-auto my-4 mt-2 h-[1px] w-full "></hr>
          <p className="text-sm text-fontColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad
            rem distinctio eum aliquam, tenetur magni incidunt explicabo!
            Dolores earum fugiat culpa nisi praesentium dignissimos magni
            suscipit blanditiis nihil nesciunt.
          </p>
        </div>

        <div className="py-2 px-5 w-full mb-5">
          <p className="text-fontColor font-semibold">Downloads:</p>
          <hr className="mx-auto my-4 mt-2 h-[1px] w-full "></hr>
          <DownloadContent direction='row'/>
        </div>
      </div>
      <div className="hidden lg:block  absolute bottom-0 left-0 bg-white w-[200px] height-[400px]">
      <DownloadContent direction="column"/>
      </div>
      
    </div>
  );
}

function DownloadContent({direction}: DownloadContentProps) {
  const downloadList = [
    {
      title: "Spreadsheet.xls",
      bg1: "#9fefdf",
      bg2: "#8ee3d1",
      fontColor: "#1eb990",
    },
    {
      title: "Document.doc",
      bg1: "#c2e6ff",
      bg2: "#a1d9ff",
      fontColor: "#43a5f3",
    },
    {
      title: "Presentation.ppt",
      bg1: "#fff8d0",
      bg2: "#fff1a0",
      fontColor: "#bfad68",
    },
  ];

  return (
    <div className={`flex ${direction === 'column' && 'flex-col items-center justify-center p-4 space-y-4'} w-full ${direction === 'row' && 'space-x-4'}`}>
      {downloadList.map((item, idx) => (
        <div
        key={idx}
          className={`flex bg-[${item.bg1}] rounded-lg items-center justify-around w-full`}
        >
          <div
            className={`bg-[${item.bg2}] h-[40px] w-[50px] flex items-center justify-center rounded-l-lg`}
          >
            <Image
              alt="Download Icon"
              src={"/imgs/download.svg"}
              width={20}
              height={20}
            ></Image>
          </div>
          <p className={`font-semibold text-[${item.fontColor}] text-sm px-2`}>
            {item.title}
          </p>
        </div>
      ))}
      {direction === 'column' && <div
          className={`flex bg-[#e8eef3] rounded-lg items-center justify-around w-full`}
        >
          <div
            className={`bg-[#d0dee7] h-[40px] w-[50px] flex items-center justify-center rounded-l-lg`}
          >
            <Image
              alt="Download Icon"
              src={"/imgs/download.svg"}
              width={20}
              height={20}
            ></Image>
          </div>
          <p className={`font-semibold text-[#a5adb4] text-sm px-2`}>
            Folder.zip
          </p>
        </div>}
      
    </div>
  );
}
