module.exports = function(Question) {
  Question.validatesPresenceOf('title', 'text', 'category');
  Question.validatesLengthOf('text', {min: 20, message: {min: 'Text is too short'}});
  Question.validatesLengthOf('title', {min: 15, message: {min: 'Title is too short'}});

  Question.beforeCreate = function(next, modelInstance) {
    if (this.categoryId == undefined) this.categoryId = '55f2fa39402083e10506203d';
    this.timestamp = new Date();
    next();
  };
};
