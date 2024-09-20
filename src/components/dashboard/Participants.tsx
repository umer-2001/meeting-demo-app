import React from "react";
import GeneralTable from "../common/GeneralTable";
import { useNavigate } from "react-router-dom";
import { participantsData } from "../../data";
import { Avatar, Button, Flex, Image, Typography } from "antd";
import { ParticipantProps } from "../../../types";
import { Box } from "../ui/box";
const { Text, Title } = Typography;

const Participants = () => {
  const navigate = useNavigate();

  const participantCols = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_: any, { isOrganizer, user }: ParticipantProps) => (
        <Flex gap={10} align="center">
          <Avatar size={48} src={user.profilePic} />
          <Flex vertical>
            <Flex gap={10}>
              <Text className="text-white">{user.name}</Text>
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
            <Text className="text-blue-500 font-semibold">
              {isOrganizer && "Organizer"}
            </Text>
          </Flex>
        </Flex>
      ),
    },
    {
      title: "Job Title",
      dataIndex: "title",
      key: "title",
      render: (_: any, { title }: ParticipantProps) => (
        <Text className="text-white">{title}</Text>
      ),
    },
    {
      title: "Location",
      dataIndex: "country",
      key: "country",
      render: (_: any, { country }: ParticipantProps) => (
        <Flex gap={10} align="center">
          <Image
            className="rounded-full"
            width={40}
            preview={false}
            src={country.flag}
          />
          <Flex vertical>
            <Text className="text-white">{country.location}</Text>
            <Text className="text-white">{country.timeZone}</Text>
          </Flex>
        </Flex>
      ),
    },
    {
      title: "Local Time",
      dataIndex: "local",
      key: "local",
      render: (_: any, { country }: ParticipantProps) => (
        <Text className="text-white">{country.localTime}</Text>
      ),
    },

    {
      title: "Details",
      key: "action",
      render: (_: any, record: ParticipantProps) => (
        <Button
          //   onClick={() => navigate(`/dashboard/${record}`)}
          className=""
          type="primary"
          shape="round"
        >
          View Detail
        </Button>
      ),
    },
  ];
  const data = Array.from({ length: 6 }, (_, index) => ({
    ...participantsData,
  }));
  console.log("data.....", data);

  return (
    <Box>
      <Flex>
        <Title style={{ color: "#fff" }} level={3}>
          Participants ({data.length})
        </Title>
      </Flex>
      <GeneralTable columns={participantCols} data={data} loading={false} />
    </Box>
  );
};

export default Participants;
