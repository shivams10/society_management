const router = require('express').Router()
const occupanciesController =  require("../controllers/occupanciesController");


router.post('/occupancies', occupanciesController.addOccupancy);
router.get('/occupancies', occupanciesController.getAllOccupancies);
router.get('/occupancies/:id', occupanciesController.getOneOccupancy);
router.patch('/occupancies/:id', occupanciesController.updateOccupancy);
router.delete('/occupancies/:id', occupanciesController.deleteOccupancy);


module.exports = router;