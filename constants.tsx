
import { TimeSlot, FoodCategory, ChefPick } from './types';

export const TIME_SLOTS: TimeSlot[] = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    description: 'Traditional morning favourites to kickstart your day.',
    dishes: ['Chola Bhature', 'Idli Sambhar', 'Masala Dosa'],
    image: 'https://images.unsplash.com/photo-1626132646533-b6a500559996?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'lunch',
    title: 'Lunch',
    description: 'Wholesome and hearty meals for a midday boost.',
    dishes: ['Bikaneri Deluxe Thali', 'Paneer Butter Masala', 'Dal Makhani'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'evening',
    title: 'Evening Snacks',
    description: 'Perfect companions for your evening conversations.',
    dishes: ['Gol Gappa Bharwa', 'Chole Tikki', 'Pav Bhaji'],
    image: 'https://images.unsplash.com/photo-1601050638917-3d85830027b7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dinner',
    title: 'Dinner',
    description: 'An elegant selection of comfort and class.',
    dishes: ['Tandoori Platter', 'Kadhai Paneer', 'Mix Veg'],
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'latenight',
    title: 'Late Night',
    description: 'Nourishing cravings even in the quietest hours.',
    dishes: ['Executive Thali', 'Paneer Sandwich', 'Veg Noodles'],
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800'
  }
];

export const FOOD_CATEGORIES: FoodCategory[] = [
  { id: '1', name: 'Bikaneri & North Indian Classics', image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&q=80&w=800' },
  { id: '2', name: 'Thalis That Comfort', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800' },
  { id: '3', name: 'Tandoori & Platters', image: 'https://images.unsplash.com/photo-1628294895950-9833227a20bc?auto=format&fit=crop&q=80&w=800' },
  { id: '4', name: 'South Indian Favourites', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800' },
  { id: '5', name: 'Indo-Chinese Selection', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=800' },
  { id: '6', name: 'Café & Quick Bites', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800' },
  { id: '7', name: 'Desserts & Mithai', image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=800' },
];

export const CHEFS_PICKS: ChefPick[] = [
  { id: '1', name: 'Paneer Lababdar', description: 'Luscious paneer cubes in a rich, creamy tomato gravy.', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=600' },
  { id: '2', name: 'Dal Bikaner Spl.', description: 'Slow-cooked black lentils with our signature spice blend.', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&q=80&w=600' },
  { id: '3', name: 'Tandoori Platter', description: 'Assorted kebabs and tikkas charred to perfection.', image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600' },
  { id: '4', name: 'Bikaneri Deluxe Thali', description: 'A royal spread of seasonal vegetables, dals, and breads.', image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97eb4?auto=format&fit=crop&q=80&w=600' },
];
