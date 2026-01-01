import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API call
    };

    if (submitted) {
        return (
            <div className="animate-fade-in">
                {/* Hero Header */}
                <div className="relative bg-[#0A1428] py-14 text-center overflow-hidden">
                    {/* Background Shapes */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="absolute top-10 right-10 w-40 h-40 text-[#00C853]" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M30,20 Q50,5 70,20 Q75,50 50,75 Q25,50 30,20 Z" />
                        </svg>
                        <svg className="absolute bottom-10 left-10 w-36 h-36 text-[#FF3B6D]" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M20,50 Q50,80 80,50 L80,60 Q50,90 20,60 Z" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00C853]/5 to-transparent"></div>
                    </div>
                    <div className="relative z-10 px-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Password Recovery</h1>
                        <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">We're here to help you regain access</p>
                    </div>
                </div>

                <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4 pt-10 pb-20 relative">
                    {/* Floating Shapes */}
                    <div className="absolute inset-0 pointer-events-none">
                        <svg className="absolute top-1/3 left-1/4 w-16 h-16 text-[#00C853]/5" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M50,15 C65,5 85,20 80,40 C75,60 60,75 40,70 C20,65 15,45 25,30 C35,15 40,20 50,15 Z" />
                        </svg>
                    </div>

                    <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-[#E5E7EB] p-8 md:p-10 text-center z-10">
                        <div className="w-16 h-16 bg-[#FF3B6D]/10 text-[#FF3B6D] rounded-full flex items-center justify-center text-2xl mx-auto mb-6 shadow-sm">
                            ✉️
                        </div>
                        <h2 className="text-2xl font-bold text-[#0A1428] mb-4">Check your inbox</h2>
                        <p className="text-[#6B7280] text-sm font-medium mb-8 leading-relaxed">
                            We've sent a password reset link to{' '}
                            <span className="text-[#0A1428] font-bold">{email}</span>. Please follow the instructions to regain access.
                        </p>
                        <Link
                            to="/login"
                            className="block w-full bg-[#FF3B6D] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-md"
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
            {/* Hero Header */}
            <div className="relative bg-slate-900 py-14 text-center overflow-hidden">
                {/* Background Shapes */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="absolute top-10 right-10 w-40 h-40 text-[#00C853]" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M30,20 Q50,5 70,20 Q75,50 50,75 Q25,50 30,20 Z" />
                    </svg>
                    <svg className="absolute bottom-10 left-10 w-36 h-36 text-[#FF3B6D]" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M20,50 Q50,80 80,50 L80,60 Q50,90 20,60 Z" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00C853]/5 to-transparent"></div>
                </div>
                <div className="relative z-10 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Reset Password</h1>
                    <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">Enter your email to receive recovery instructions</p>
                </div>
            </div>

            <div className="flex items-center justify-center bg-[#F9FAFB] px-4 pt-10 pb-20 relative">
                {/* Floating Shapes */}
                <div className="absolute inset-0 pointer-events-none">
                    <svg className="absolute top-1/3 left-1/4 w-16 h-16 text-[#00C853]/5" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50,15 C65,5 85,20 80,40 C75,60 60,75 40,70 C20,65 15,45 25,30 C35,15 40,20 50,15 Z" />
                    </svg>
                </div>

                <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-[#E5E7EB] p-8 md:p-10 z-10 -mt-20">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-[#0A1428] mb-2">Password Recovery</h2>
                        <p className="text-[#6B7280] text-sm font-medium">Verify your identity</p>
                    </div>

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
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#FF3B6D] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-md active:scale-[0.98]"
                        >
                            Send Reset Link
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <Link to="/login" className="text-[#6B7280] font-bold text-xs hover:text-[#0A1428] uppercase tracking-wider">
                            ← Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;