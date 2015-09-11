/**
 * Created by nevena on 10.9.15..
 */
app.factory('detailsService', function( $resource) {
  var relationship = [
    {name: "Crushing"},
    {name: "Dating"},
    {name: "Divorded"},
    {name: "Engaged"},
    {name: "In a relationship"},
    {name: "It's complicated"},
    {name: "Just Broke Up"},
    {name: "Married"},
    {name: "No Comment"},
    {name: "Separated"},
    {name: "Single"},
    {name: "Taking a Break"},
    {name: "Widowed"}
  ];

  var occupation = [
    {name: "Administrative"},
    {name: "Arts"},
    {name: "Computers"},
    {name: "Customer Service"},
    {name: "Education"},
    {name: "Executive"},
    {name: "Finance"},
    {name: "Healthcare"},
    {name: "IT"},
    {name: "Law"},
    {name: "Marketing"},
    {name: "Military"},
    {name: "No comment"},
    {name: "Nonprofit"},
    {name: "Other"},
    {name: "Real Estate"},
    {name: "Restaurant"},
    {name: "Retail"},
    {name: "Sales"},
    {name: "Student"}
  ];

  function getRelationship() {
    return relationship;
  }

  function getOccupation() {
    return occupation;
  }

  return {
    getRelationship: getRelationship,
    getOccupation: getOccupation
  }

});
