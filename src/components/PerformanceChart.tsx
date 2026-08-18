"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { performanceData } from "@/data/fund-metrics";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload) return null;

  return (
    <div className="glass-strong rounded-lg px-4 py-3 shadow-xl">
      <p className="text-xs text-text-muted mb-2">{label}</p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2 text-sm">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-text-secondary">{entry.name}:</span>
          <span className="font-semibold text-text-primary">
            {entry.value.toFixed(1)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function PerformanceChart() {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={performanceData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="maroonGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#500000" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#500000" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="spxGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#64748B" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#64748B" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.05)"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fill: "#64748B", fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.08)" }}
            interval={3}
          />
          <YAxis
            tick={{ fill: "#64748B", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            domain={["dataMin - 5", "dataMax + 5"]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="circle"
            formatter={(value: string) => (
              <span className="text-xs text-text-secondary">{value}</span>
            )}
          />
          <Area
            type="monotone"
            dataKey="maroonFund"
            name="Maroon Fund"
            stroke="#500000"
            strokeWidth={2.5}
            fill="url(#maroonGradient)"
            dot={false}
            activeDot={{
              r: 5,
              fill: "#500000",
              stroke: "#D4A843",
              strokeWidth: 2,
            }}
          />
          <Area
            type="monotone"
            dataKey="spx"
            name="S&P 500"
            stroke="#64748B"
            strokeWidth={1.5}
            fill="url(#spxGradient)"
            dot={false}
            strokeDasharray="5 5"
            activeDot={{ r: 4, fill: "#64748B", stroke: "#fff", strokeWidth: 1 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
