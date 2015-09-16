module.exports = function(Question) {
  Question.validatesPresenceOf('title', 'text', 'category');
  Question.validatesLengthOf('text', {min: 15, message: {min: 'Text is too short'}});
  Question.validatesLengthOf('title', {min: 10, message: {min: 'Title is too short'}});

  Question.beforeCreate = function(next, modelInstance) {

    var self = this;
    if (this.categoryId == undefined) {
      Category.findOne({name: "Other"},
        function successCb(value, responseHeaders){
          self.categoryId = value.id;
        },
        function error(error){
          self.categoryId = '55f2fa39402083e10506203d';
        }
      );
    }
    this.timestamp = new Date();
    next();
  };
};
