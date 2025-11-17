'use client';

import { Menu, X } from 'lucide-react';

export default function Header({ sidebarOpen, toggleSidebar }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">UI Component Library</h1>
          <p className="text-gray-600">Copy-and-paste components built with Tailwind CSS</p>
        </div>

        <button
          onClick={toggleSidebar}
          className="p-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  );
}