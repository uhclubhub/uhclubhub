import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { Clubs } from '/imports/api/clubs/clubs.js';

export const options = ['All','Dance', 'sports', 'Music', 'Math'];
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
      //Template.instance().messageFlags.set(selectedInterestsKey, options);
    }
    // Find all clubs with the currently selected interests.

    const selectedInterests = Template.instance().messageFlags.get(selectedInterestsKey);
    
    if(selectedInterests=="All"){
      return allClubs;
    }
    return _.filter(allClubs, club => _.intersection([club.interest], [selectedInterests]).length > 0);
  },
  interests(){

    return [{label:'All'},{label:'Dance'}, {label:'sports'}, {label:'Music'}, {label:'Math'}];
  }
});

Template.Browse_Clubs_Page.events({
  'change #select-form'(event, template,instance) {
    event.preventDefault();
    //const selectedOption=event.target.Interests.value;
    const selectedOption=template.$("#select-form").val();

    template.messageFlags.set(selectedInterestsKey, selectedOption);

    //const selectedOptions = _.filter(event.target.Interests.selectedOptions, (option) => option.selected);
   // instance.messageFlags.set(selectedInterestsKey, _.map(selectedOptions, (option) => option.value));
  },
});


/**
import { Template } from 'meteor/templating';
import { Clubs } from '../../api/clubs/clubs.js';
import { _ } from 'meteor/underscore';


// The Header menu does not use dropdown menus, but most menus do.
// Here's how to do the required initialization for Semantic UI dropdown menus.
export const options = ['Dance', 'sports', 'Music', 'Math'];
let selectedOptions = 'All';

Template.Browse_Clubs_Page.onRendered(function enableDropDown() {
  this.$('.dropdown')
      .dropdown();
});
Template.Browse_Clubs_Page.onCreated(function onCreated() {
  this.subscribe('Clubs');
});

Template.Filter_Page.events({
  'change .filter-data-form'(event, instance) {
    event.preventDefault();
    selectedOptions = _.filter(event.target.Interests.selectedOptions, (option) => option.selected);
    instance.messageFlags.set(options, _.map(selectedOptions, (option) => option.value));
  },
});

Template.Browse_Clubs_Page.helpers({

  clubList(){
    return Clubs.find({ interest: selectedOptions });
  },

});
*/

