"use client";
import React from "react";
import { Bar } from "react-chartjs-2";

import { Chart as ChartJs, BarController } from "chart.js";
import ChartCardWrapper from "../atoms/chart-card-wrapper";
ChartJs.register(BarController);
const BlockChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        legend: {
          display: false,
        },
        label: "Profits",
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
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
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
    <ChartCardWrapper className="h-fit" title="Profits">
      <h1 className="text-xl font-semibold">$45,2k</h1>
      <Bar data={data} options={options} />
    </ChartCardWrapper>
  );
};

export default BlockChart;
