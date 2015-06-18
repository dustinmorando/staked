import DS from 'ember-data';

export default DS.Model.extend({
  toJSON: function(){
      var data = this._super();

      var tournySeriesName = this.get('tournamentName.id');
      if()




    //   var userId = this.get('createdBy.id');
    //   if(userId) {
    //     data.set('createdBy', {
    //       __type: 'Pointer',
    //       className: '_User',
    //       objectId: userId
    //     });
    //   }
    //
      return data;
    }
});
