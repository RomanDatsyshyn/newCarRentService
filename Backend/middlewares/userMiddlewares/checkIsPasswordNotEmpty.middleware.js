module.exports = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return next(res.status(404).json({ error: `Введіть новий пароль` }));
  }

  if (password.length < 6) {
    return next(
      res.status(404).json({ error: "Пароль має бути більше ніж 5 символів" })
    );
  }

  next();
};
