test('hello world', function() {
  equal(1, 1, "");
});

test('hello world', function() {
  equal(2, 2, "");
});

test('fullName property returns both first and last', function() {
  var person = App.Person.create({firstName: 'toran', lastName: 'billups'});
  var result = person.get('fullName');
  equal(result, 'toran billups', "fullName was " + result);
});
