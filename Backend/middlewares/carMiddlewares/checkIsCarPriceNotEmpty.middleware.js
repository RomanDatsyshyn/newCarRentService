module.exports = (req, res, next) => {
  const { price } = req.body;

  if (!price) {
    res.status(404).json({
      success: false,
      data: null,
      errors: "Введіть ціну оренди автомобіля",
    });
  } else if (price < 20) {
    res.status(404).json({
      success: false,
      data: null,
      errors: "Мінімальна ціна оренди - 20$",
    });
  } else {
    next();
  }
};
