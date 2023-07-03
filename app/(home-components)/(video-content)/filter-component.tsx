export default function Filters({
  setCurrentPage,
  currentPage,
  filter,
  setFilter,
}: FilterProps & PageProps) {
  function handleFilterClick(filter: string) {
    setFilter(filter);
    setCurrentPage(1);
  }

  const filterOptions = [
    { title: "Agências", key: "agências" },
    { title: "Chatbot", key: "chatbot" },
    { title: "Marketing Digital", key: "marketing" },
    { title: "Geração de Leads", key: "leads" },
    { title: "Mídia Paga", key: "mídia" },
    { title: "Todos", key: "todos" },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mt-16">
        <div className="flex space-x-4 overflow-x-scroll text-sm text-justify mx-4">
          {filterOptions.map((option, idx) => 
        (<p
          key={idx}
          onClick={() => handleFilterClick(option.key)}
          className={`${
            filter === option.key
              ? "text-white bg-main border-main"
              : "hover:text-main"
          }  hover:cursor-pointer border-2 py-1 px-1 lg:py-2 lg:px-3 rounded-xl border-fontColor   text-fontColor  font-semibold hover:border-main`}
        >
          {option.title}
        </p>)
          )}

        </div>
        <div className="flex flex-col max-w-[1/3] lg:flex-row items-center justify-center ml-10">
          <p className="text-fontColor font-semibold mr-2">Ordernar por</p>
          <select className="bg-white border-2 rounded-2xl border-fontColor lg:py-2 lg:px-4 py-1 px-2">
            <option>Data de publicação</option>
          </select>
        </div>
      </div>

      <hr className="mx-auto my-6 h-[1px] w-full"></hr>
    </>
  );
}