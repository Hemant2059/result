import FormComponent from "@/components/form-data";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-sky-500">
      <div className="">
        <FormComponent />
        <h1 className="text-lg font-bold absolute right-5 top-5">
          By Bishal Pathak &#128420;
        </h1>
      </div>
    </div>
  );
};

export default Home;
