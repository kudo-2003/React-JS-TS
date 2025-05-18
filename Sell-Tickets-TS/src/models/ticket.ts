export interface Ticket {
    id: number;
    userId: number;
    type: "bus" | "taxi" | "tour";
    price: number;
    status: "booked" | "cancelled" | "purchased";
    createdAt: string;
    updatedAt?: string;
  }