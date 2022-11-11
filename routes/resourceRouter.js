const router = require('express').Router();

const resourcesController =  require("../controllers/resourcesController");


router.post('/resources', resourcesController.addResource);
router.get('/resources', resourcesController.getAllResources);
router.get('/resources/:id', resourcesController.getOneResource);
router.patch('/resources/:id', resourcesController.updateResource);
router.delete('/resources/:id', resourcesController.deleteResource);


module.exports = router;
 