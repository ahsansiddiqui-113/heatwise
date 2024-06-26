import React from 'react';

const Products = () => {
    return (
        <div className="flex flex-col flex-1 p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl">Products</h1>
            </div>
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search"
                    className="p-2 border border-gray-300 rounded w-1/2"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4">Create Project</button>
            </div>

            <div className="mb-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                <div className="mb-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                    <div className="w-full md:w-1/2">
                        <button className="text-xl mb-4">My Products</button>
                        <table className="min-w-full bg-white rounded shadow">
                        </table>
                    </div>
                </div>
            </div>
            <table className="min-w-full bg-white rounded shadow">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="py-2 px-4">Built</th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Artical Number</th>
                        <th className="py-2 px-4">Recit</th>
                        <th className="py-2 px-4">Update</th>
                        <th className="py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4 border-b">image</td>
                        <td className="py-2 px-4 border-b">Monobloc</td>
                        <td className="py-2 px-4 border-b">12345</td>
                        <td className="py-2 px-4 border-b">01-03-2023</td>
                        <td className="py-2 px-4 border-b">01-03-2026</td>
                        <td className="py-2 px-4 border-b">
                            <button className="text-gray-500">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
};

export default Products;
