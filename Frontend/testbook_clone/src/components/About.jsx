import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await fetch("http://localhost:4000/exams");
        if (!response.ok) {
          throw new Error("Failed to fetch exams");
        }
        const data = await response.json();
        setExams(data[0]); // Assuming the API returns the data array with exams in the first object.
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-7 flex flex-col space-y-2 justify-center bg-blue-100">
      <h1 className="text-2xl font-semibold">Popular Exams</h1>
      <p>Get exam-ready with concepts, questions, and study notes as per the latest pattern</p>
      <div className="flex space-x-4">
        <button className="border border-blue-600 p-2 rounded-2xl hover:bg-blue-400">SSC Exams</button>
        <button className="border border-blue-600 p-2 rounded-2xl hover:bg-blue-400">Banking Exams</button>
        <button className="border border-blue-600 p-2 rounded-2xl hover:bg-blue-400">Teaching Exams</button>
        <button className="border border-blue-600 p-2 rounded-2xl hover:bg-blue-400">Civil Services Exam</button>
        <button className="border border-blue-600 p-2 rounded-2xl hover:bg-blue-400">Railways Exam</button>
        <button className="border border-blue-600 p-2 rounded-2xl hover:bg-blue-400">Engineering Recruitment Exams</button>
      </div>
      <div className="grid grid-cols-3 grid-rows-4 gap-4 p-10">
        {Object.keys(exams).map((key) => (
          <div
            key={key}
            className="bg-white p-3 flex font-semibold items-center justify-between border border-black hover:translate-1"
          >
            <div className="flex items-center">
              <img
                src={exams[key].imageUrl}
                className="w-9 h-9"
                alt={exams[key].exam}
              />
              {exams[key].exam}
            </div>
            <span><FaArrowRight /></span>
          </div>
        ))}
        <div className="bg-white p-3 flex font-semibold items-center justify-around border border-black hover:translate-1">
          <div>
            <img src="" alt="" />
            <a href="">Explore all exams</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
