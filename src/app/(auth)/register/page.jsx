"use client"

import { register } from '@/services/authServices';
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    }
    try {
      register(userData);

    }
    catch {
      alert('Invalid credentials');
    }
    
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold">Register</h2>
      <form onSubmit={handleRegister} className="mt-4">
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
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
