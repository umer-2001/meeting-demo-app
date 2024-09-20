import { Button, Flex, Switch } from "antd";
import React from "react";
import { Box } from "./ui/box";
import { FaShareSquare } from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";

const Navbar = () => {
  const mdScreen = useMediaQuery("(max-width:1023px)");

  const onChange = (checked: boolean) => {
    console.log(`${checked}`);
  };
  return (
    <Flex align="center" justify="space-between" gap={6}>
      <h1 className="font-bold text-white text-lg">Meeting Title</h1>
      <Box>
        <Flex align="center" gap={12}>
          <Box className="hidden sm:block py-[3px] px-2 outline-[1px] border-zinc-600 rounded-sm bg-secondary-100">
            <p className="text-center text-white font-semibold">3</p>
          </Box>
          <Box className="hidden sm:block py-[3px] px-2 outline-[1px] border-zinc-600 rounded-sm bg-secondary-100">
            <p className="text-center text-white font-semibold">1</p>
          </Box>
          <span className="hidden sm:block font-bold">:</span>
          <Box className="hidden sm:block py-[3px] px-2 outline-[1px] border-zinc-600 rounded-sm bg-secondary-100">
            <p className="text-center text-white font-semibold">4</p>
          </Box>
          <Box className="hidden sm:block py-[3px] px-2 outline-[1px] border-zinc-600 rounded-sm bg-secondary-100">
            <p className="text-center text-white font-semibold">2</p>
          </Box>
          <Button
            className=" rounded-md text-white bg-secondary-100 border-[1px] border-zinc-600 hover:bg-primary-100"
            icon={<FaShareSquare />}
            color="#fff"
          >
            Share invite
          </Button>

          <Switch defaultChecked onChange={onChange} />
        </Flex>
        <p className="text-xs hidden sm:block">Meeting duration</p>
      </Box>
    </Flex>
  );
};

export default Navbar;
