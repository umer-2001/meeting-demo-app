import React from "react";
import { Box } from "../ui/box";
import { Avatar, Flex, Tag, Typography } from "antd";
import SemiGuage from "../chart/SemiGuage";
const { Text, Title } = Typography;

const AttendanceCard = () => {
  return (
    <Box className="bg-bg-100 text-white rounded-xl p-7 shadow-md  ">
      {/* Stats */}
      <Flex justify="space-between">
        {/* invited */}
        <Flex vertical align="center">
          <Text className="text-white text-lg font-semibold">10</Text>
          <Text className="text-white text-xs">Invited</Text>
        </Flex>
        {/* accepted */}
        <Flex vertical align="center">
          <Text className="text-white text-lg font-semibold ">6</Text>
          <Text className="text-white text-xs">Accepted</Text>
        </Flex>
        {/* tentative */}
        <Flex vertical align="center">
          <Text className="text-white text-lg font-semibold ">4</Text>
          <Text className="text-white text-xs">Tentative</Text>
        </Flex>
        {/* decline */}
        <Flex vertical align="center">
          <Text className="text-white text-lg font-semibold ">2</Text>
          <Text className="text-white text-xs">Decline</Text>
        </Flex>
      </Flex>

      <Box className="border-0 border-red-500 mt-4">
        <SemiGuage />
      </Box>
    </Box>
  );
};

export default AttendanceCard;
