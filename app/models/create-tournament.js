import DS from 'ember-data';

export default DS.Model.extend({
  toJSON: function(){
      var data = this._super();

      var tournySeriesName = this.get('WSOP.id');
      if(tournySeriesName) {
        data.set('WSOP', {
          className:'tournamentName'
        });
      }




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
