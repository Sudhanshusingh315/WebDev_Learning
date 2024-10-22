const Right = require("../model/rightModel");

exports.createRight = async (req, res) => {
  const right = await Right.create({
    staff_id: req.body.staff_id,
    right: req.body.right,
  });
  return res.send(right);
};

// do this with get and post

// doing this with post first
exports.getStaffData = async (req, res) => {
  const stafdata = await Right.find({ _id: req.body.staff_id }).populate(
    "staff_id"
  );
  res.send(stafdata);
};
