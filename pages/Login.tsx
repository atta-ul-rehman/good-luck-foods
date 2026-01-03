import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../utils/api';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const data = await authAPI.login({ email, password });
            await login(data.token);
            navigate('/');
        } catch (err: any) {
            console.error('Login error:', err);
            setError(err.msg || 'Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section with Abstract Shapes */}
            <div className="relative bg-slate-900 py-16 text-center overflow-hidden">
                {/* Background Shapes */}
                <div className="absolute inset-0 opacity-10">
                    {/* Large Green Circle (Top Left) */}
                    {/* <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2600"
                        alt="Background"
                        className="w-full h-full object-cover"
                    /> */}
                    <svg className="absolute top-0 left-0 w-96 h-96 text-[#00C853]" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                    {/* Pink Square (Bottom Right) */}
                    <svg className="absolute bottom-0 right-0 w-80 h-80 text-[#FF3B6D]" viewBox="0 0 100 100" fill="currentColor">
                        <rect x="0" y="0" width="100" height="100" transform="rotate(45 50 50)" />
                    </svg>
                    {/* Blue Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Welcome Back</h1>
                    <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">Sign in to your wholesale portal</p>
                </div>
            </div>

            {/* Login Form with Decorative Background */}
            <div className="flex items-center justify-center bg-[#F9FAFB] px-4 py-10 relative">
                {/* Floating Shapes Behind Form */}
                <div className="absolute inset-0 pointer-events-none">
                    <svg className="absolute top-1/4 left-1/4 w-40 h-40 text-[#00C853]/5" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 0 L75 50 L50 100 L25 50 Z" />
                    </svg>
                    <svg className="absolute bottom-1/4 right-1/4 w-32 h-32 text-[#FF3B6D]/5" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                </div>

                {/* Login Card */}
                <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-[#E5E7EB] p-8 md:p-10 z-10 -mt-20">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-[#0A1428] mb-2">Access Your Account</h2>
                        <p className="text-[#6B7280] text-sm font-medium">Secure login for partners</p>
                    </div>

                    {error && (
                        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#374151] uppercase tracking-wider" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl focus:ring-4 focus:ring-[#FF3B6D]/20 focus:border-[#FF3B6D] transition-all outline-none font-medium"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-bold text-[#374151] uppercase tracking-wider" htmlFor="password">Password</label>
                                <Link to="/forgot-password" className="text-xs font-bold text-[#FF3B6D] hover:underline">Forgot password?</Link>
                            </div>
                            <input
                                id="password"
                                type="password"
                                required
                                className="w-full px-4 py-3 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl focus:ring-4 focus:ring-[#FF3B6D]/20 focus:border-[#FF3B6D] transition-all outline-none font-medium"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#FF3B6D] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing In...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-[#6B7280] text-sm font-medium">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-[#FF3B6D] font-bold hover:underline">Apply for Access</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;