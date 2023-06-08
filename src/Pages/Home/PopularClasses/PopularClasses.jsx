import { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
  const [classItems, setClassItems] = useState([]);
  console.log(classItems);
  useEffect(() => {
    fetch("http://localhost:5000/all-class")
      .then((res) => res.json())
      .then((data) => setClassItems(data));
  }, []);
  return (
    <div className="container mx-auto my-12">
      <h2 className="text-center text-orange-600 font-bold text-xl md:text-2xl"> Our Classes</h2>
      <h1 className="text-center mb-8 md:text-5xl text-4xl font-bold ">
        Most Popular Classes
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classItems.map((classItem) => (
          <PopularClassCard
            key={classItem._id}
            classItem={classItem}
          ></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;


