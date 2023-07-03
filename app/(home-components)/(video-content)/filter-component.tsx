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
      <div className="flex justify-between mt-16">
        <div className="flex space-x-4 overflow-x-scroll text-sm text-justify">
          {filterOptions.map((option, idx) => 
        (<p
          key={idx}
          onClick={() => handleFilterClick(option.key)}
          className={`${
            filter === option.key
              ? "text-white bg-main border-main"
              : "hover:text-main"
          } hover:cursor-pointer  lg:border-2 py-1 px-1 lg:py-2 lg:px-3 rounded-xl border-fontColor   text-fontColor  font-semibold hover:border-main`}
        >
          {option.title}
        </p>)
          )}

        </div>
        <div className="flex items-center justify-center ml-10">
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