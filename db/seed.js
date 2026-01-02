// Seed data for the meal plans
const plans = [
  {
    name: 'Daily Meal Plan #1',
    meals: [
      {
        name: 'Banana Pancakes',
        timeOfDay: 'Breakfast',
        mealType: 'FOOD',
        imageUrl: 'https://picsum.photos/id/999/600/800',
      },
      {
        name: 'Iced Coffee',
        timeOfDay: 'Lunch',
        mealType: 'DRINK',
        imageUrl: 'https://picsum.photos/id/431/600/800',
      },
      {
        name: 'Grilled Chicken Salad',
        timeOfDay: 'Dinner',
        mealType: 'FOOD',
        imageUrl: 'https://picsum.photos/id/995/600/800',
      },
    ],
  },
  {
    name: 'Daily Meal Plan #2',
    meals: [
      {
        name: 'Avocado Toast',
        timeOfDay: 'Breakfast',
        mealType: 'FOOD',
        imageUrl: 'https://picsum.photos/id/674/600/800',
      },
      {
        name: 'Mango Lassi',
        timeOfDay: 'Lunch',
        mealType: 'DRINK',
        imageUrl: 'https://picsum.photos/id/312/600/800',
      },
      {
        name: 'Pesto Pasta',
        timeOfDay: 'Dinner',
        mealType: 'FOOD',
        imageUrl: 'https://picsum.photos/id/696/600/800',
      },
    ],
  },
  {
    name: 'Daily Meal Plan #3',
    meals: [
      {
        name: 'Blueberry Pancakes',
        timeOfDay: 'Breakfast',
        mealType: 'FOOD',
        imageUrl: 'https://picsum.photos/id/493/600/800',
      },
      {
        name: 'Matcha Latte',
        timeOfDay: 'Lunch',
        mealType: 'DRINK',
        imageUrl: 'https://picsum.photos/id/365/600/800',
      },
      {
        name: 'Stir-Fry Vegetables with Tofu',
        timeOfDay: 'Dinner',
        mealType: 'FOOD',
        imageUrl: 'https://picsum.photos/id/530/600/800',
      },
    ],
  },
  {
    name: 'Daily Meal Plan #4',
    meals: [
      {
        name: 'Omelette',
        timeOfDay: 'Breakfast',
        mealType: 'FOOD',
        imageUrl: 'https://picsum.photos/id/1025/600/800',
      },
      {
        name: 'Strawberry Smoothie',
        timeOfDay: 'Lunch',
        mealType: 'DRINK',
        imageUrl: 'https://picsum.photos/id/429/600/800',
      },
      {
        name: 'Grilled Cheese Sandwich',
        timeOfDay: 'Dinner',
        mealType: 'FOOD',
        imageUrl: 'https://picsum.photos/id/835/600/800',
      },
    ],
  },
  {
    name: 'Daily Meal Plan #5',
    meals: [
      {
        name: 'Bagel and Cream Cheese',
        timeOfDay: 'Breakfast',
        mealType: 'FOOD',
        imageUrl: 'https://picsum.photos/id/815/600/800',
      },
      {
        name: 'Orange Juice',
        timeOfDay: 'Lunch',
        mealType: 'DRINK',
        imageUrl: 'https://picsum.photos/id/326/600/800',
      },
      {
        name: 'Salad',
        timeOfDay: 'Dinner',
        mealType: 'FOOD',
        imageUrl: 'https://picsum.photos/id/292/600/800',
      },
    ],
  },
];

const Plan = require('./planModel');

// Delete the collection if it exists
Plan.collection
  .drop()
  .then(() => {
    console.log('Current plans are removed!');

    // Then insert data
    Plan.insertMany(plans)
      .then(() => {
        console.log('New plans are saved!');
        process.exit();
      })
      .catch((error) => console.log(error.message));
  })
  .catch(() => console.log('Collection does not exist!'));
