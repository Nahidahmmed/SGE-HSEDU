import Applications from "./Components/Applications";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import SearcheForm from "./Components/SearcheForm";
import StudyAbroad from "./Components/StudyAbroad";
import StudyProgram from "./Components/StudyProgram";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div
        className="absolute z-50 lg:ml-80 ml-0 w-full px-1 sm:px-6 md:px-8 max-w-screen-xl
                top-[550px] sm:-top-14 md:-top-16 lg:top-[520px] xl:top-[520px]"
      >
        <SearcheForm />
      </div>
      <StudyAbroad/>
      <StudyProgram />
      <Applications />
    </div>
  );
}
