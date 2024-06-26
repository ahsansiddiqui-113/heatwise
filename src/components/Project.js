import React from 'react';

const Projects = () => {
    return (
        <div className="flex flex-col flex-1 p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl">Projects</h1>
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
                <div className="w-full md:w-1/2">
                    <button className="text-xl mb-4">My Projects</button>
                    <table className="min-w-full bg-white rounded shadow mb-4">
                    </table>
                </div>

                <div className="w-full md:w-1/2">
                    <button className="text-xl mb-4">Projects from Operations</button>
                    <table className="min-w-full bg-white rounded shadow">
                    </table>
                </div>
            </div>
            <hr className="my-4" />

            <div className="flex space-x-4 mb-8">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">All</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Archived</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Completed</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">In Progress</button>
            </div>

            <table className="min-w-full bg-white rounded shadow">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="py-2 px-4">Project Name</th>
                        <th className="py-2 px-4">Under</th>
                        <th className="py-2 px-4">Project Status</th>
                        <th className="py-2 px-4">Date</th>
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
                    <tr>
                        <td className="py-2 px-4 border-b">Project Gamma</td>
                        <td className="py-2 px-4 border-b">Ahsan</td>
                        <td className="py-2 px-4 border-b">Completed</td>
                        <td className="py-2 px-4 border-b">01-03-2023</td>
                        <td className="py-2 px-4 border-b">
                            <button className="text-gray-500">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">Project Gamma</td>
                        <td className="py-2 px-4 border-b">Ahsan</td>
                        <td className="py-2 px-4 border-b">In Progress</td>
                        <td className="py-2 px-4 border-b">01-03-2023</td>
                        <td className="py-2 px-4 border-b">
                            <button className="text-gray-500">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">Project Gamma</td>
                        <td className="py-2 px-4 border-b">Ahsan</td>
                        <td className="py-2 px-4 border-b">Completed</td>
                        <td className="py-2 px-4 border-b">01-03-2023</td>
                        <td className="py-2 px-4 border-b">
                            <button className="text-gray-500">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                        </td>
                    </tr>
                    {/* Add more project entries here */}
                </tbody>
            </table>
        </div>
    );
};

export default Projects;
