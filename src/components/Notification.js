import React, { useState } from 'react';

const Notification = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [dailyNotifications, setDailyNotifications] = useState(false);
  const [notificationSoundEnabled, setNotificationSoundEnabled] = useState(true);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);
  const toggleDailyNotifications = () => setDailyNotifications((prev) => !prev);
  const toggleNotificationSound = () => setNotificationSoundEnabled((prev) => !prev);

  const handleSaveSettings = () => {
    alert('Settings Saved', 'Notification settings saved successfully.');
  };

  return (
    <div className="flex flex-col p-8 bg-white h-screen">
      <h1 className="text-3xl font-bold mb-8">Notification Settings</h1>
      
      <div className="flex justify-between items-center mb-4 border-b border-gray-300 py-4">
        <span className="text-xl">Enable Notifications</span>
        <input
          type="checkbox"
          className="toggle-checkbox"
          checked={notificationsEnabled}
          onChange={toggleNotifications}
        />
      </div>

      {notificationsEnabled && (
        <div className="flex justify-between items-center mb-4 border-b border-gray-300 py-4">
          <span className="text-xl">Daily Notifications</span>
          <input
            type="checkbox"
            className="toggle-checkbox"
            checked={dailyNotifications}
            onChange={toggleDailyNotifications}
          />
        </div>
      )}

      <div className="flex justify-between items-center mb-4 border-b border-gray-300 py-4">
        <span className="text-xl">Notification Sound</span>
        <input
          type="checkbox"
          className="toggle-checkbox"
          checked={notificationSoundEnabled}
          onChange={toggleNotificationSound}
        />
      </div>

      <button
        className="bg-blue-500 text-white px-6 py-3 rounded mt-8 self-center"
        onClick={handleSaveSettings}
      >
        Save Settings
      </button>
    </div>
  );
};

export default Notification;
