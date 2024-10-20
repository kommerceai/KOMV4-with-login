import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ProductManagement from './pages/ProductManagement';
import OrderTracking from './pages/OrderTracking';
import CreatorManagement from './pages/CreatorManagement';
import CampaignTracking from './pages/CampaignTracking';
import Settings from './pages/Settings';
import ClientManagement from './pages/ClientManagement';
import ClientDashboard from './pages/ClientDashboard';
import BudgetCalculator from './pages/BudgetCalculator';
import CampaignManagementAI from './pages/CampaignManagementAI';
import ManualDataInput from './components/ManualDataInput';
import Login from './pages/Login';
import Signup from './pages/Signup';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<ProductManagement />} />
              <Route path="/orders" element={<OrderTracking />} />
              <Route path="/creators" element={<CreatorManagement />} />
              <Route path="/campaigns" element={<CampaignTracking />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/clients" element={<ClientManagement />} />
              <Route path="/clients/:id" element={<ClientDashboard />} />
              <Route path="/clients/:id/budget-calculator" element={<BudgetCalculator />} />
              <Route path="/campaign-ai" element={<CampaignManagementAI />} />
              <Route path="/manual-data-input" element={<ManualDataInput />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;