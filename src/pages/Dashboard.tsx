import React from "react";
import { Box } from "../components/ui/box";
import { Col, Row } from "antd";
import MeetingCard from "../components/dashboard/MeetingCard";
import AttendanceCard from "../components/dashboard/AttendanceCard";
import WeatherCard from "../components/dashboard/WeatherCard";
import Participants from "../components/dashboard/Participants";
import GoogleMap from "../components/dashboard/GoogleMap";
import ParticipantOverview from "../components/dashboard/ParticipantOverview";

const Dashboard = () => {
  return (
    <Box className="w-full">
      {/* 1st section */}
      <Row className="" gutter={[16, 16]}>
        <Col xl={12} md={24} sm={24}>
          <MeetingCard />
        </Col>
        <Col xl={6} md={12} sm={24} xs={24}>
          <AttendanceCard />
        </Col>
        <Col xl={6} md={12} sm={24} xs={24}>
          <WeatherCard />
        </Col>
      </Row>

      <Row className="my-6" gutter={[16, 16]}>
        <Col xl={12} md={24} sm={24} xs={24}>
          <GoogleMap />
        </Col>
        <Col xl={12} md={24} sm={24} xs={24}>
          <ParticipantOverview />
        </Col>
      </Row>

      <Row className="p-6 my-4 rounded-xl bg-bg-100">
        <Col span={24}>
          <Participants />
        </Col>
      </Row>
    </Box>
  );
};

export default Dashboard;
