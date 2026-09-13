import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';

function MainLayout() {
  const { user, logout } = useAuth();

  if (!user) return <Login />;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow border border-slate-200 text-center max-w-sm w-full">
        <h2 className="text-xl font-bold mb-2 text-slate-800">مرحباً بك في النظام</h2>
        <p className="text-slate-600 text-sm mb-4">{user.email}</p>
        <button 
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm w-full transition"
        >
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}
