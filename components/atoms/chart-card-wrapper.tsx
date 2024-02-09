import React from "react";

const ChartCardWrapper = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
}) => {
  return (
    <div className={`bg-white p-3 rounded-xl ${className}`}>
      <h1>{title}</h1>
      <div className="">{children}</div>
    </div>
  );
};

export default ChartCardWrapper;
