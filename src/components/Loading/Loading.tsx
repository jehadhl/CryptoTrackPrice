import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <PuffLoader color="#36d7b7" size={120} />
    </div>
  );
};

export default Loading;
