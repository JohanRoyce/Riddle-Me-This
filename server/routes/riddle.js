let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with riddle model

let Riddle = require('../models/riddle');
let riddleController = require('../controller/riddle');

/*CRUD Operation*/

/* Read Operation */
/* Get route for the riddle list */

router.get('/', riddleController.displayRiddleList);

/*Add Operation */
/*Get route for displaying the Add-Page -- Create Operation */
router.get('/add',riddleController.displayAddPage);

/*Post route for processing the Add-Page -- Create Operation */
router.post('/add',riddleController.processAddPage);

/*Edit Operation */
/*Get route for displaying the Edit Operation -- Update Operation */
router.get('/edit/:id',riddleController.displayEditPage);

/*Post route for displaying the Edit Operation -- Update Operation */
router.post('/edit/:id',riddleController.processEditPage);

/*Delete Operation */
/*Get route for displaying the Delete Operation -- Deletion */
router.get('/delete/:id',riddleController.performDelete);

module.exports=router;