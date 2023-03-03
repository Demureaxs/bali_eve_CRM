const Wedding = require('../models/weddings');

async function getWeddings(req, res, next) {
  try {
    const weddings = await Wedding.find({});
    res.json(weddings);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server Error' });
  }
}

async function getWedding(req, res, next) {
  const id = req.params.id;
  try {
    const wedding = await Wedding.findById(id);
    res.status(200).json(wedding);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server Error' });
  }
}

async function createWedding(req, res, next) {
  const {
    agent,
    name,
    email,
    date,
    venue,
    decoration,
    catering,
    photographer,
    videographer,
    vendorProgress,
    payments,
    todos,
  } = req.body;
  const newWedding = new Wedding({
    agent,
    name,
    email,
    date,
    venue,
    decoration,
    catering,
    photographer,
    videographer,
    vendorProgress,
    payments,
    todos,
  });
  try {
    await newWedding.save();
    res.json(newWedding);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server Error' });
  }
}

async function updateWedding(req, res, next) {
  const id = req.params.id;
  const {
    agent,
    name,
    email,
    date,
    venue,
    decoration,
    catering,
    photographer,
    videographer,
    vendorProgress,
    payments,
    todos,
  } = req.body;
  try {
    const wedding = await Wedding.findByIdAndUpdate(id);
    if (!wedding) {
      return res.status(400).json({ error: 'Wedding not found' });
    }
    wedding.agent = agent;
    wedding.name = name;
    wedding.email = email;
    wedding.date = date;
    wedding.venue = venue;
    wedding.decoration = decoration;
    wedding.catering = catering;
    wedding.photographer = photographer;
    wedding.videographer = videographer;
    wedding.vendorProgress = vendorProgress;
    wedding.payments = payments;
    wedding.todos = todos;

    await wedding.save();
    res.status(200).json(wedding);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server Error' });
  }
}

async function deleteWedding(req, res) {
  const id = req.params.id;
  try {
    const wedding = await Wedding.findByIdAndDelete(id);
    if (!wedding) {
      return res.status(400).json({ error: 'Wedding not found' });
    }
    res.status(200).json({ message: 'Successfully deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server Error' });
  }
}

module.exports = {
  getWeddings,
  getWedding,
  createWedding,
  updateWedding,
  deleteWedding,
};
