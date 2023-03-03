const Wedding = require('../models/weddings');

// the async function for getWeddings
async function getWeddings(req, res, next) {
  try {
    // assign the return value of finding all weddings in the database to weddings
    const weddings = await Wedding.find({});
    // return the weddings in json format
    res.json(weddings);
    // catch the error
  } catch (err) {
    // log the error
    console.log(err);
    // respond with status 500 and error message
    res.status(500).json({ error: 'Server Error' });
  }
}

// function for getting just one wedding
async function getWedding(req, res, next) {
  // take the id from req.params
  const id = req.params.id;

  try {
    // assing wedding to the result of finding wedding by id
    const wedding = await Wedding.findById(id);
    // respond with status 200 and json parsed wedding
    res.status(200).json(wedding);
    // catch error
  } catch (err) {
    // log error
    console.log(err);
    // respond with status 500 and error message
    res.status(500).json({ error: 'Server Error' });
  }
}

// function for creating weddings
async function createWedding(req, res, next) {
  // destructure all fields from the request body
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

  // assign new wedding the value of the newWedding call
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
    // await saving the wedding
    await newWedding.save();
    // respond with the newWedding
    res.json(newWedding);
    // catch any errors
  } catch (err) {
    // log the error
    console.log(err);
    // respond with a status 500 and error message
    res.status(500).json({ error: 'Server Error' });
  }
}

// function to update wedding
async function updateWedding(req, res, next) {
  // take the id from the request parameters
  const id = req.params.id;
  // destructure the fields from the request body
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
    // assign wedding to the value of findbyidandupdate(using the id)
    const wedding = await Wedding.findByIdAndUpdate(id);
    // if no wedding
    if (!wedding) {
      // respond with status 400 and error message
      return res.status(400).json({ error: 'Wedding not found' });
    }
    // otherwise assign the values of each field as follows
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

    // await saving the wedding
    await wedding.save();
    // send status 200 with json formatted wedding
    res.status(200).json(wedding);
    // catch error
  } catch (err) {
    // log error
    console.log(err);
    // respond with status 500 and error message
    res.status(500).json({ error: 'Server Error' });
  }
}

// function to delete a wedding
async function deleteWedding(req, res) {
  // take the id from the request parameters
  const id = req.params.id;

  try {
    // assing wedding the value of findbyidanddelete(using the id)
    const wedding = await Wedding.findByIdAndDelete(id);
    // if no wedding is found
    if (!wedding) {
      // return a status 400 and a json format error message
      return res.status(400).json({ error: 'Wedding not found' });
    }
    // otherwise send status 200 and success message
    res.status(200).json({ message: 'Successfully deleted' });
    // catch error
  } catch (err) {
    // log error
    console.log(err);
    // respond with status 500 and json format error
    res.status(500).json({ error: 'Server Error' });
  }
}

// export each of the controllers
module.exports = {
  getWeddings,
  getWedding,
  createWedding,
  updateWedding,
  deleteWedding,
};
