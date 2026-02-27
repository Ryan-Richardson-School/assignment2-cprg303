export type TopChip = { id: string; label: string; emoji?: string };
export type Category = { id: string; label: string; emoji: string };
export type QuickFilter = { id: string; label: string };

export type Restaurant = {
  id: string;
  name: string;
  image: string;
  promo?: string;
  deliveryFeeText: string;
  etaMins: number;
  rating?: number;
  ratingCountText?: string;
  tag?: string;
  cuisineRank?: string;
};

export const topChips: TopChip[] = [
  { id: "all", label: "All", emoji: "🍔" },
  { id: "rides", label: "Rides", emoji: "🚗" },
  { id: "grocery", label: "Grocery", emoji: "🛒" },
  { id: "conv", label: "Convenience", emoji: "🏪" },
];

export const categories: Category[] = [
  { id: "dineout", label: "Dine Out", emoji: "🍽️" },
  { id: "pizza", label: "Pizza", emoji: "🍕" },
  { id: "fast", label: "Fast Food", emoji: "🍟" },
  { id: "chinese", label: "Chinese", emoji: "🥡" },
  { id: "breakfast", label: "Breakfast", emoji: "🥞" },
];

export const quickFilters: QuickFilter[] = [
  { id: "uberone", label: "Uber One" },
  { id: "pickup", label: "Pickup" },
  { id: "offers", label: "Offers" },
];

export const featured: Restaurant[] = [
  {
    id: "r1",
    name: "Chachi's",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
    promo: "Buy 1, get 1",
    deliveryFeeText: "$0 Delivery Fee",
    etaMins: 19,
    tag: "Best Overall",
    cuisineRank: "#8 American",
  },
  {
    id: "r2",
    name: "PB and J YYC",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1200&q=80",
    promo: "Buy 1, get 1",
    deliveryFeeText: "$0 Delivery Fee",
    etaMins: 22,
    rating: 4.7,
    ratingCountText: "(1,500+)",
  },
];

export const placesYouMightLike: Restaurant[] = [
  {
    id: "p1",
    name: "Firehouse Subs",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
    deliveryFeeText: "$0 Delivery Fee",
    etaMins: 25,
    rating: 4.6,
    ratingCountText: "(500+)",
    cuisineRank: "Sandwiches",
  },
  {
    id: "p2",
    name: "Wing Spot",
    image:
      "https://images.unsplash.com/photo-1604909053196-967b5443f3b0?auto=format&fit=crop&w=1200&q=80",
    deliveryFeeText: "$1.99 Delivery Fee",
    etaMins: 30,
    rating: 4.5,
    ratingCountText: "(1,000+)",
    cuisineRank: "Wings",
  },
];