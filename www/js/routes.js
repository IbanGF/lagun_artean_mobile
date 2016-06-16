function routes($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html',
        controller: 'signupController'
      }
    }
  })

    .state('app.travels', {
    url: '/travels',
    views: {
      'menuContent': {
        templateUrl: 'templates/travels.html',
        controller: 'travelsController'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      }
    }
  })

  .state('app.voyage', {
    url: '/voyage/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/voyage.html',
        controller: 'voyageController'
      }
    }
  })

  .state('app.voyage.amis', {
    url: '/amis',
    views: {
      'voyageContent': {
        templateUrl: 'templates/amis.html',
      }
    }
  })

  .state('app.voyage.calendar', {
    url: '/calendar',
    views: {
      'voyageContent': {
        templateUrl: 'templates/calendar.html',
      }
    }
  })

  .state('app.voyage.budget', {
    url: '/budget',
    views: {
      'voyageContent': {
        templateUrl: 'templates/budget.html',
      }
    }
  })

  .state('app.mygroups', {
    url: '/mygroups',
    views: {
      'menuContent': {
        templateUrl: 'templates/mygroups.html',
        controller: 'mygroupsController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');

  $httpProvider.interceptors.push(function($q, $location, $rootScope) {
    return {
      'request': function(config) {
        config.headers = config.headers || {};
        if ($rootScope.token) {
          config.headers.authorization = $rootScope.token;
        }
        return config;
      },
      'responseError': function(response) {
        if (response.status === 401 || response.status === 403) {
          $location.path('/login');
        }
        return $q.reject(response);
      }
    };
  });
}
