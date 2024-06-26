import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Customers from './components/customer';
import './tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Projects from './components/Project';
import Products from './components/Products';
import TeamMembers from './components/TeamMembers';
import Facilities from './components/Facilities';
import Settings from './components/Setting';
import Profile from './components/Profile';
import Notification from './components/Notification';
import Security from './components/Security';
import General from './components/General';
import Rights from './components/Rights';
import Integration from './components/Integration';
import Subscription from './components/Subscription';
import HeatPumpCheck from './components/Heatpumpcheck';
import TechnFeasibilityanalysis from './components/TechnFeasibilityanalysis';
import Spatiall from './components/Spatiall';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Dashboard />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/TeamMembers" element={<TeamMembers/>}/>
            <Route path="/facilities" element={<Facilities/>}/>
            <Route path="/setting" element={<Settings/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/notification" element={<Notification/>}/>
            <Route path="/security" element={<Security/>}/>
            <Route path="/general" element={<General/>}/>
            <Route path="/rights" element={<Rights/>}/>
            <Route path="/integration" element={<Integration/>}/>
            <Route path="/subscription" element={<Subscription/>}/>
            <Route path="/heat" element={<HeatPumpCheck/>}/>
            <Route path="/tech" element={<TechnFeasibilityanalysis/>}/>
            <Route path="/space" element={<Spatiall/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
