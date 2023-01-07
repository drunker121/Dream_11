import React from "react";

const Front = () => {
  return (
    <section className="bg-red-900">
      <div className="px-6 mx-auto h-screen pt-6">
        <div className="h-max flex justify-center mt-40">
          <div className="mt-40">
            <h1 className="text-5xl font-bold text-white">
              DREAM 11
            </h1>
            <div className="flex justify-center mt-12">
              <a
                href="/login"
                className=" text-white bg-green-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium px-3 py-1 text-center text-lg mr-3"
              >
                LOG IN
              </a>
              <a
                href="/register"
                className=" text-white bg-green-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium px-3 py-1 text-center text-lg ml-3"
              >
                SIGN UP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Front;
