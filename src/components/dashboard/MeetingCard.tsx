import React from "react";
import { Box } from "../ui/box";
import { Avatar, Flex, Tag, Typography } from "antd";
const { Text, Title } = Typography;
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { PiInstagramLogoFill } from "react-icons/pi";
import avatar from "../../assets/Avatar.png";

// import { TiSocialLinkedinCircular } from "react-icons/ti";
const MeetingCard = () => {
  return (
    <Box className="bg-primary-100 text-white rounded-xl p-6 shadow-md">
      <Flex align="start" justify="space-between" wrap>
        <Flex gap={10} justify="center" align="start" wrap>
          <Avatar
            size={64}
            src={avatar}
            className="inline-flex items-start justify-center p-0 m-0"
          />
          <Flex vertical>
            <Text className="text-white font-semibold text-lg">
              Rafael Dominguez
            </Text>
            <Text className="text-white ">Global division officer</Text>
          </Flex>

          <Flex gap={5}>
            <Text className="size-6 text-white bg-[#526484] rounded-full inline-flex items-center justify-center">
              1
            </Text>
            <Text className="size-6 text-white bg-[#192F5D] rounded-full inline-flex items-center justify-center">
              2
            </Text>
            <Text className="size-6 text-white bg-[#292929] rounded-full inline-flex items-center justify-center">
              3
            </Text>
          </Flex>
        </Flex>

        <Flex vertical>
          <Text className="text-white text-md font-semibold">Date</Text>
          <Text className="text-white text-md">Thursday, 15 August</Text>
        </Flex>
      </Flex>
      <Flex justify="space-between" align="start">
        <div></div>
        <Flex vertical>
          <Text className="text-white text-md font-semibold">Meeting Time</Text>
          <Text className="text-white text-md">10:10 AM - 10:55 AM</Text>
        </Flex>
      </Flex>

      <Text className="text-xl font-semibold text-white">Meeting title</Text>
      <Flex justify="space-between">
        <span>
          <Tag
            color={"green"}
            className="px-4 py-1 font-semibold rounded-full text-[14px] cursor-pointer"
          >
            Internal meeting
          </Tag>
          | 45 minutes
        </span>

        <Flex gap={5} align="center">
          <PiInstagramLogoFill className="cursor-pointer" size={26} />
          <SiFacebook className="cursor-pointer" size={24} />
          <SiLinkedin className="cursor-pointer" size={24} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default MeetingCard;
