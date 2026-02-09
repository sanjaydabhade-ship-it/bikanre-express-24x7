
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
