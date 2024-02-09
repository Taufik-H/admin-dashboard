"use client";
import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Legend,
} from "chart.js/auto";
import { Line } from "react-chartjs-2";
import ChartCardWrapper from "../atoms/chart-card-wrapper";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Legend,
);
const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        legend: {
          display: false,
        },
        label: "viewes",
        data: [80, 66, 90.43, 45, 55, 83],
        borderColor: "rgba(0, 0, 255, 1)",
        pointBorderColor: "white",
        pointBackgroundColor: "rgba(0, 0, 255, 1)",
        pointBorderWidth: 2,
        tension: 0.5,
        fill: true,
        tooltip: true,
        backgroundColor: (context: any) => {
          const bgColor = [
            "rgba(0, 0, 255, 1)",
            "rgba(0, 0, 255, 0.5)",
            "rgba(0, 0, 255, 0.1)",
            "rgba(0, 0, 255, 0)",
          ];
          if (!context.chart.chartArea) {
            return;
          }
          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart;
          const gradient = ctx.createLinearGradient(0, top, 0, bottom);
          const colorTranches = 1 / (bgColor.length - 1);
          for (let i = 0; i < bgColor.length; i++) {
            gradient.addColorStop(i * colorTranches, bgColor[i]);
          }

          return gradient;
        },
      },
    ],
  };

  const options = {
    Plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return context.dataset.label + ": " + context.parsed.y + "K";
          },
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (value: any) => value + "K",
        },
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div>
      <ChartCardWrapper title="Statistics">
        <Line data={data} options={options}></Line>
      </ChartCardWrapper>
    </div>
  );
};

export default LineChart;
