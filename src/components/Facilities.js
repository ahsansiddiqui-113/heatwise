import React, { useState } from 'react';

const Facilities = () => {
  const [isHeatPumpExpanded, setIsHeatPumpExpanded] = useState(false);
  const [isCustomerPortalExpanded, setIsCustomerPortalExpanded] = useState(false);

  const handleToggleHeatPump = () => {
    setIsHeatPumpExpanded(!isHeatPumpExpanded);
  };

  const handleToggleCustomerPortal = () => {
    setIsCustomerPortalExpanded(!isCustomerPortalExpanded);
  };

  return (
    <div className="flex flex-col flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl">Facilities</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Live Chat</button>
      </div>
      
      <div className="mb-8">
        <p className="text-xl mb-4">Set up your heat pump check</p>
        <div className="bg-white rounded shadow p-4 cursor-pointer" onClick={handleToggleHeatPump}>
          <div className="flex justify-between items-center">
            <h2 className="text-lg">Add your heat pump check to your website</h2>
            <button className="text-blue-500">{isHeatPumpExpanded ? 'Hide' : 'Show'}</button>
          </div>
          {isHeatPumpExpanded && (
            <div className="mt-4">
              <p>In the following step, we would like to show you how to integrate the heat pump check on your website. We have a step-by-step guide for you. Alternatively, we will set up the heat pump check together with you in a video conference.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Start</button>
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-8">
        <p className="text-xl mb-4">Set up your customer portal</p>
        <div className="bg-white rounded shadow p-4 cursor-pointer" onClick={handleToggleCustomerPortal}>
          <div className="flex justify-between items-center">
            <h2 className="text-lg">Set up your customer portal</h2>
            <button className="text-blue-500">{isCustomerPortalExpanded ? 'Hide' : 'Show'}</button>
          </div>
          {isCustomerPortalExpanded && (
            <div className="mt-4">
              <p>Set up your customer portal individually for your business. In a few minutes you can share projects with your customer and receive data sorted through your customer portal.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Start</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
