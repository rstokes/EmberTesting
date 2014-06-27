App = Ember.Application.create();

App.Person = Ember.Object.extend({
  firstName: '',
  lastName: '',
  fullName: function() {
    var firstName = this.get('firstName');
    var lastName = this.get('lastName');
    return firstName + ' ' + lastName;
  }.property()
});
