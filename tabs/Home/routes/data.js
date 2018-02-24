import moment from 'moment';
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];


export const pizzas = [{
    title : 'Pepperoni',
    price : '$11.99',
    description : 'Pepperoni and mozzarella',
    source: 'https://media.daysoftheyear.com/20171223133442/pepperoni-pizza-day.jpg',
    days,
    times,
  },
  {
    title : 'Margherita Pizza',
    price : '$13.99',
    description : 'Cherry tomatoes, fresh tomato, basil drizzle & mozzarella',
    source: 'https://www.academiabarilla.com/anteprima_pizzamargherita_xhm1p-2_1200.jpg?h=faa3bae42d7180a508c490395249247ded3f362c',
    days,
    times,
  },
  {
    title : 'Seafood Pizza',
    price : '$32.45',
    description : 'Fish (including salmon, tuna, anchovy), shellfish, clams, scallops, mussels, shrimp, squid,lobster and scungilli',
    source: 'https://individualrestaurants.com/wp-content/uploads/2012/10/seafood-pizza2.jpg',
    days,
    times,
  },
  {
    title : 'Vegeterian Pizza',
    price : '$13.45',
    description : 'Oasted red peppers, fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives, cheeses made with 100% real mozzarella, feta and provolone, sprinkled with garlic herb seasoning,',
    source: 'https://www.silviocicchi.com/pizzachef/wp-content/uploads/2015/02/v2.jpg',
    days,
    times,
  }
]

export const drinks = [
  {
    title: 'Turkish Coffee',
    price: '$3.99',
    description:'Ground Coffee,1⁄8 teaspoon ground cardamom or 1 cardamom pod, water, sugar(optional)',
    source:'../../../images/turkishcoffee.jpg',
    days,
    times,
  },
  {
    title: 'Espresso',
    price: '$3.99',
    description: '20-22g coffee',
    source: '../../../images/espresso.jpg',
    days,
    times,
  },
  {
    title: 'Cappuccino',
    price: '$3.99',
    description: 'double espresso, steamed milk, foam',
    source: '../../../images/cappuccino.jpg',
    days,
    times,
  },
  {
    title: 'Caffee Latte',
    price: '$3.99',
    description: 'Espresso,steamed milk, foam ',
    source: '../../../images/latte.jpeg',
    days,
    times,
  }
]
