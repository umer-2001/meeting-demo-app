import React, { useState } from "react";
import GeneralTable from "../common/GeneralTable";
import { useNavigate } from "react-router-dom";
import { participantsData } from "../../data";
import { Avatar, Button, Flex, Image, Select, Typography } from "antd";
import { ParticipantProps } from "../../../types";
import { Box } from "../ui/box";
const { Text, Title } = Typography;

const Participants = () => {
  const navigate = useNavigate();
  const [isTable, setTable] = useState<boolean>(true);

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
            <Text className="text-zinc-400 text-xs">{country.timeZone}</Text>
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
          className="bg-primary-100 !outline-none border-none"
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
      <Flex justify="space-between">
        <Title style={{ color: "#fff" }} level={3}>
          Participants ({data.length})
        </Title>

        <Flex gap={10}>
          <Select
            defaultValue="Filters"
            style={{
              backgroundColor: "#292929",
              width: 150,
            }}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
              {
                value: "disabled",
                label: "Disabled",
                disabled: true,
              },
            ]}
          />
          <Button
            onClick={() => setTable(true)}
            className={`${
              isTable ? "bg-primary-100" : "bg-secondary-100"
            }  rounded-md text-white  border-[1px] border-zinc-600 hover:bg-primary-100 transition-all ease-in-out duration-300`}
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 4C3.11929 4 2 5.11929 2 6.5V13.5C2 14.8807 3.11929 16 4.5 16H15.5C16.8807 16 18 14.8807 18 13.5V6.5C18 5.11929 16.8807 4 15.5 4H4.5ZM3 6.5C3 5.67157 3.67157 5 4.5 5H15.5C16.3284 5 17 5.67157 17 6.5V13.5C17 14.3284 16.3284 15 15.5 15H4.5C3.67157 15 3 14.3284 3 13.5V6.5ZM4.5 6C4.22386 6 4 6.22386 4 6.5C4 6.77614 4.22386 7 4.5 7H9.5C9.77614 7 10 6.77614 10 6.5C10 6.22386 9.77614 6 9.5 6H4.5ZM4.5 8C4.22386 8 4 8.22386 4 8.5C4 8.77614 4.22386 9 4.5 9H12.5C12.7761 9 13 8.77614 13 8.5C13 8.22386 12.7761 8 12.5 8H4.5ZM5 11C4.44772 11 4 11.4477 4 12V13C4 13.5523 4.44772 14 5 14H9C9.55228 14 10 13.5523 10 13V12C10 11.4477 9.55228 11 9 11H5Z"
                  fill="white"
                />
              </svg>
            }
            color="#fff"
          >
            Table
          </Button>
          <Button
            onClick={() => setTable(false)}
            className={`${
              !isTable ? "bg-primary-100" : "bg-secondary-100"
            } rounded-md text-white bg-secondary-100 border-[1px] border-zinc-600 transition-all ease-in-out duration-300 hover:bg-primary-100`}
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 4C3.11929 4 2 5.11929 2 6.5V13.5C2 14.8807 3.11929 16 4.5 16H15.5C16.8807 16 18 14.8807 18 13.5V6.5C18 5.11929 16.8807 4 15.5 4H4.5ZM3 6.5C3 5.67157 3.67157 5 4.5 5H15.5C16.3284 5 17 5.67157 17 6.5V13.5C17 14.3284 16.3284 15 15.5 15H4.5C3.67157 15 3 14.3284 3 13.5V6.5ZM4.5 6C4.22386 6 4 6.22386 4 6.5C4 6.77614 4.22386 7 4.5 7H9.5C9.77614 7 10 6.77614 10 6.5C10 6.22386 9.77614 6 9.5 6H4.5ZM4.5 8C4.22386 8 4 8.22386 4 8.5C4 8.77614 4.22386 9 4.5 9H12.5C12.7761 9 13 8.77614 13 8.5C13 8.22386 12.7761 8 12.5 8H4.5ZM5 11C4.44772 11 4 11.4477 4 12V13C4 13.5523 4.44772 14 5 14H9C9.55228 14 10 13.5523 10 13V12C10 11.4477 9.55228 11 9 11H5Z"
                  fill="white"
                />
              </svg>
            }
            color="#fff"
          >
            Cards
          </Button>
        </Flex>
      </Flex>

      <GeneralTable columns={participantCols} data={data} loading={false} />
    </Box>
  );
};

export default Participants;
