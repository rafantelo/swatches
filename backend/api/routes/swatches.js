const express = require("express");
const router = express.Router();
const middleware = require('../middleware/swatch');
const SwatchesController = require('../controllers/swatches');

router.get("/",  SwatchesController.swatchesGetAll);
router.post("/", middleware.validateSwatchParams, SwatchesController.swatchesNew);
router.get("/delete/:swatchName", SwatchesController.swatchesDelete); //using path  /delete/  because the instructions are explicit to use only POST, GET, PUT (DELETE is not included)
router.get("/:swatchName", SwatchesController.swatchesGet);
router.put("/:swatchName", middleware.validateSwatchParams, SwatchesController.swatchesUpdate);

module.exports = router;
