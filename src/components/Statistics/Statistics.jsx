import React from "react";
import "./Statistics.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Statistics = () => {
  const assignmentData = [
    { id: 1, assignmentNumber: "Assignment-1", marks: 55 },
    { id: 2, assignmentNumber: "Assignment-2", marks: 58 },
    { id: 3, assignmentNumber: "Assignment-3", marks: 60 },
    { id: 4, assignmentNumber: "Assignment-4", marks: 60 },
    { id: 5, assignmentNumber: "Assignment-5", marks: 57 },
    { id: 6, assignmentNumber: "Assignment-6", marks: 56 },
    { id: 7, assignmentNumber: "Assignment-7", marks: 60 },
    { id: 7, assignmentNumber: "Assignment-8", marks: 60 },
  ];

  return (
    <div style={{ marginTop: "20px", marginRight: "50px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart width={1200} height={300} data={assignmentData}>
          <Area dataKey="marks" stroke="#8884d8"></Area>
          <XAxis dataKey="assignmentNumber" />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
