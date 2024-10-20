import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Package, Users, BarChart2, Home, Settings, Briefcase, Brain, Database } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 flex items-center">
              <ShoppingBag className="mr-2" />
              KommerceALPHA
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink to="/" icon={<Home size={20} />} text="Dashboard" />
            <NavLink to="/products" icon={<Package size={20} />} text="Products" />
            <NavLink to="/orders" icon={<ShoppingBag size={20} />} text="Orders" />
            <NavLink to="/creators" icon={<Users size={20} />} text="Creators" />
            <NavLink to="/clients" icon={<Briefcase size={20} />} text="Clients" />
            <NavLink to="/campaign-ai" icon={<Brain size={20} />} text="Campaign AI" />
            <NavLink to="/manual-data-input" icon={<Database size={20} />} text="Manual Data" />
            <NavLink to="/settings" icon={<Settings size={20} />} text="Settings" />
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link to="/login" className="text-gray-600 hover:text-gray-800">Sign In</Link>
              <Link to="/signup" className="text-gray-600 hover:text-gray-800">Sign Up</Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center text-gray-600 hover:text-gray-800">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

export default Navbar;