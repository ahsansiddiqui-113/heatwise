import React from 'react';

const Customers = () => {
  return (
    <div className="flex flex-col flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl">Customers</h1>
      </div>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded w-1/2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4">Create Customer</button>
      </div>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Projects</th>
            <th className="py-2 px-4">Customer Number</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example customer entry */}
          <tr>
            <td className="py-2 px-4 border-b">John Doe</td>
            <td className="py-2 px-4 border-b">john.doe@example.com</td>
            <td className="py-2 px-4 border-b">5</td>
            <td className="py-2 px-4 border-b">12345</td>
            <td className="py-2 px-4 border-b">01-01-2023</td>
            <td className="py-2 px-4 border-b">
              <button className="text-gray-500">
                <i className="fa fa-ellipsis-h"></i>
              </button>
            </td>
          </tr>
          {/* Add more customer entries here */}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
