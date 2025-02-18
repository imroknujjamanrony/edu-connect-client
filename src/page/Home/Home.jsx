import Banner from "../../components/Home/Banner";
import CoursesSection from "../../components/Home/CourseSection";
import InspireTeacher from "../../components/Home/InspireTeacher";
import Stats from "../../components/Home/Stats";
import HighlightedClass from "./HighlightedClass";
import PartnersSection from "./PartnersSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <PartnersSection></PartnersSection>
        <Stats></Stats>
        <HighlightedClass></HighlightedClass>
        <InspireTeacher></InspireTeacher>
        <CoursesSection></CoursesSection>
      </div>
    </div>
  );
};

export default Home;
