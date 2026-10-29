
const { model } = require("mongoose");
const { PositionSchema } = require("../schemas/PositionSchema");

const PositionModel = model("order", PositionSchema);

module.exports = { PositionModel };
