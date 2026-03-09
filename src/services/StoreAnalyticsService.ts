import { Product } from "../models/Products.js";
import { Review } from "../models/Review.js";
import { DiscountRule } from "../models/Discounts.js";

export class StoreAnalyticsService {

    static getAvailable(product: Product): number {
        if (!product.stock || !Array.isArray(product.stock)) return 0;
        return product.stock.reduce((total, item) => total + item.quantity, 0);
    }

    static getStockStatus(available: number): string {
        if (available === 0) return "OUT";
        if (available <= 2) return "LOW";
        return "IN_STOCK";
    }

    static getAverageRating(productId: number, reviews: Review[]): string {
        const productReviews = reviews.filter(r => r.productId === productId);

        if (productReviews.length === 0) {
            return "no reviews";
        }

        const avg =
            productReviews.reduce((sum, r) => sum + r.rating, 0) /
            productReviews.length;

        return avg.toFixed(2);
    }
    static getDiscountedPrice(
    product: Product,
    averageRating: string,
    rules: DiscountRule[]
): string {

    const rule = rules.find(r => r.categoryId === product.category.id);

    const basePrice = product.price;

    if (!rule) {
        return `price: ${basePrice.toFixed(2)}`;
    }

    // kui on minRating
    if (rule.minRating !== undefined) {

        if (averageRating === "no reviews") {
            return `price: ${basePrice.toFixed(2)}`;
        }

        if (Number(averageRating) < rule.minRating) {
            return `price: ${basePrice.toFixed(2)}`;
        }
    }

    const discounted =
        basePrice - (basePrice * rule.percent / 100);

    return `price: ${basePrice.toFixed(2)} -> ${discounted.toFixed(2)}`;
}
}

