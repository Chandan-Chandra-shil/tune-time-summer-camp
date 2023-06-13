import React from "react";

const History = () => {
  return (
    <div className="bg-orange-50 py-20">
      <div className=" w-1/2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 container mx-auto ">
        <div className="">
          <div className="">
            <h2 className="card-title text-6xl font-extrabold text-orange-600">
              27
            </h2>
            <p className="text-xl font-bold">
              Professional <br />
              <span className="text-orange-400 text-semibold">Teacher</span>
            </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <h2 className="card-title text-6xl font-extrabold text-orange-600">
              54
            </h2>
            <p className="text-xl font-bold">
              Learning <br />
              <span className="text-orange-400 text-semibold">Group</span>
            </p>
          </div>
        </div>
        <div className=" ">
          <div className="">
            <h2 className=" text-6xl font-extrabold text-orange-600">590</h2>
            <p className="text-xl font-bold">
              Happy <br />
              <span className="text-orange-400 text-semibold">Client</span>
            </p>
          </div>
        </div>
        <div className="">
          <div className="">
            <h2 className=" text-6xl font-extrabold text-orange-600">8</h2>
            <p className="text-xl font-bold">
              Music <br />
              <span className="text-orange-400 text-semibold">Classes</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
