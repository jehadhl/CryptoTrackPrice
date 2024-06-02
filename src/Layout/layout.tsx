import React, { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import { FaDivide } from "react-icons/fa6";
import { useAppSelector } from "../store/hook";

const Layout = ({ children }: { children: ReactNode }) => {
  const { mode } = useAppSelector((state) => state.theme);
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
