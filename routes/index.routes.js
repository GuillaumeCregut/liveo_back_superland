const router = require('express').Router();
const animals=require('./animals');
const activity=require('./activity');
const resto=require('./resto');

router.use('/animals',animals);
router.use('/resto',resto);
router.use('/activity',activity);

module.exports=router;