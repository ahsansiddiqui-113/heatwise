import React, { useState } from 'react';

const General = () => {
  const [contacts, setContacts] = useState({
    phone: '123-456-7890',
    email: 'contact@example.com',
  });

  const [companyDetails, setCompanyDetails] = useState({
    name: 'Example Company',
    address: 'abcd',
    website: 'www.example.com',
  });

  return (
    <div className="flex flex-col lg:flex-row p-8 bg-white h-screen">
      {/* Left Column */}
      <div className="lg:w-1/2 lg:pr-4">
        <h1 className="text-3xl font-bold mb-8">General Settings</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="text"
              value={contacts.phone}
              onChange={(e) => setContacts({ ...contacts, phone: e.target.value })}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={contacts.email}
              onChange={(e) => setContacts({ ...contacts, email: e.target.value })}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 lg:pl-4">
        <h2 className="text-2xl font-semibold mb-4">Company Details</h2>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Company Name</label>
          <input
            type="text"
            value={companyDetails.name}
            onChange={(e) => setCompanyDetails({ ...companyDetails, name: e.target.value })}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Address</label>
          <input
            type="text"
            value={companyDetails.address}
            onChange={(e) => setCompanyDetails({ ...companyDetails, address: e.target.value })}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">Website</label>
          <input
            type="url"
            value={companyDetails.website}
            onChange={(e) => setCompanyDetails({ ...companyDetails, website: e.target.value })}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default General;
