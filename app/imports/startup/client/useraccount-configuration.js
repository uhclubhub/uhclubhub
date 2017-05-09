import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';

Accounts.onLogin(function onLogin() {
  const id = Meteor.userId();
  const onLandingPage = FlowRouter.current().path && (FlowRouter.current().path === '/');
  const initialLogin = (id && onLandingPage);

  if (initialLogin) {
    const username = Meteor.user().profile.name;
    FlowRouter.go(`/${username}/home`);
  }
});

Accounts.onLogout(function logout() {
  FlowRouter.go('/');
});
