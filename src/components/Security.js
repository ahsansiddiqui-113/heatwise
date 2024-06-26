import React, { useState } from 'react';

const Security = () => {
  const [currentEmail, setCurrentEmail] = useState('user@example.com'); 
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = () => {
    alert('Email address updated successfully.');
  };

  return (
    <div className="flex flex-col p-8 bg-white h-screen">
      <h1 className="text-3xl font-bold mb-8">Security</h1>

      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Current Email Address</label>
        <input
          type="text"
          value={currentEmail}
          disabled
          className="block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">New Email Address</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Confirm by Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <button
        className="bg-blue-500 text-white px-6 py-3 rounded mt-4 self-center"
        onClick={handleEmailChange}
      >
        Adjust Email Address
      </button>
    </div>
  );
};

export default Security;
