export interface Promotion {
    id: number;
    code: string;
    description: string;
    discountPercent: number;
    validFrom: string;
    validTo: string;
    isActive: boolean;
  }