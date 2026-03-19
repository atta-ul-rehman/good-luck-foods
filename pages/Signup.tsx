import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../utils/api';
import { useAuth } from '../context/AuthContext';

const Signup: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setLoading(true);

        try {
            const { confirmPassword, ...signupData } = formData;
            const data = await authAPI.signup(signupData);
            await login(data.token);
            navigate('/');
        } catch (err: any) {
            console.error('Signup error:', err);
            setError(err.msg || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="animate-fade-in min-h-[calc(100vh-80px)] flex">
            {/* Left Side - Banner */}
            <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center">
                {/* Background Decorations */}
                <div className="absolute inset-0 opacity-20">
                    <svg className="absolute top-10 right-10 w-32 h-32 text-emerald-500" viewBox="0 0 100 100" fill="currentColor">
                        <rect x="10" y="10" width="80" height="80" transform="rotate(45 50 50)" />
                    </svg>
                    <svg className="absolute bottom-20 left-20 w-24 h-24 text-emerald-500" viewBox="0 0 100 100" fill="currentColor">
                        <rect x="10" y="10" width="80" height="80" transform="rotate(30 50 50)" />
                    </svg>
                    <svg className="absolute top-1/3 left-1/4 w-16 h-16 text-emerald-500" viewBox="0 0 100 100" fill="currentColor">
                        <rect x="10" y="10" width="80" height="80" transform="rotate(15 50 50)" />
                    </svg>
                </div>
                <div className="relative z-10 text-center px-12">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Hello, Friend!</h1>
                    <p className="text-slate-400 text-lg max-w-sm mx-auto mb-10">Enter your personal details and start journey with us</p>
                    <Link 
                        to="/login"
                        className="inline-block border-2 border-white text-white px-12 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
                    >
                        Sign In
                    </Link>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#f8f7f4] lg:bg-white px-6 py-8 relative">
                {/* Signup Form */}
                <div className="max-w-md w-full z-10">
                    {/* Mobile Banner Text */}
                    <div className="lg:hidden text-center mb-6">
                        <span className="text-emerald-600 text-xs font-black uppercase tracking-[0.2em] mb-2 block">Join Us</span>
                    </div>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Create Account</h2>
                        <p className="text-slate-400 text-sm">or use your email for registration</p>
                    </div>

                    {error && (
                        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-medium flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <input
                                id="fullName"
                                type="text"
                                required
                                className="w-full pl-12 pr-4 py-4 bg-white lg:bg-slate-50 border-0 rounded-lg focus:ring-2 focus:ring-emerald-600/20 focus:bg-white transition-all outline-none text-base"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </span>
                            <input
                                id="companyName"
                                type="text"
                                required
                                className="w-full pl-12 pr-4 py-4 bg-white lg:bg-slate-50 border-0 rounded-lg focus:ring-2 focus:ring-emerald-600/20 focus:bg-white transition-all outline-none text-base"
                                placeholder="Business Name"
                                value={formData.companyName}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full pl-12 pr-4 py-4 bg-white lg:bg-slate-50 border-0 rounded-lg focus:ring-2 focus:ring-emerald-600/20 focus:bg-white transition-all outline-none text-base"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </span>
                            <input
                                id="phone"
                                type="tel"
                                required
                                className="w-full pl-12 pr-4 py-4 bg-white lg:bg-slate-50 border-0 rounded-lg focus:ring-2 focus:ring-emerald-600/20 focus:bg-white transition-all outline-none text-base"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>
                            <input
                                id="password"
                                type="password"
                                required
                                className="w-full pl-12 pr-4 py-4 bg-white lg:bg-slate-50 border-0 rounded-lg focus:ring-2 focus:ring-emerald-600/20 focus:bg-white transition-all outline-none text-base"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </span>
                            <input
                                id="confirmPassword"
                                type="password"
                                required
                                className="w-full pl-12 pr-4 py-4 bg-white lg:bg-slate-50 border-0 rounded-lg focus:ring-2 focus:ring-emerald-600/20 focus:bg-white transition-all outline-none text-base"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand-green text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating Account...
                                </>
                            ) : (
                                'Sign Up'
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-400 text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="text-brand-green font-bold hover:underline">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;