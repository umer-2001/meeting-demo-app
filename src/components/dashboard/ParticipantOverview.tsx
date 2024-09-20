import RadialBar from "../chart/RadialBar";
import { Box } from "../ui/box";
import { Avatar, Flex, Select, Tag, Typography } from "antd";
const { Text, Title } = Typography;

const ParticipantOverview = () => {
  return (
    <Box className="bg-bg-100 text-white rounded-xl p-6 shadow-md">
      <Flex justify="space-between" align="center">
        <Title level={4} style={{ color: "#fff" }}>
          Participant Overview
        </Title>
        <Select
          defaultValue="lucy"
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
      </Flex>
      <Text className="text-[#fafafa] opacity-55 py-4 text-md max-w-[100px]">
        This chart visualizes the geographical distribution of participants.
      </Text>

      <RadialBar />
    </Box>
  );
};

export default ParticipantOverview;
