import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Clubs = new Mongo.Collection('Clubs');

/**
 * Create the schema for Clubs
 */
export const ClubsSchema = new SimpleSchema({
  clubName: {
    label: 'clubName',
    type: String,
    optional: false,
    max: 200,
  },
  firstName: {
    label: 'firstName',
    type: String,
    optional: false,
    max: 200,
  },
  middleName: {
    label: 'middleName',
    type: String,
    optional: true,
    max: 200,
  },
  lastName: {
    label: 'lastName',
    type: String,
    optional: false,
    max: 200,
  },

  uhID: {
    label: 'uhID',
    type: Number,
    optional: false,
  },

  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 200,
  },

  phone: {
    label: 'phone',
    type: Number,
    optional: false,
  },
  clubURL: {
    label: 'clubURL',
    type: String,
    optional: false,
    max: 200,
  },
  interest: {
    label: 'interest',
    type: String,
    optional: false,
    max: 200,
  },
  description: {
    label: 'description',
    type: String,
    optional: false,
    max: 200,
  },
  picture: {
    label: 'picture',
    type: String,
    optional: false,
    max: 200,
  },
});

Clubs.attachSchema(ClubsSchema);
