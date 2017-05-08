import { Profiles } from '../../api/profiles/profiles.js';
import { _ } from 'meteor/underscore';

const profileSeeds = [
  {
    username: 'cleandro',
    joinedClubs: [
      'Hiking Club',
    ],
  },
];

if (Profiles.find().count() === 0) {
  _.each(profileSeeds, function seedProfiles(profile) {
    Profiles.insert(profile);
  });
}
