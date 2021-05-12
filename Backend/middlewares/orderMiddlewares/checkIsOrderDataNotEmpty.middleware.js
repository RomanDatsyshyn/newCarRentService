module.exports = (req, res, next) => {
  const { fromDate, toDate, carId, price, content } = req.body;

  let errors = {};

  if (!fromDate) {
    errors.fromDate = "Введіть початкову дату орендування";
  }

  if (!toDate) {
    errors.toDate = "Введіть кінцеву дату орендування";
  }

  if (!carId) {
    errors.carId = "Введіть айді авто";
  }

  if (!price) {
    errors.price = "Введіть ціну замовлення";
  }

  if (!content) {
    errors.content = "Введіть додатковий контент";
  }

  if (
    errors.fromDate ||
    errors.toDate ||
    errors.carId ||
    errors.price ||
    errors.content
  ) {
    return next(
      res.json({
        success: false,
        data: null,
        errors: errors,
      })
    );
  } else {
    // if (fromDate > 3) {
    //   errors.town = "Введіть коректний номер міста";
    // }

    // if (toDate.length < 4) {
    //   errors.name = "Введіть повне ім'я автомобіля";
    // }

    if (carId.length < 10) {
      errors.segment = "Введіть коректне айді авто";
    }

    if (price < 20) {
      errors.year = "Мінімальна ціна замовлення - 20$";
    }

    if (content.length > 5) {
      errors.transmission = "Введіть додаткове побажання";
    }
  }

  if (
    errors.fromDate ||
    errors.toDate ||
    errors.carId ||
    errors.price ||
    errors.content
  ) {
    return next(
      res.json({
        success: false,
        data: null,
        errors: errors,
      })
    );
  } else {
    next();
  }
};
