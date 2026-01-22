import React from "react";

interface ServiceTitleProps {
  title: string;
  children: React.ReactNode;
}
const ServiceTitle = ({ title, children }: ServiceTitleProps) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold text-indigo-900 leading-tight">
      {title}
    </h2>
    <p className="text-gray-400 mt-2 max-w-md mx-auto text-sm">{children}</p>
  </div>
);

export default ServiceTitle;
