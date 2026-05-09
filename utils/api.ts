const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface RequestOptions extends RequestInit {
    token?: string;
    data?: any;
}

export const api = {
    get: (url: string, token?: string) => request(url, { method: 'GET', token }),
    post: (url: string, data: any, token?: string) => request(url, { method: 'POST', data, token }),
    put: (url: string, data: any, token?: string) => request(url, { method: 'PUT', data, token }),
    delete: (url: string, token?: string) => request(url, { method: 'DELETE', token }),
};

async function request(endpoint: string, { data, token, headers: customHeaders, ...customConfig }: RequestOptions = {}) {
    const config: RequestInit = {
        ...customConfig,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'x-auth-token': token } : {}),
            ...customHeaders,
        },
    };

    if (data) {
        config.body = JSON.stringify(data);
    }

    let response: Response;

    try {
        response = await fetch(`${API_URL}${endpoint}`, config);
    } catch (error: any) {
        return Promise.reject({
            status: 0,
            msg: 'Unable to reach the server. Please make sure backend is running on localhost:5000.',
            error: error?.message || 'Network error',
        });
    }
    const rawBody = await response.text();
    let responseData: any = {};

    if (rawBody) {
        try {
            responseData = JSON.parse(rawBody);
        } catch {
            responseData = { msg: rawBody };
        }
    }

    if (response.ok) {
        return responseData;
    } else {
        return Promise.reject({
            status: response.status,
            ...responseData,
            msg: responseData.msg || `Request failed with status ${response.status}`,
        });
    }
}

// Auth API helpers
export const authAPI = {
    login: async (credentials: any) => api.post('/auth/login', credentials),
    signup: async (userData: any) => api.post('/auth/signup', userData),
    verifyEmail: async (token: string) => api.get(`/auth/verify-email?token=${encodeURIComponent(token)}`),
    getUser: async (token: string) => api.get('/auth/user', token),
    forgotPassword: async (email: string) => api.post('/auth/forgot-password', { email }),
};

// Product API helpers
export const productAPI = {
    getAll: async () => api.get('/products'),
    getById: async (id: string) => api.get(`/products/${id}`),
    create: async (data: any, token: string) => api.post('/products', data, token),
    update: async (id: string, data: any, token: string) => api.put(`/products/${id}`, data, token),
    delete: async (id: string, token: string) => api.delete(`/products/${id}`, token),
};

// Contact API helpers
export const contactAPI = {
    submitInquiry: async (data: any) => api.post('/contact', data),
};
