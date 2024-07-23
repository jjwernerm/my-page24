import { useState } from 'react';

import { tabsData } from '../data/DataTabs.jsx';

function Tab({ isActive, onClick, children }) {
  const activeClass = isActive
    ? 'text-cyan-600 border-cyan-600'
    : 'text-white border-transparent hover:text-gray-400 hover:border-gray-400';

  return (
    <button
      onClick={onClick}
      className={`w-full py-2 px-1 sm:py-4 text-center border-b-2 font-medium text-sm sm:text-base md:text-lg ${activeClass}`}
    >
      {children}
    </button>
  );
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (

    <div className="min-h-96 w-full bg-gray-800 rounded-lg p-6 shadow-md shadow-gray-700">
      <div className="flex flex-wrap md:flex-nowrap border-x border-t rounded-t-lg border-white">
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </Tab>
        ))}
      </div>
      <div className="p-4 text-white">
        {tabsData[activeTab].content}
      </div>
    </div>

  );
};
