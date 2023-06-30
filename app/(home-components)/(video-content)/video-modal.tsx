export default function VideoModal({ video, showModal, setShowModal }: VideoModalProps) {
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