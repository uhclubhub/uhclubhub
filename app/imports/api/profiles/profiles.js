import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Profiles = new Mongo.Collection('Profiles');

/**
 * Create the schema for Profiles
 */
export const ProfilesSchema = new SimpleSchema({
  username: {
    label: 'username',
    type: String,
    optional: false,
    max: 200,
  },
  joinedClubs: {
    label: 'joinedClubs',
    type: Array,
    optional: true,
    max: 200,
  },
  'joinedClubs.$': {
    type: String,
  },
});

Profiles.attachSchema(ProfilesSchema);
