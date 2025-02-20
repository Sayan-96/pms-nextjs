"use client"

import { login } from '@/services/authServices';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    }
    try {
      login(userData);
      alert('Login successful');
    }
    catch {
      alert('Invalid credentials'); 
    }


  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold">Login</h2>
      <form onSubmit={handleLogin} className="mt-4">
        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
