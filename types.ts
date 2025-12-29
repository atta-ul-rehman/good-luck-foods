
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  image: string;
  specs?: string[];
}

export interface InquiryFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}
