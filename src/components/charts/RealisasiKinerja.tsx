"use client";

import {
  LineChart,
  Line,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "Trib-1",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Trib-2",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Trib-3",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Trib-4",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function RealisasiKinerja() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}
