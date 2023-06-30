interface VideoModalProps {
    video: VideoProps;
    showModal?: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  type VideoProps = {
    id: number;
    urlId: string;
    title: string;
  }
  
  type VideoContainerProps = {
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