const router = require('express').Router();
router.get('/', (req, res) => {
  const resto = [
    {
      name: 'rotisserie',
      price: 20,
      picture:
        'https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_960_720.jpg',
    },
    {
      name: 'poissons',
      price: 15,
      picture:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/salmon-1238248_960_720.jpg',
    },
    {
      name: 'Végétariens',
      price: 10,
      picture:
        'https://cdn.pixabay.com/photo/2018/03/28/20/32/food-3270461_960_720.jpg',
    },
    {
      name: 'pizzas',
      price: 12,
      picture:
        'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg',
    },
    {
      name: 'desserts',
      price: 5,
      picture:
        'https://cdn.pixabay.com/photo/2017/01/16/17/45/pancake-1984716_960_720.jpg',
    },
  ];
  res.json(resto);
});
module.exports = router;
