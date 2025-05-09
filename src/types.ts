
export interface Product {
  id: string;
  brand: string;
  model: string;
  category: string;
  price: number;
  description: string;
  engine: string;
  power: string;
  torque: string;
  weight: string;
  featured: boolean;
  discount?: number;
  newArrival?: boolean;
  stock: number;
  rating: number;
  imageUrl: string;
  images: string[];
}

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
};

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

export interface OrderSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}
