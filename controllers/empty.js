const ErrorResponse = require('../utils/errorResponse');
const Practice = require('../models/Practice');
const Shot = require('../models/Shots');
const boolValidator = require('../utils/booleanChecker');
const { createShot } = require('./Shots');

const createPractice = async (req, res) => {
  const body = req.body;
  let attemptTotal;
  let hitsTotal;

  let shotsArray = body.shotsArray;

  attemptTotal = shotsArray.reduce((accumulator, object) => {
    return accumulator + parseInt(object.shotAttempts);
  }, 0);

  hitsTotal = shotsArray.reduce((accumulator, object) => {
    return accumulator + parseInt(object.shotsHit);
  }, 0);
  console.log(shotsArray);
  let objToSend = {
    user: req.user,
    shotsArray: [],
    dateStart: body.dateStart,
    dateEnd: body.dateEnd,
    totalShotAttempts: attemptTotal,
    totalShotsHit: hitsTotal,
    practiceFG: (hitsTotal / attemptTotal).toFixed(1),
  };
  try {
    for (let i = 0; i < shotsArray.length; i++) {
      let shotObj = {
        user: req.user,
        shotZone: shotsArray[i].shotZone,
        shotAttempts: shotsArray[i].shotAttempts,
        shotsHit: shotsArray[i].shotsHit,
      };
      let shot = new Shot(shotObj);
      shot.populate('user', { username: 1 });
      let obj = await shot.save();
      objToSend.shotsArray.push(obj);
    }
  } catch (error) {
    console.error(error);
    return next(new ErrorResponse('Failed to create shots', 400));
  }

  try {
    console.log(objToSend);
    const practice = new Practice(objToSend);
    practice.populate('user');
    const savedPractice = await practice.save();
    res.status(201).json(savedPractice);
  } catch (err) {
    console.error(err);
    return next(new ErrorResponse('Failed to create practice', 400));
  }
};

const getPractices = async (req, res) => {
  try {
    const practices = await Practice.find({ user: req.user })
      .populate('user', {
        username: 1,
      })
      .populate('shotsArray', { shotZone: 1, shotAttempts: 1, shotsHit: 1 });
    res.status(200).send(practices);
  } catch (err) {
    console.error(err);
    return next(new ErrorResponse('Failed to get practices', 400));
  }
};

const clearPractices = async (req, res) => {
  try {
    const clearPractices = await Practice.remove({});
    res.status(200).send('deleted');
  } catch (err) {
    console.error(err);
    return next(new ErrorResponse('Failed to delete practices', 400));
  }
};

const getPractice = async (req, res) => {
  try {
    const practice = await Practice.findOne({
      id: req.params.id,
      user: req.user,
    });
    if (practice) {
      res.json(practice);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.error(err);
  }
};

const deletePractice = async (req, res) => {
  try {
    const practiceToDelete = await Practice.findById(req.params.id);
    if (!practiceToDelete) {
      return res.status(404).end();
    }

    if (
      practiceToDelete.user &&
      practiceToDelete.user.toString() !== req.user.id
    ) {
      return res.status(401).end();
    }

    await Practice.findByIdAndDelete(req.params.id);
    return res.status(204).end();
  } catch (err) {
    console.log(err);
  }
};

const updatePractice = async (req, res) => {
  try {
    const body = req.body;
    const practiceObj = {
      dateStart: body.dateStart,
      dateEnd: body.dateEnd,
      shotType: body.shotType,
      shotsTaken: body.shotsTaken,
      shotsHit: body.shotsHit,
      intensity: body.intensity,
      rebounder: boolValidator(req.body.rebounder),
      guarded: boolValidator(req.body.guarded),
      user: req.user,
    };
    const practiceToUpdate = await Practice.findById(req.params.id);
    if (!practiceToUpdate) {
      return res.status(404).end();
    }
    Practice.findByIdAndUpdate(req.params.id, practiceObj, {
      new: true,
    }).then((updatedPractice) => {
      res.json(updatedPractice);
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPractice,
  getPractices,
  clearPractices,
  getPractice,
  deletePractice,
  updatePractice,
};
