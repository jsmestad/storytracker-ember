export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);

  var iterations = server.createList('iteration', 10);
  iterations.forEach(function(elem, index) {
    server.createList('story', 8, {iterationId: elem.id});
  });
  // server.create('user', {admin: true});
}
