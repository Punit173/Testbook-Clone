import React from 'react'

const Courses = () => {
  return (
     <div className="p-7 flex flex-col space-y-2 justify-center bg-blue-100">
          <h1 className="text-2xl font-semibold">Popular Exams</h1>
          <p>Get exam-ready with concepts, questions, and study notes as per the latest pattern</p>
          <div className="flex space-x-4">
            <button className="border border-blue-600 p-2 rounded-2xl hover:bg-blue-400">UGC NET/SET (Hinglish)</button>
            <button className="border border-blue-600 p-2 rounded-2xl hover:bg-blue-400">RRB Group D</button>
            <button className="border border-blue-600 p-2 rounded-2xl hover:bg-blue-400">SSC CGL (Guaranteed Selection Program) 2025</button>
            <button className="border border-blue-600 p-2 rounded-2xl hover:bg-blue-400">Assistant Professor / Lectureship (UGC)</button>
          </div>
          
        </div>
  )
}

export default Courses
