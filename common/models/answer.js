module.exports = function(Answer) {
  Answer.beforeDestroy = function(next){
    Answer.comment.destroyAll(
      {id: this.id},
      function(value, responseHeaders){
        //TODO: obrisati i lajkove mada bi to trebalo da se radi u Post-u
        next();
      },
      function(error){}
    );
  }
};
