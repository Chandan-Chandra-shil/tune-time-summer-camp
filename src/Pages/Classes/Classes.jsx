import React, { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/Loader";

const Classes = () => {
  const [classItems, setClassItems] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(" https://tune-time-server.vercel.app/all-class")
      .then((res) => res.json())
      .then((data) => {
        setClassItems(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="">
      <Helmet>
        <title>Tune Time | Classes</title>
      </Helmet>
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
