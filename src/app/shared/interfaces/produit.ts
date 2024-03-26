// Interface for a product
export interface SimpleProduct {
    id: string;
    name: string;
    description: string;
    image: string;
    price?: string;
    category?: string;
    promo: boolean;
    promoVal?: number; // Optionel
}