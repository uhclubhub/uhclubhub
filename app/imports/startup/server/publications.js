import { Clubs } from '../../api/clubs/clubs.js';
import { Profiles } from '../../api/profiles/profiles.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Clubs', function publishClubs() {
  return Clubs.find();
},
'Profiles', function publishClubs() {
  return Profiles.find();
});

