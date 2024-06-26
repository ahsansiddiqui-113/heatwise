import React from 'react';

const Integration = () => {
    return (
        <div className="flex flex-col flex-1 p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl">Integration</h1>
            </div>

            <div className="mb-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-1/2">
                    <button className="text-xl mb-4">Apps</button>
                    <table className="min-w-full bg-white rounded shadow mb-4">
                    </table>
                </div>

                <div className="w-full md:w-1/2">
                    <button className="text-xl mb-4">API</button>
                    <table className="min-w-full bg-white rounded shadow">
                    </table>
                </div>

                <div className="w-full md:w-1/2">
                    <button className="text-xl mb-4">Webhooks</button>
                    <table className="min-w-full bg-white rounded shadow">
                        
                    </table>
                </div>
            </div>
            <hr className="my-4" />

            <table className="min-w-full bg-white rounded shadow">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Key</th>
                        <th className="py-2 px-4">Date</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4 border-b">Project Gamma</td>
                        <td className="py-2 px-4 border-b">Ahsan</td>
                        <td className="py-2 px-4 border-b">Archived</td>
                        <td className="py-2 px-4 border-b">01-03-2023</td>
                        <td className="py-2 px-4 border-b">
                            <button className="text-gray-500">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    );
};

export default Integration;
