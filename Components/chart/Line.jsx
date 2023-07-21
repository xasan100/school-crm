import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Yanvar",
    kirim: 4000,
    chiqim: 2400,
    amt: 2400,
  },
  {
    name: "Fevral",
    kirim: 3000,
    chiqim: 1398,
    amt: 2210,
  },
  {
    name: "Mart",
    kirim: 2000,
    chiqim: 9800,
    amt: 2290,
  },
  {
    name: "Aprel",
    kirim: 2780,
    chiqim: 3908,
    amt: 2000,
  },
  {
    name: "Iyun",
    kirim: 1890,
    chiqim: 4800,
    amt: 2181,
  },
  {
    name: "Iyul",
    kirim: 2390,
    chiqim: 3800,
    amt: 2500,
  },
  {
    name: "Avgust",
    kirim: 3490,
    chiqim: 4300,
    amt: 2100,
  },
  {
    name: "Sentyabr",
    kirim: 1490,
    chiqim: 4785,
    amt: 2100,
  },
  {
    name: "Oktyabr",
    kirim: 5490,
    chiqim: 3953,
    amt: 2100,
  },
  {
    name: "Noyabr",
    kirim: 2190,
    chiqim: 1800,
    amt: 2100,
  },
  {
    name: "Dekabr",
    kirim: 4320,
    chiqim: 2755,
    amt: 2100,
  },
];

export const LineCharts = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid fill="#000" fillOpacity={0.6} strokeOpacity={0.1} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="kirim"
          stroke="green"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="chiqim" stroke="red" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
