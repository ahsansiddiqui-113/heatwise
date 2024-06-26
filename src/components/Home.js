import React from 'react';

const Home = () => {
  return (
    <div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl">Welcome back, Ahsan Siddiqui</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <i className="fa fa-question-circle mr-2"></i> Help
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Ahsan Siddiqui</button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl mb-4">Your projects</h2>
          <div className="flex justify-between mb-4">
            <span>Total number</span>
            <span>25 25</span>
          </div>
          <div className="h-64">
            <canvas id="projectsChart"></canvas>
          </div>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl mb-4">Open projects</h2>
          <div className="flex justify-between mb-4">
            <span>Total number</span>
            <span>11</span>
          </div>
          <ul className="list-none p-0">
            <li className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded">
              <span className="flex items-center">
                <i className="fa fa-folder mr-2"></i> SF electric...
              </span>
              <span>06.05.2024</span>
            </li>
            <li className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded">
              <span className="flex items-center">
                <i className="fa fa-folder mr-2"></i> SF electric...
              </span>
              <span>25.04.2024</span>
            </li>
            <li className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded">
              <span className="flex items-center">
                <i className="fa fa-folder mr-2"></i> Test prosk...
              </span>
              <span>23.04.2024</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl mb-4">Installations</h2>
          <div className="flex justify-between mb-4">
            <span>Installations this month</span>
            <span>1</span>
          </div>
          <ul className="list-none p-0">
            <li className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded">
              <span className="flex items-center">
                <i className="fa fa-wrench mr-2"></i> Schönaic...
              </span>
              <span>30.06.2024</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded shadow">
        <h2 className="text-xl mb-4">Service</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          <i className="fa fa-arrow-up mr-2"></i> Give feedback
        </button>
      </div>
      <button className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full">
        <i className="fa fa-comment"></i>
      </button>
    </div>
  );
};

export default Home;
