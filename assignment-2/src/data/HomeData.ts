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
  { id: "under30", label: "Under 30 min" },
  { id: "bestoverall", label: "Best overall" },
  { id: "rating", label: "Rating 4.5+" },
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
    tag: "Best overall",
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
       "https://dummyimage.com/1200x800/111/ffffff&text=WINGS",
    deliveryFeeText: "$1.99 Delivery Fee",
    etaMins: 30,
    rating: 4.5,
    ratingCountText: "(1,000+)",
    cuisineRank: "Wings",
  },
  {
    id: "p3",
    name: "McDonald's",
    image:
      "https://dummyimage.com/1200x800/111/ffffff&text=BURGER",
    deliveryFeeText: "$0 Delivery Fee",
    etaMins: 18,
    rating: 4.2,
    ratingCountText: "(10,000+)",
    cuisineRank: "Fast Food",
    tag: "Best overall",
  },
  {
    id: "p4",
    name: "Taco Time",
    image:
      "https://dummyimage.com/1200x800/111/ffffff&text=TACOS",
    deliveryFeeText: "$2.49 Delivery Fee",
    etaMins: 22,
    rating: 4.4,
    ratingCountText: "(2,000+)",
    cuisineRank: "Mexican",
  },
  {
    id: "p5",
    name: "Subway",
    image:
      "https://dummyimage.com/1200x800/111/ffffff&text=SANDWICH",
    deliveryFeeText: "$0 Delivery Fee",
    etaMins: 20,
    rating: 4.1,
    ratingCountText: "(3,000+)",
    cuisineRank: "Sandwiches",
  },
  {
    id: "p6",
    name: "Domino's",
    image:
      "https://dummyimage.com/1200x800/111/ffffff&text=PIZZA",
    deliveryFeeText: "$1.99 Delivery Fee",
    etaMins: 28,
    rating: 4.3,
    ratingCountText: "(5,000+)",
    cuisineRank: "Pizza",
  },
  {
    id: "p7",
    name: "Starbucks",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    deliveryFeeText: "$0 Delivery Fee",
    etaMins: 15,
    rating: 4.7,
    ratingCountText: "(8,000+)",
    cuisineRank: "Coffee",
  },
  {
    id: "p8",
    name: "A&W",
    image:
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1200&q=80",
    deliveryFeeText: "$1.49 Delivery Fee",
    etaMins: 19,
    rating: 4.0,
    ratingCountText: "(1,200+)",
    cuisineRank: "Burgers",
  },
];