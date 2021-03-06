import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.modal('basic-modal', {
    withParams: 'basicModalIsOpen'
  });

  this.modal('lf-drawer1', {
    withParams: 'modal1IsOpen',
    dialogClass: 'lf-drawer-dialog'
  });

  this.modal('lf-drawer2', {
    withParams: 'modal2IsOpen',
    dialogClass: 'animation-drawer'
  });

  this.route('slide-1');
  this.route('slide-2');
  this.route('slide-3');
});

export default Router;
