export interface LoginInterface {
    name: string | null; // type for user object may vary, such as { name: string, age: number, ... }
    token: string | null; // type can be JWT or any other token format
    email: string | null;
    _id: number | null;
    role: number | null;
    phone: string | null,
    address: string | null
    permissions: Permissions[];
    success: boolean
  }
  
  export interface Roles {
    name: string;
  }
  
  export interface Permissions {
    name: string;
  }