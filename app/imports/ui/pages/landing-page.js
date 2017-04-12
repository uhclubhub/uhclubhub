import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Landing_Page.events({
  'click .button'(event) {
    event.preventDefault();
    FlowRouter.go('Login_Page');
  },
});
