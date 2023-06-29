export default function VideoContent() {
  return (
    <>
      <Filters></Filters>
    </>
  );
}

function Filters() {
  return (
    <>
      <div className="flex justify-center mt-16">
        <div className="flex space-x-4 justify-center">
          <p className="border-2 rounded-2xl border-fontColor py-2 px-4 text-fontColor font-semibold hover:border-main hover:text-main">
            Agências
          </p>
          <p className="border-2 rounded-2xl border-fontColor py-2 px-4 text-fontColor font-semibold hover:border-main hover:text-main">
            Chatbot
          </p>
          <p className="border-2 rounded-2xl border-fontColor py-2 px-4 text-fontColor font-semibold hover:border-main hover:text-main">
            Marketing Digital
          </p>
          <p className="border-2 rounded-2xl border-fontColor py-2 px-4 text-fontColor font-semibold hover:border-main hover:text-main">
            Geração de Leads
          </p>
          <p className="border-2 rounded-2xl border-fontColor py-2 px-4 text-fontColor font-semibold hover:border-main hover:text-main">
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
