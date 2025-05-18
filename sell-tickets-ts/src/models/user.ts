export interface User {
    id: number;
    name: string;
    email: string;
    role?: string;
    ticketsPurchased?: number;
    ticketsCancelled?: number;
    rating?: number;
  }