const API_URL = 'http://localhost:5000/api';

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

    const response = await fetch(`${API_URL}${endpoint}`, config);
    const responseData = await response.json();

    if (response.ok) {
        return responseData;
    } else {
        return Promise.reject(responseData);
    }
}

// Auth API helpers
export const authAPI = {
    login: async (credentials: any) => api.post('/auth/login', credentials),
    signup: async (userData: any) => api.post('/auth/signup', userData),
    getUser: async (token: string) => api.get('/auth/user', token),
};

// Product API helpers
export const productAPI = {
    getAll: async () => api.get('/products'),
    getById: async (id: string) => api.get(`/products/${id}`),
    create: async (data: any, token: string) => api.post('/products', data, token),
    update: async (id: string, data: any, token: string) => api.put(`/products/${id}`, data, token),
    delete: async (id: string, token: string) => api.delete(`/products/${id}`, token),
};
