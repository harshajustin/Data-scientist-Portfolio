import React from 'react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isEven: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  period,
  description,
  isEven
}) => {
  return (
    <div className={`flex items-center ${
      isEven ? 'flex-row-reverse' : 'flex-row'
    }`}>
      <div className="w-1/2 pr-8 pl-8">
        <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-100 ${
          isEven ? 'text-left' : 'text-right'
        }`}>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-blue-600 font-medium">{company}</p>
          <p className="text-gray-500 text-sm mb-2">{period}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow transition-transform duration-300 hover:scale-125" />
      <div className="w-1/2" />
    </div>
  );
};

export default TimelineItem;