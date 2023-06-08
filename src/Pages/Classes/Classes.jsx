import React, { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

const Classes = () => {
  const [classItems, setClassItems] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/all-class")
      .then((res) => res.json())
      .then((data) => setClassItems(data));
  }, []);

  return (
    <div className="">
      <h1 className="text-center py-12  font-bold md:text-5xl text-4xl   bg-orange-400">
        Our Classes
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto my-12 gap-4">
        {classItems?.map((classItem) => (
          <ClassesCard key={classItem._id} classItem={classItem}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
