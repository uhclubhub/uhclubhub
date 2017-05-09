import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { Clubs } from '/imports/api/clubs/clubs.js';
import { Profiles } from '/imports/api/profiles/profiles.js';

Template.Home_Page.onCreated(function onCreated() {
  this.subscribe('Clubs');
  this.subscribe('Profiles');
  this.messageFlags = new ReactiveDict();
});

Template.Home_Page.helpers({
  joinedClubsList() {
    const allClubs = Clubs.find().fetch();
    const allProfiles = Profiles.find().fetch();
    const userProfile = _.find(allProfiles, function (profile) {
      return profile.username === Meteor.user().profile.name;
    });
    const joinedClubs = userProfile.joinedClubs;
    return _.filter(allClubs, function (club) { return _.contains(joinedClubs, club.clubName); });
  },
});
