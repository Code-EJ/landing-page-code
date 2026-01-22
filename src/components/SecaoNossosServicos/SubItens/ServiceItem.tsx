import React from "react";

interface ServiceItemProps {
  title: string;
  children: React.ReactNode;
}

const ServiceItem = ({ title, children }: ServiceItemProps) => (
  <div className="mb-8 max-w-xs text-center">
    <h3
      className="text-indigo-900 font-semibold mb-1"
      style={{ wordBreak: "break-word" }}
    >
      {title}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed">{children}</p>
  </div>
);

export default ServiceItem;
