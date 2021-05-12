module.exports = (req, res, next) => {
  const { town } = req.body;

  if (!town) {
    res.json({
      success: false,
      data: null,
      errors: "Введіть місто",
    });
  } else if (town > 3) {
    res.json({
      success: false,
      data: null,
      errors: "Введіть коректний номер міста",
    });
  } else {
    next();
  }
};
