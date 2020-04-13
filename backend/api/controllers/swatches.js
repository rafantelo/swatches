const Swatch = require("../models/swatch");

exports.swatchesGetAll = (req, res, next) => {
  Swatch.find()
    .select("active name price image thumb color date")
    .exec()
    .then(result => {
      res.status(200).json({
        data: result.map((el) => { return {
          name  : el.name,
          active: el.active,
          price : el.price,
          image : el.image,
          thumb : el.thumb,
          color : el.color,
          date  : el.date
        }})
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
};

exports.swatchesGet = (req, res, next) => {
  const name = req.params.swatchName.replace(/[\W_]+/g," ",'');
  Swatch.findOne({name: name})
  .select("active name price image thumb color date")
  .exec()
  .then(result => {
    if (result) {
      const tempResult = {
        name  : result.name,
        active: result.active,
        price : result.price,
        image : result.image,
        thumb : result.thumb,
        color : result.color,
        date  : result.date
      };
      res.status(200).json({
        data: tempResult
      });
    } 
    else 
      res
        .status(404)
        .json({ 
          message: "No swatch found."
        });
  })
  .catch(error => {
    res.status(500).json({ 
      error: error 
    });
  });
};

exports.swatchesNew = (req, res, next) => {
  const name = req.body.name.replace(/[\W_]+/g," ",'');
  const swatch = new Swatch({
    active: req.body.active,
    name  : name,
    price : `$${req.body.price.toFixed(2)}`,
    image : req.body.image,
    thumb : req.body.thumb,
    color : req.body.color,
    date  : new Date()
  });
  swatch.save()
    .then( () => {
      res.status(201).json({
        message: `Swatch ${name} created successfully`
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
};

exports.swatchesUpdate = (req, res, next) => {
  const name = req.body.name.replace(/[\W_]+/g," ",'');
  Swatch.findOneAndUpdate({ name: name }, {
    active: req.body.active,
    name  : name,
    price : `$${req.body.price.toFixed(2)}`,
    image : req.body.image,
    thumb : req.body.thumb,
    color : req.body.color
  })
  .exec()
  .then( () => {
    res.status(200).json({
      message: `Swatch ${name} updated successfully`
    });
  })
  .catch(error => {
    res.status(500).json({
      error: error
    });
  });
};

exports.swatchesDelete = (req, res, next) => {
  const name = req.params.swatchName.replace(/[\W_]+/g," ",'');
  Swatch.deleteOne({ name: name })
    .exec()
    .then( () => {
      res.status(200).json({
        message: `Swatch ${name} deleted successfully`
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
};
