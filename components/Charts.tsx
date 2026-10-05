"use client";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";

const trend = [
  { t: "Mon", v: 42 }, { t: "Tue", v: 51 }, { t: "Wed", v: 48 }, { t: "Thu", v: 62 }, { t: "Fri", v: 74 }, { t: "Sat", v: 68 }, { t: "Sun", v: 55 },
];
const mix = [
  { name: "A", v: 36 }, { name: "B", v: 28 }, { name: "C", v: 22 }, { name: "D", v: 14 },
];
const COLORS = ["#39ff14","#00f0ff","#0b1220","#f472b6"];

export function TrendArea() {
  return (
    <div className="chart-box">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={trend}>
          <CartesianGrid stroke="var(--grid)" strokeDasharray="3 3" />
          <XAxis dataKey="t" stroke="var(--muted)" fontSize={11} />
          <YAxis stroke="var(--muted)" fontSize={11} />
          <Tooltip contentStyle={{ background: "var(--panel)", border: "1px solid var(--line)" }} />
          <Area type="monotone" dataKey="v" stroke="#39ff14" fill="#39ff1444" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
export function MixBars() {
  return (
    <div className="chart-box">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mix}>
          <CartesianGrid stroke="var(--grid)" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="var(--muted)" fontSize={11} />
          <YAxis stroke="var(--muted)" fontSize={11} />
          <Tooltip contentStyle={{ background: "var(--panel)", border: "1px solid var(--line)" }} />
          <Bar dataKey="v" fill="#00f0ff" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export function MixPie() {
  return (
    <div className="chart-box">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={mix} dataKey="v" nameKey="name" innerRadius={48} outerRadius={78} paddingAngle={2}>
            {mix.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
          <Tooltip contentStyle={{ background: "var(--panel)", border: "1px solid var(--line)" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
