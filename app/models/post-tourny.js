import DS from 'ember-data';

export default DS.Model.extend({
  TournamentName: DS.attr('string'),
  EventNumber: DS.attr('number'),
  BuyIn: DS.attr('number'),
  EventName: DS.attr('string'),
  TournamentDate: DS.attr('date'),
});
