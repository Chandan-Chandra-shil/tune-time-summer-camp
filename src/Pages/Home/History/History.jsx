import React from "react";
import CountUp from "react-countup";
const History = () => {
  return (
    <div className="bg-orange-50 py-20">
      <div className=" w-1/2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto ">
        <div className=" p-5 border  hover:bg-orange-100  text-center rounded shadow">
          <CountUp
            className=" text-6xl font-extrabold text-orange-600"
            end={25}
            duration={10}
          ></CountUp>
          <p className="text-xl font-bold">
            Professional <br />
            <span className="text-orange-400 text-semibold">Teacher</span>
          </p>
        </div>

        <div className=" p-5 border text-center hover:bg-orange-100  rounded shadow">
          <CountUp
            className=" text-6xl font-extrabold text-orange-600"
            end={50}
            duration={10}
          ></CountUp>
          <p className="text-xl font-bold">
            Learning <br />
            <span className="text-orange-400 text-semibold">Group</span>
          </p>
        </div>

        <div className=" p-5 border text-center hover:bg-orange-100  rounded shadow">
          <CountUp
            className=" text-6xl font-extrabold text-orange-600"
            end={200}
            duration={20}
          ></CountUp>
          <p className="text-xl font-bold">
            Happy <br />
            <span className="text-orange-400 text-semibold">Client</span>
          </p>
        </div>

        <div className="p-5 border text-center hover:bg-orange-100 rounded shadow">
          <CountUp
            className=" text-6xl font-extrabold text-orange-600"
            end={20}
            duration={10}
          ></CountUp>
          <p className="text-xl font-bold">
            Music <br />
            <span className="text-orange-400 text-semibold">Classes</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
