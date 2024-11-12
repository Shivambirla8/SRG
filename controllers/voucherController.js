const Voucher = require("../models/Voucher");

exports.getAllVouchers = async (req, res) => {
  try {
    const vouchers = await Voucher.find();
    res.json(vouchers);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve vouchers", error });
  }
};

exports.addVoucher = async (req, res) => {
  try {
    const newVoucher = new Voucher(req.body);
    await newVoucher.save();
    res.json(newVoucher);
  } catch (error) {
    res.status(400).json({ message: "Failed to create voucher", error });
  }
};

exports.updateVoucher = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedVoucher = await Voucher.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!updatedVoucher)
      return res.status(404).json({ message: "Voucher not found" });
    res.json(updatedVoucher);
  } catch (error) {
    res.status(500).json({ message: "Failed to update voucher", error });
  }
};

exports.deleteVoucher = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedVoucher = await Voucher.findByIdAndDelete(id);
    if (!deletedVoucher)
      return res.status(404).json({ message: "Voucher not found" });
    res.json({ message: "Voucher deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete voucher", error });
  }
};
