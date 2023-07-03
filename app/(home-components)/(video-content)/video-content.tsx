"use client";
import { useState } from "react";
import videos from "@/public/assets/videos.json";
import Filters from "./filter-component";
import VideosContainer from "./videos-container";




export default function VideoContent() {
  const [filter, setFilter] = useState("todos");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredVideos: VideoProps[] | null = videos.filter((video) => {
    if (filter === "todos") {
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








