import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';

Accounts.onLogin(function onLogin() {
  const id = Meteor.userId();

  if (id) {
    FlowRouter.go('/home');
  }
});

Accounts.onLogout(function logout() {
  FlowRouter.go('/');
});
