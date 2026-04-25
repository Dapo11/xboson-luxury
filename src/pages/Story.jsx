import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StoryOpening from "../components/story/StoryOpening";
import ReligionSection from "../components/story/ReligionSection";
import ScienceSection from "../components/story/ScienceSection";
import HistorySection from "../components/story/HistorySection";
import MeetingPoint from "../components/story/MeetingPoint";
import StoryLenses from "../components/story/StoryLenses";
import FromTheFounder from "../components/story/FromTheFounder";

function Story() {
  return (
    <div className="min-h-screen bg-xb-black overflow-x-hidden">
      <Navbar />
      <StoryOpening />
      <ReligionSection />
      <ScienceSection />
      <HistorySection />
      <MeetingPoint />
      <StoryLenses />
      <FromTheFounder />
      <Footer />
    </div>
  );
}

export default Story;
