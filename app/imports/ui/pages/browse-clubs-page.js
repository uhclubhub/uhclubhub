import { Template } from 'meteor/templating';
import { Clubs } from '../../api/clubs/clubs.js';

// The Header menu does not use dropdown menus, but most menus do.
// Here's how to do the required initialization for Semantic UI dropdown menus.

Template.Browse_Clubs_Page.onRendered(function enableDropDown() {
  this.$('.dropdown')
      .dropdown();
});

Template.Browse_Clubs_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  clubList() {
    return Clubs.find();
  },
});
