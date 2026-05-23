import React, { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { authAPI } from '../utils/api';

type VerifyState = 'loading' | 'success' | 'error';

const VerifyEmail: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [state, setState] = useState<VerifyState>('loading');
    const [message, setMessage] = useState('Verifying your email...');
    const hasVerifiedSuccessfully = useRef(false);

    useEffect(() => {
        const token = searchParams.get('token');

        if (!token) {
            setState('error');
            setMessage('Invalid verification link. Missing token.');
            return;
        }

        const verify = async () => {
            try {
                const data = await authAPI.verifyEmail(token);
                hasVerifiedSuccessfully.current = true;
                setState('success');
                setMessage(data.msg || 'Email verified successfully. You can now log in.');
            } catch (err: any) {
                if (hasVerifiedSuccessfully.current) {
                    return;
                }

                setState('error');
                setMessage(err?.msg || 'Could not verify the link right now. If you can log in, your email is already verified.');
            }
        };

        verify();
    }, [searchParams]);

    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#f8f7f4] px-6 py-12">
            <div className="max-w-lg w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h1 className="text-2xl font-black text-slate-900 mb-4">Email Verification</h1>
                <p className="text-sm text-slate-600 mb-6">{message}</p>

                {state === 'loading' && (
                    <div className="animate-pulse space-y-3" aria-hidden="true">
                        <div className="h-3 bg-slate-200 rounded w-full" />
                        <div className="h-3 bg-slate-200 rounded w-4/5" />
                        <div className="h-10 bg-slate-200 rounded-full w-40 mt-4" />
                    </div>
                )}

                {state === 'success' && (
                    <Link
                        to="/login"
                        className="inline-block bg-brand-green text-white py-3 px-6 rounded-full font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all"
                    >
                        Go To Login
                    </Link>
                )}

                {state === 'error' && (
                    <div className="flex flex-wrap gap-3">
                        <Link
                            to="/login"
                            className="inline-block bg-brand-green text-white py-3 px-6 rounded-full font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all"
                        >
                            Go To Login
                        </Link>
                        <Link
                            to="/signup"
                            className="inline-block border border-slate-300 text-slate-700 py-3 px-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all"
                        >
                            Back To Signup
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;
