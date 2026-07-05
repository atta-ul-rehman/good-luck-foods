import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authAPI } from '../utils/api';
import SEO from '../components/SEO';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await authAPI.forgotPassword(email);
            setSubmitted(true);
        } catch (err: any) {
            console.error('Forgot password error:', err);
            if (err && err.status === 500) {
                setError('Something went wrong. Please try again.');
            } else {
                setSubmitted(true);
            }
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="animate-fade-in">
                <SEO
                    title="Forgot Password"
                    description="Reset your Good Luck Foods account password using your registered email address."
                    path="/forgot-password"
                    noindex
                />
                {/* Hero Header */}
                <div className="relative bg-slate-900 py-20 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <svg className="absolute top-10 right-10 w-40 h-40 text-emerald-600" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M30,20 Q50,5 70,20 Q75,50 50,75 Q25,50 30,20 Z" />
                        </svg>
                        <svg className="absolute bottom-10 left-10 w-36 h-36 text-brand-red" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M20,50 Q50,80 80,50 L80,60 Q50,90 20,60 Z" />
                        </svg>
                    </div>
                    <div className="relative z-10 px-4">
                        <span className="text-emerald-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Email Sent</span>
                        <h1 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">Password Recovery</h1>
                        <div className="w-24 h-1 bg-brand-red mx-auto"></div>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto mt-6">We're here to help you regain access</p>
                    </div>
                </div>

                <div className="flex items-center justify-center bg-slate-100 px-4 py-16 relative">
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <svg className="absolute top-1/3 left-1/4 w-16 h-16 text-emerald-600/5" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M50,15 C65,5 85,20 80,40 C75,60 60,75 40,70 C20,65 15,45 25,30 C35,15 40,20 50,15 Z" />
                        </svg>
                    </div>

                    <div className="max-w-md w-full bg-white rounded-lg shadow-xl border border-slate-200 p-8 md:p-10 text-center z-10">
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6 shadow-sm">
                            ✉️
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Check your inbox</h2>
                        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                            We've sent a password reset link to{' '}
                            <span className="text-slate-900 font-bold">{email}</span>. Please follow the instructions to regain access.
                        </p>
                        <Link
                            to="/login"
                            className="block w-full bg-emerald-600 text-white py-3.5 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-emerald-700 transition-all shadow-md"
                        >
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            <SEO
                title="Forgot Password"
                description="Reset your Good Luck Foods account password using your registered email address."
                path="/forgot-password"
                noindex
            />
            {/* Hero Header */}
            <div className="relative bg-slate-900 py-20 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="absolute top-10 right-10 w-40 h-40 text-emerald-600" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M30,20 Q50,5 70,20 Q75,50 50,75 Q25,50 30,20 Z" />
                    </svg>
                    <svg className="absolute bottom-10 left-10 w-36 h-36 text-brand-red" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M20,50 Q50,80 80,50 L80,60 Q50,90 20,60 Z" />
                    </svg>
                </div>
                <div className="relative z-10 px-4">
                    <span className="text-emerald-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Account Recovery</span>
                    <h1 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">Reset Password</h1>
                    <div className="w-24 h-1 bg-brand-red mx-auto"></div>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto mt-6">Enter your email to receive recovery instructions</p>
                </div>
            </div>

            <div className="flex items-center justify-center bg-slate-100 px-4 py-16 relative">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <svg className="absolute top-1/3 left-1/4 w-16 h-16 text-emerald-600/5" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50,15 C65,5 85,20 80,40 C75,60 60,75 40,70 C20,65 15,45 25,30 C35,15 40,20 50,15 Z" />
                    </svg>
                </div>

                <div className="max-w-md w-full bg-white rounded-lg shadow-xl border border-slate-200 p-8 md:p-10 z-10">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Password Recovery</h2>
                        <p className="text-slate-500 text-sm">Verify your identity</p>
                    </div>

                    {error && (
                        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-medium flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-700 uppercase tracking-wider" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all outline-none"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand-green text-white py-3.5 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-emerald-700 transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Send Reset Link'
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <Link to="/login" className="text-slate-500 font-bold text-xs hover:text-slate-900 uppercase tracking-wider">
                            ← Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;