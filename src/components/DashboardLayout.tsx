import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Flex } from "antd";
import Aside from "./Aside";
import Navbar from "./Navbar";
import { Box } from "./ui/box";

const DashboardLayout = () => {
  return (
    <main className="overflow-hidden">
      <Flex align="center" className="h-full">
        <Aside />
        <Flex vertical className="pt-4 h-screen flex-1 px-2">
          <Box className="w-full h-full overflow-x-hidden overflow-y-hidden ">
            <Box className="px-4 hidden md:block">
              <Navbar />
            </Box>
            <Box
              style={{ height: "calc(100vh - 110px)" }}
              className={`overflow-x-hidden bg-secondary-100     border-0 border-red-400 mx-4 my-4 rounded-lg p-6`}
            >
              <Outlet />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </main>
  );
};

export default DashboardLayout;
