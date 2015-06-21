import DS from 'ember-data';

export default DS.Model.extend({
  TournamentName: DS.attr('string'),
  EventNumber: DS.attr('number'),
  BuyIn: DS.attr('number'),
  EventName: DS.attr('string'),
  TournamentDate: DS.attr('date'),
  
});




// // app/models/blog-post.js
// var attr = DS.attr,
//     hasMany = DS.hasMany;
//
// export default DS.Model.extend({
//   title: attr(),
//   createdAt: attr('date'),
//
//   comments: hasMany('comment')
// });
//
// // app/models/comment.js
// var attr = DS.attr,
//     belongsTo = DS.belongsTo;
//
// export default DS.Model.extend({
//   body: attr(),
//   username: attr(),
//
//   post: belongsTo('blogPost')
// });
