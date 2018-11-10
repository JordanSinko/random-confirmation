let _confirmations = [
  'All right',
  'Certainly',
  'Definitely',
  'Okay',
  'Sounds good',
  'Very well',
  'Absolutely',
  'Sure',
  'Indeed',
  'Of course'
];

module.exports = () => _confirmations[Math.floor(Math.random() * _confirmations.length)];
module.exports.all = () => _confirmations;
module.exports.add = confirmation => _confirmations.push(confirmation) && undefined;
module.exports.set = confirmations => {
  _confirmations = confirmations;
};
