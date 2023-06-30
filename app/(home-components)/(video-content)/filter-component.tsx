export default function Filters({ setCurrentPage, currentPage, filter, setFilter }: FilterProps & PageProps) {

    function handleFilterClick (filter: string) {
      setFilter(filter);
      setCurrentPage(1);
    }
    return (
      <>
        <div className="flex justify-between mt-16">
          <div className="flex space-x-4 flex-wrap ">
            <p
              onClick={() => handleFilterClick("agencias")}
              className={`${filter === 'agencias' ? 'text-white bg-main border-main' : 'hover:text-main'} border-2 py-1 px-1 lg:py-2 lg:px-3 rounded-2xl border-fontColor   text-fontColor  font-semibold hover:border-main`}
            >
              Agências
            </p>
            <p
              onClick={() => handleFilterClick("chatbot")}
              className={`${filter === 'chatbot' ? 'text-white bg-main border-main' : 'hover:text-main'} border-2 rounded-2xl border-fontColor py-1 px-1 lg:py-2 lg:px-3  text-fontColor  font-semibold hover:border-main `}
            >
              Chatbot
            </p>
            <p
              onClick={() => handleFilterClick("marketing")}
              className={`${filter === 'marketing' ? 'text-white bg-main border-main' : 'hover:text-main'} border-2 rounded-2xl border-fontColor py-1 px-1 lg:py-2 lg:px-3 text-fontColor  font-semibold hover:border-main `}
            >
              Marketing Digital
            </p>
            <p
              onClick={() => handleFilterClick("leads")}
              className={`${filter === 'leads' ? 'text-white bg-main border-main' : 'hover:text-main'} border-2 rounded-2xl border-fontColor py-1 px-1 lg:py-2 lg:px-3  text-fontColor  font-semibold `}
            >
              Geração de Leads
            </p>
            <p
              onClick={() => handleFilterClick("mídia")}
              className={`${filter === 'mídia' ? 'text-white bg-main border-main' : 'hover:text-main'} border-2 rounded-2xl border-fontColor py-1 px-1 lg:py-2 lg:px-3  text-fontColor  font-semibold hover:border-main `}
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