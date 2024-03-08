const Staff = require("../model/staffModel");
exports.createDoc = async (req, res) => {
  const { name, email } = req.body;
  const staff = await Staff.create({
    name: name,
    email: email,
  });
  return res.send(staff);
};
