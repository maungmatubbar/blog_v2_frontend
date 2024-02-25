import { Card, Col, Row, Statistic } from "antd";
import React from "react";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";

const Dashboard = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <Card bordered={false} className="bg-slate-100">
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<IoArrowUpOutline />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} className="bg-slate-100">
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<IoArrowDownOutline />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} className="bg-slate-100">
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<IoArrowUpOutline />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} className="bg-slate-100">
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<IoArrowDownOutline />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
