import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  selectTournySeries: function() {
    this.get('model').save().then(function(){
      console.log("Youre amazing!!!!");
    });

    this.transitionToRoute('dashboard');
  }
}

});



// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//
//   // names: ["customer", "contractor"],
//
//   actions: {
//     save: function() {
//       var self = this;
//       var user = this.get('model');
//       user.username = user.email;
//       user.save().then(function() {
//         self.get('session').authenticate('authenticator:parse-email', user);
//       });
//       this.transitionToRoute('options');
//     }
//   }
// });
