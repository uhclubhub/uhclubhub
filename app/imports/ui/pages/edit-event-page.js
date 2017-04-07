import { Template } from 'meteor/templating';

// The Header menu does not use dropdown menus, but most menus do.
// Here's how to do the required initialization for Semantic UI dropdown menus.
Template.Edit_Event_Page.onRendered(function enableDropDown() {
  this.$('.dropdown')
      .dropdown();
});