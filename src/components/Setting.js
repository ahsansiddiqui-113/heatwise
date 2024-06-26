import React from 'react';

const Settings = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Account Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Account</h2>
          <p className="mb-4">Personal settings.</p>
          <ul className="space-y-2">
            <li><a href="/profile" className="text-blue-500">Profile</a></li>
            <li><a href="/notification" className="text-blue-500">Notifications</a></li>
            <li><a href="/security" className="text-blue-500">Security</a></li>
          </ul>
        </div>

        {/* Companies Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Companies</h2>
          <p className="mb-4">Settings for the company.</p>
          <ul className="space-y-2">
            <li><a href="/general" className="text-blue-500">General</a></li>
            <li><a href="/rights" className="text-blue-500">Rights</a></li>
            <li><a href="/integration" className="text-blue-500">Integrations</a></li>
            <li><a href="/subscription" className="text-blue-500">Subscription</a></li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p className="mb-4">Settings for products.</p>
          <ul className="space-y-2">
            <li><a href="/heat" className="text-blue-500">Heat pump check</a></li>
            <li><a href="/tech" className="text-blue-500">Techn. Feasibility analysis</a></li>
            <li><a href="/space" className="text-blue-500">Spatial space building data</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
