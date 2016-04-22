import { Config } from './entities';

export default class RoutesConfig extends Config {
  static $inject = ['$stateProvider', '$urlRouterProvider']

  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      });

    this.$urlRouterProvider.otherwise('tab/chats');
  }
}