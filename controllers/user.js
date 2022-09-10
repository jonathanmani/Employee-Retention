const User = require('../models/User');
const MatCan = require('../models/MatCan');
const MatRep = require('../models/MatRep');
const findReplacements = require('../services/findReplacements');
const findCandidates = require('../services/findCandidates');

exports.getUserDetails = async (req, res, next) => {
  console.log()
  const user = await User.findById(req.user.id);
  const candidate = await MatCan.find({ user: req.params.id });
  const replacement = await MatRep.find({ user: req.params.id });

  if (!user) {
    res.status(404).end();
  } else {
    if (candidate) {
      res.json({ user, candidate });
    } else if (replacement) {
      res.json({ user, replacement });
    } else {
      res.json({ user });
    }
  }
};

exports.getAvailableCandidates = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  const replacement = await MatRep.find({ user: req.params.id });

  if (!user) res.status(404).end();

  if (!replacement) res.status(403).end();

  const candidates = findCandidates(user);

  res.json(candidates);
};

exports.getAvailableReplacements = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  const candidate = await MatCan.find({ user: req.params.id });

  if (!user) res.status(404).end();

  if (!candidate) res.status(403).end();

  const replacements = findReplacements(user);

  res.json(replacements);
};
