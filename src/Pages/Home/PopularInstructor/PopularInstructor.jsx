import { useEffect, useState } from "react";
import PopularClassCard from "../PopularClasses/PopularClassCard";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState(null);
  console.log(instructors);
  useEffect(() => {
    fetch("http://localhost:5000/all-instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="container mx-auto my-12">
      <h2 className="text-center text-orange-600 font-bold text-xl md:text-2xl">
        Our Instructors
      </h2>
      <h1 className="text-center mb-8 md:text-5xl text-3xl font-bold ">
        Most Popular Instructor
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructors?.map((instructor) => (
          <PopularInstructorCard
            key={instructor._id}
            instructor={instructor}
          ></PopularInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
