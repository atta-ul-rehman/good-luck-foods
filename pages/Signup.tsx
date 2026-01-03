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
            // Remove confirmPassword from API call
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
        <div className="animate-fade-in">
            {/* Hero Header with Food-Inspired Abstract Shapes */}
            <div className="relative bg-slate-900 py-16 text-center overflow-hidden">
                {/* Background Decorative Shapes */}
                <div className="absolute inset-0 opacity-10">
                    {/* Stylized Leaf (Vegetables) - Top Right */}
                    <svg className="absolute top-10 right-10 w-48 h-48 text-[#00C853]" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50,15 C65,5 85,20 80,40 C75,60 60,75 40,70 C20,65 15,45 25,30 C35,15 40,20 50,15 Z" />
                    </svg>
                    {/* Stylized Bowl (Meals) - Bottom Left */}
                    <svg className="absolute bottom-10 left-10 w-40 h-40 text-[#FF3B6D]" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M20,50 Q50,80 80,50 L80,60 Q50,90 20,60 Z" />
                    </svg>
                    {/* Organic Curve Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00C853]/5 to-transparent"></div>
                </div>

                {/* Hero Text */}
                <div className="relative z-10 px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Partner Application</h1>
                    <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">Join our network of 1,200+ industry leaders</p>
                </div>
            </div>

            {/* Signup Form with Thematic Background Elements */}
            <div className="flex items-center justify-center bg-[#F9FAFB] px-4 pt-10 pb-20 relative">
                {/* Floating Food-Inspired Shapes Behind Form */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Tiny Carrot (Bottom Right) */}
                    <svg className="absolute bottom-1/3 right-1/4 w-20 h-20 text-[#FF3B6D]/5" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50,0 L60,30 L50,90 L40,30 Z M45,85 L55,85 M40,75 L60,75" />
                    </svg>
                    {/* Small Leaf (Top Left) */}
                    <svg className="absolute top-1/3 left-1/4 w-16 h-16 text-[#00C853]/5" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M30,20 Q50,5 70,20 Q75,50 50,75 Q25,50 30,20 Z" />
                    </svg>
                    {/* Minimal Butcher's Hook (Meat - Top Right) */}
                    <svg className="absolute top-1/4 right-1/3 w-12 h-12 text-[#0A1428]/5" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M20,50 Q20,20 50,20 Q80,20 80,50 Q80,80 50,80 Q40,80 35,70" stroke="currentColor" strokeWidth="10" fill="none" />
                    </svg>
                </div>

                {/* Signup Card */}
                <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl border border-[#E5E7EB] p-8 md:p-10 z-10 -mt-20">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-[#0A1428] mb-2">Create Account</h2>
                        <p className="text-[#6B7280] text-sm font-medium">Company Registration</p>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#374151] uppercase tracking-wider" htmlFor="fullName">Full Name</label>
                                <input
                                    id="fullName"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl focus:ring-4 focus:ring-[#FF3B6D]/20 focus:border-[#FF3B6D] transition-all outline-none font-medium text-sm"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    disabled={loading}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#374151] uppercase tracking-wider" htmlFor="companyName">Business Name</label>
                                <input
                                    id="companyName"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl focus:ring-4 focus:ring-[#FF3B6D]/20 focus:border-[#FF3B6D] transition-all outline-none font-medium text-sm"
                                    placeholder="Acme Catering"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#374151] uppercase tracking-wider" htmlFor="email">Work Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl focus:ring-4 focus:ring-[#FF3B6D]/20 focus:border-[#FF3B6D] transition-all outline-none font-medium text-sm"
                                    placeholder="name@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={loading}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#374151] uppercase tracking-wider" htmlFor="phone">Phone Number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    required
                                    className="w-full px-4 py-3 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl focus:ring-4 focus:ring-[#FF3B6D]/20 focus:border-[#FF3B6D] transition-all outline-none font-medium text-sm"
                                    placeholder="+1 (555) 000-0000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#374151] uppercase tracking-wider" htmlFor="password">Create Password</label>
                            <input
                                id="password"
                                type="password"
                                required
                                className="w-full px-4 py-3 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl focus:ring-4 focus:ring-[#FF3B6D]/20 focus:border-[#FF3B6D] transition-all outline-none font-medium text-sm"
                                placeholder="Minimum 6 characters"
                                value={formData.password}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#374151] uppercase tracking-wider" htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                required
                                className="w-full px-4 py-3 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl focus:ring-4 focus:ring-[#FF3B6D]/20 focus:border-[#FF3B6D] transition-all outline-none font-medium text-sm"
                                placeholder="Re-enter password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#FF3B6D] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
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
                                    'Submit Application'
                                )}
                            </button>
                            <p className="text-center mt-4 text-[10px] text-[#6B7280] font-medium leading-relaxed">
                                By clicking "Submit Application", you agree to our Terms of Service and Privacy Policy. All accounts are subject to verification.
                            </p>
                        </div>
                    </form>

                    <div className="mt-10 text-center pt-8 border-t border-[#E5E7EB]">
                        <p className="text-[#6B7280] text-sm font-medium">
                            Already have a Partner ID?{' '}
                            <Link to="/login" className="text-[#FF3B6D] font-bold hover:underline">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;