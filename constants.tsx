
import { TimeSlot, FoodCategory, ChefPick, MenuCategory, Review } from './types';

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

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Rahul Khanna',
    comment: 'The 3 AM Chole Bhature is a lifesaver. Never seen a veg place this elegant at such odd hours.',
    images: ['https://images.unsplash.com/photo-1626777552726-4a6b54c97eb4?auto=format&fit=crop&q=80&w=400'],
    date: 'March 2024'
  },
  {
    id: 'rev-2',
    name: 'Anjali Sharma',
    comment: 'Perfect for family dinners. The South Indian platter is authentic and the ambience is so calming.',
    images: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400'],
    date: 'February 2024'
  }
];

export const FULL_MENU: MenuCategory[] = [
  {
    id: 'main-course',
    title: 'Main Course',
    items: [
      { name: 'Dal Fry', price: 189 },
      { name: 'Dal Tadka', price: 199 },
      { name: 'Dal Makhani', price: 210, isSignature: true },
      { name: 'Bikaner Spl. Dal Makhani', price: 230, isSignature: true },
      { name: 'Paneer Kadhai', price: 280 },
      { name: 'Paneer Lababdar', price: 295, isSignature: true },
      { name: 'Paneer Butter Masala', price: 280 },
      { name: 'Matar Paneer', price: 270 },
      { name: 'Paneer Tikka Masala', price: 315 },
      { name: 'Malai Kofta (4 Pcs.)', price: 280 },
      { name: 'Kaju Korma', price: 280 },
    ]
  },
  {
    id: 'tandoori-factory',
    title: 'Tandoori Factory',
    items: [
      { name: 'Paneer Tikka (6 Pcs.)', price: 280 },
      { name: 'Paneer Malai Tikka (6 Pcs.)', price: 280 },
      { name: 'Masala Soya Chap Tikka (6 Pcs.)', price: 280 },
      { name: 'Dahi Kabab (6 Pcs.)', price: 250, isSignature: true },
      { name: 'Tandoori Alloo (6 Pcs.)', price: 190 },
      { name: 'Tandoori Platter', price: 350, description: '2 Seekh, 2 Hara Bhara, 2 Masala Tikka, 3 Paneer Tikka, Dal Makhani & Naan', isSignature: true },
    ]
  },
  {
    id: 'indian-breads',
    title: 'Indian Breads',
    items: [
      { name: 'Tandoor Roti', price: 25 },
      { name: 'Tandoori Roti Butter', price: 35 },
      { name: 'Missi Roti', price: 55 },
      { name: 'Lachha Paratha', price: 60 },
      { name: 'Garlic Paratha', price: 70 },
      { name: 'Paneer Paratha', price: 80 },
      { name: 'Cheese Garlic Naan', price: 100, isSignature: true },
      { name: 'Amritsari Stuffed Kulcha', price: 80 },
    ]
  },
  {
    id: 'china-to-lucknow',
    title: 'From China to Lucknow',
    items: [
      { name: 'Veg. Noodles', price: 160 },
      { name: 'Hakka Noodles', price: 170 },
      { name: 'Paneer Noodles', price: 180 },
      { name: 'Veg. Momos', price: 90 },
      { name: 'Tandoori Veg. Momos', price: 120 },
      { name: 'Chilli Paneer Dry', price: 270, isSignature: true },
      { name: 'Chinese Platter', price: 320, description: 'Chilly Paneer, Manchurian, Spring Roll, Fried Rice, Noodles' },
    ]
  },
  {
    id: 'rice-pulao',
    title: 'Rice / Pulao',
    items: [
      { name: 'Veg. Biryani With Raita', price: 210 },
      { name: 'Hyderabadi Biryani With Raita', price: 250, isSignature: true },
      { name: 'Handi Dum Biryani With Raita', price: 300 },
      { name: 'Jeera Rice', price: 120 },
      { name: 'Veg. Fried Rice', price: 160 },
    ]
  },
  {
    id: 'thali',
    title: 'Thali',
    items: [
      { name: 'Executive Thali', price: 280 },
      { name: 'Bikaneri Deluxe Thali', price: 340, isSignature: true },
      { name: 'Amritsari Thali', price: 240 },
    ]
  },
  {
    id: 'meetha',
    title: 'Kuch Meetha Ho Jaaye',
    items: [
      { name: 'Rasmalai (Pc.)', price: 50 },
      { name: 'Gulab Jamun (Pc.)', price: 35 },
      { name: 'Dry Rasbhari (Kg.)', price: 650 },
      { name: 'Milk Cake (Kg)', price: 800 },
      { name: 'Kaju Barfi (Kg)', price: 1350, isSignature: true },
      { name: 'Jalebi (Kg)', price: 440 },
    ]
  },
  {
    id: 'cafe-italian',
    title: 'Cafe n Italian',
    items: [
      { name: 'Veg. Sandwich', price: 70 },
      { name: 'Veg. Cheese Grilled Sandwich', price: 140 },
      { name: 'Paneer Tikka Pizza (Med.)', price: 230, isSignature: true },
      { name: 'Veggie Cheese Supreme Pizza (Med.)', price: 270 },
      { name: 'Aloo Tikki Burger', price: 110 },
      { name: 'Alfredo Pasta (White Sauce)', price: 210 },
    ]
  },
  {
    id: 'delhi-6',
    title: 'Delhi - 6',
    items: [
      { name: 'Gol Gappa (6 Pc.)', price: 50 },
      { name: 'Bharva Gol Gappa (6 Pc.)', price: 90, isSignature: true },
      { name: 'Aloo Tikki (Single)', price: 50 },
      { name: 'Chole Bhature', price: 175, isSignature: true },
      { name: 'Pao Bhaji', price: 150 },
      { name: 'Chaat Platter', price: 250 },
    ]
  },
  {
    id: 'south-indian',
    title: 'South Indian',
    items: [
      { name: 'Plain Dosa', price: 120 },
      { name: 'Masala Dosa', price: 150, isSignature: true },
      { name: 'Paneer Masala Dosa', price: 190 },
      { name: 'Bikaner Spl. Dosa', price: 160 },
      { name: 'Idli Sambhar', price: 130 },
      { name: 'South Indian Platter', price: 300, description: 'Mini Dosa, Uttapam, Idli, Vada, Upma, Rice, Sambhar, Rasam', isSignature: true },
    ]
  },
  {
    id: 'soups',
    title: 'Soups',
    items: [
      { name: 'Tomato Soup', price: 100 },
      { name: 'Sweet Corn Soup', price: 110 },
      { name: 'Veg. Manchow Soup', price: 130 },
      { name: 'Hot and Sour Soup', price: 130 },
    ]
  },
  {
    id: 'hungry-hours',
    title: 'Hungry Hours - Happy Hours',
    items: [
      { name: 'Breakfast Combo (Tea+Samosa)', price: 39, description: '8 AM - 11.45 AM' },
      { name: 'Lunch Refreshment (Chaas)', price: 25, description: '12 PM - 3 PM' },
      { name: 'Evening Delight (Gol Gappa)', price: 39, description: '4 PM - 8 PM' },
      { name: 'Night Owl (Executive Thali)', price: 249, description: '9 PM - 11 PM' },
    ]
  },
];
