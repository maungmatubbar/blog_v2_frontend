export interface LoginInterface {
    loading: boolean;
    name: string | null; // type for user object may vary, such as { name: string, age: number, ... }
    token: string | null; // type can be JWT or any other token format
    error: string | null;
    success: boolean;
    email: string | null;
    id: number | null;
    roles: [];
    permissions: Permissions[];
  }
  
  export interface Roles {
    name: string;
  }
  
  export interface Permissions {
    name: string;
  }