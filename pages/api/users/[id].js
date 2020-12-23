export default (req, res) => {
  const {
    query: { id },
  } = req;

  res.status(200).json({
    email: "billy@yrlang.com",
    id,
    name: "Billy",
  });
};
