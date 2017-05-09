import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { Clubs } from '/imports/api/clubs/clubs.js';

export const options = ['All', 'Dance', 'sports', 'Music', 'Math', 'Programming', 'Religion', 'Community Service',, 'Business', 'Art & Design', 'Literature'];
const selectedInterestsKey = 'selectedInterests';

Template.Browse_Clubs_Page.onCreated(function onCreated() {
  this.subscribe('Clubs');
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(selectedInterestsKey, undefined);
});

Template.Browse_Clubs_Page.onRendered(function onRendered() {
  this.$('.dropdown')
      .dropdown();
});

Template.Browse_Clubs_Page.helpers({
  clubList() {
    // Initialize selectedInterests to all of them if messageFlags is undefined.
    const allClubs = Clubs.find().fetch();
    if (!Template.instance().messageFlags.get(selectedInterestsKey)) {
      return allClubs;
    }
    // Find all clubs with the currently selected interests.

    const selectedInterests = Template.instance().messageFlags.get(selectedInterestsKey);
    if (selectedInterests === 'All') {
      return allClubs;
    }
    return _.filter(allClubs, club => _.intersection([club.interest], [selectedInterests]).length > 0);
  },
  interests() {
    return [{ label: 'All' }, { label: 'Dance' }, { label: 'sports' }, { label: 'Music' }, { label: 'Math' }, { label: 'Programming' }, { label: 'Religion' }, { label: 'Community Service' }, { label: 'Business' }, { label: 'Art & Design' }, { label: 'Literature' }];
  },
});

Template.Browse_Clubs_Page.events({
  'change #select-form'(event, template) {
    event.preventDefault();
    const selectedOption = template.$('#select-form').val();

    template.messageFlags.set(selectedInterestsKey, selectedOption);

   // instance.messageFlags.set(selectedInterestsKey, _.map(selectedOptions, (option) => option.value));
  },
});
