import Footer from "./(home-components)/footer";
import Header from "./(home-components)/header";
import LeadsContent from "./(home-components)/leads-content";
import VideoContent from "./(home-components)/(video-content)/video-content";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <VideoContent></VideoContent>
      <LeadsContent></LeadsContent>
      <Footer></Footer>
    </main>
  )
}
