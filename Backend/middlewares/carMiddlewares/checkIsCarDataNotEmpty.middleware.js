module.exports = (req, res, next) => {
  const { town, name, segment, year, price, transmission, engine } = req.body;

  let errors = {};

  if (!town) {
    errors.town = "Введіть місто";
  }

  if (!name) {
    errors.name = "Введіть ім'я автомобіля";
  }

  if (!segment) {
    errors.segment = "Введіть сегмент авто";
  }

  if (!year) {
    errors.year = "Введіть рік авто";
  }

  if (!price) {
    errors.price = "Введіть ціну авто за добу";
  }

  if (!transmission) {
    errors.transmission = "Введіть тип трансмісії";
  }

  if (!engine) {
    errors.engine = "Введіть тип двигуна";
  }

  if (
    errors.town ||
    errors.name ||
    errors.segment ||
    errors.year ||
    errors.price ||
    errors.transmission ||
    errors.engine
  ) {
    return next(
      res.json({
        success: false,
        data: null,
        errors: errors,
      })
    );
  } else {
    if (town > 3) {
      errors.town = "Введіть коректний номер міста";
    }

    if (name.length < 4) {
      errors.name = "Введіть повне ім'я автомобіля";
    }

    if (segment > 4) {
      errors.segment = "Введіть коректний номер міста сегментa";
    }

    if (year < 2010 || year > 2022) {
      errors.year = "Рік авто має бути в межах 2010-2022";
    }

    if (price < 20) {
      errors.price = "Мінімальна ціна оренди - 20$";
    }

    if (transmission > 2) {
      errors.transmission = "Введіть коректний номер трансмісії";
    }

    if (engine.length < 4) {
      errors.engine = "Введіть тип двигуна";
    }
  }

  if (
    errors.town ||
    errors.name ||
    errors.segment ||
    errors.year ||
    errors.price ||
    errors.transmission ||
    errors.engine
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
