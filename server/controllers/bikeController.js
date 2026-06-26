const Bike = require("../models/Bike");

exports.addBike = async (req, res) => {
  try {
    const bike = await Bike.create({
      ownerId: req.user.id,

      bikeName: req.body.bikeName,

      bikeNumber: req.body.bikeNumber,

      description: req.body.description,

      pricePerHour: req.body.pricePerHour,

      images: req.body.images,

      location: req.body.location,
    });

    res.status(201).json(bike);
  } catch (err) {
    res.status(500).json(err);
  }
};


exports.getBikes =
async(req,res)=>{

    const bikes =
    await Bike.find({
        available:true,
        inRide:false
    });

    res.json(bikes);
};