module.exports = (req, res, next) => {
  const { segment } = req.body;

  if (!segment) {
    res.json({
      success: false,
      data: null,
      errors: "Введіть сегмент авто",
    });
  } else if (segment > 4) {
    res.json({
      success: false,
      data: null,
      errors: "Введіть коректний номер сегменту",
    });
  } else {
    next();
  }
};
