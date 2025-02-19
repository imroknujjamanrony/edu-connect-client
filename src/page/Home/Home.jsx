import Banner from "../../components/Home/Banner";
import CoursesSection from "../../components/Home/CourseSection";
import InspireTeacher from "../../components/Home/InspireTeacher";
import Stats from "../../components/Home/Stats";
import HighlightedClass from "./HighlightedClass";
import PartnersSection from "./PartnersSection";
import Faq from "../../components/Faq";
import FeedBackSection from "../../components/FeedbackSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className=" ">
        <PartnersSection></PartnersSection>
        <Stats></Stats>
        <HighlightedClass></HighlightedClass>
        <InspireTeacher></InspireTeacher>
        <CoursesSection></CoursesSection>
        <FeedBackSection></FeedBackSection>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
