const Order = require('../models/Order');
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require('./verifyToken');

const router = require('express').Router();

//Create
router.post('/', verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Check and Update Order
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } //return updatedOrder
    );
    //if success
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete user Order
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json('Order has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get user Orders
router.get('/find/:userId', verifyTokenAndAuth, async (req, res) => {
  try {
    const Orders = await Orders.find({ userId: req.params.userId });
    res.status(200).json(Orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all Orders
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Monthly income
router.get('/income', verifyTokenAndAdmin, async (req, res) => {
  // comparing dates to get last month period
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      {
        $project: {
          month: { $month: '$createdAt' },
          sales: '$amount',
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$sales' },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
