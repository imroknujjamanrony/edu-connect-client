import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InspireTeacher = () => {
  return (
    <div
      id="becomeTeacher"
      className="flex items-center justify-center bg-sectionColor mt-12 py-10 px-5"
    >
      <div className="grid md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        {/* Left Section: Image */}
        <motion.div
          className="relative w-full max-w-[300px] h-[300px] mx-auto md:mx-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-full bg-yellow-400 absolute top-5 left-5 rounded-lg"></div>
          <img
            src="https://i.ibb.co/xS3Ty9s/Portrait-of-indian-teacher-smiling-while-teaching-the-kids-in-the-school-Premium-AI-generated-image.jpg"
            alt="Instructor"
            className="relative z-10 rounded-lg shadow-lg w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Section: Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Become an <span className="text-blue-600">Instructor</span>
          </h2>
          <p className="text- text-lg mb-6">
            Share your knowledge with learners worldwide. We provide the tools
            and support you need to inspire and teach what you love.
          </p>
          <Link to="/TeachOnWebsite">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700"
            >
              Start Teaching Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default InspireTeacher;
