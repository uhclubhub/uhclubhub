import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Clubs, ClubsSchema } from '../../api/clubs/clubs.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

const displayErrorMessages = 'displayErrorMessages';
export const interestList = ['Dance', 'sports', 'Music', 'Math', 'Programming', 'Religion',
  'Community Service', 'Business', 'Art & Design', 'Literature'];

Template.Edit_Club_Page.onRendered(function enableDropDown() {
  this.$('.dropdown')
      .dropdown();
});

Template.Edit_Club_Page.onCreated(function onCreated() {
  this.subscribe('Clubs');
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ClubsSchema.namedContext('Edit_Club_Page');
});

Template.Edit_Club_Page.helpers({
  clubDataField(fieldName) {
    const clubData = Clubs.findOne(FlowRouter.getParam('_id'));
    // See https://dweldon.silvrback.com/guards to understand '&&' in next line.
    return clubData && clubData[fieldName];
  },
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
  interestArea() {
    return _.map(interestList, function makeInterestObject(interest) { return { label: interest }; });
  },

});


Template.Edit_Club_Page.events({
  'submit .clubs-form'(event, instance) {
    event.preventDefault();
    // Get values
    const clubName = event.target.clubName.value;
    const firstName = event.target.firstName.value;
    const middleName = event.target.middleName.value;
    const lastName = event.target.lastName.value;
    const uhID = event.target.uhID.value;
    const email = event.target.Email.value;
    const phone = event.target.Phone.value;
    const clubURL = event.target.clubURL.value;
    const picture = event.target.picture.value;
    const description = event.target.description.value;
    const interest = event.target.interestArea.value;

    const updatedClub = { clubName, firstName, middleName, lastName, uhID, email, phone, clubURL,
      interest, description, picture };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that updatedClub reflects what will be inserted.
    ClubsSchema.clean(updatedClub);
    // Determine validity.
    instance.context.validate(updatedClub);
    if (instance.context.isValid()) {
      Clubs.update(FlowRouter.getParam('_id'), { $set: updatedClub });
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Browse_Clubs_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

/**
 Template.Edit_Club_Page.helpers({
  interestArea() {
    return _.map(interestList, function makeInterestObject(interest) { return { label: interest }; });
  },
});*/
