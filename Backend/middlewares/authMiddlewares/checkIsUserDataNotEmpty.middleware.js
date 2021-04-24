module.exports = async (req, res, next) => {
  const { name, age, phone, password } = req.body;

  let errors = {};

  if (!name) {
    errors.name = "Введіть ваше ім'я";
  }

  if (!age) {
    errors.age = "Введіть ваш вік";
  }

  if (!phone) {
    errors.phone = "Введіть номер телефону";
  }

  if (!password) {
    errors.password = "Введіть пароль";
  }

  if (errors.name || errors.age || errors.phone || errors.password) {
    res.status(404).json({
      success: false,
      data: null,
      errors: errors,
    });
  } else {
    if (name.length < 3) {
      errors.name = "Введіть ваше повне ім'я";
    }

    if (age < 21) {
      errors.age = "Реєстрація доступна для осіб віком від 21";
    }

    if (phone.length < 9) {
      errors.phone = "Введіть ваш номер телефону правильно";
    }

    if (password.length < 5) {
      errors.password = "Введіть надійний пароль";
    }
  }

  if (errors.name || errors.age || errors.phone || errors.password) {
    res.status(404).json({
      success: false,
      data: null,
      errors: errors,
    });
  } else {
    next();
  }
};
