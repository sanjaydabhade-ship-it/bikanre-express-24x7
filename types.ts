
export interface TimeSlot {
  id: string;
  title: string;
  description: string;
  dishes: string[];
  image: string;
}

export interface FoodCategory {
  id: string;
  name: string;
  image: string;
}

export interface ChefPick {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface MenuItem {
  name: string;
  price: number | string;
  description?: string;
  isSignature?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface Review {
  id: string;
  name: string;
  comment: string;
  images: string[];
  date: string;
}
