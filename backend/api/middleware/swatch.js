const isUrl = require('is-url');

exports.validateSwatchParams = (req, res, next) => {
  try {
    if ( (typeof req.body.active === "boolean") 
      && (typeof req.body.name === "string") 
      && (req.body.name.replace(/[\W_]+/g," ",'').length > 0) 
      && (typeof req.body.price === "number")
      && (typeof req.body.image === "string") 
      && (typeof req.body.thumb === "string") 
      && (typeof req.body.color === "string")
      && ((isUrl(req.body.image) && isUrl(req.body.thumb))
          || (req.body.image.length === 0 && req.body.thumb.length === 0))
      ) {
        next();
      }
    else {
      const error = new Error("Invalid Parameters.");
      error.status = 400;
      next(error);
    }
  } catch (error) {
    next(error);
  }
}