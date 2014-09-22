angular.module('ionicApp', ['ionic','ngResource'])

    .factory('userResource', function($resource) {
        return $resource('http://localhost:2403/user1/');
    })

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('signin', {
                url: '/sign-in',
                templateUrl: 'templates/sign-in.html',
                controller: 'SignInCtrl'
            })
            .state('signup', {
                url: '/sign-up',
                templateUrl: 'templates/sign-up.html',
                controller: 'SignUpCtrl'
            })
            .state('forgotpassword', {
                url: '/forgot-password',
                templateUrl: 'templates/forgot-password.html'
            })
            .state('tabs', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })
            .state('tabs.home', {
                url: '/home',
                views: {
                    'home-tab': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeTabCtrl'
                    }
                }
            })
            .state('tabs.facts', {
                url: '/facts',
                views: {
                    'home-tab': {
                        templateUrl: 'templates/facts.html'
                    }
                }
            })
            .state('tabs.facts2', {
                url: '/facts2',
                views: {
                    'home-tab': {
                        templateUrl: 'templates/facts2.html'
                    }
                }
            })
            .state('tabs.about', {
                url: '/about',
                views: {
                    'about-tab': {
                        templateUrl: 'templates/about.html'
                    }
                }
            })
            .state('tabs.navstack', {
                url: '/navstack',
                views: {
                    'about-tab': {
                        templateUrl: 'templates/nav-stack.html'
                    }
                }
            })
            .state('tabs.contact', {
                url: '/contact',
                views: {
                    'contact-tab': {
                        templateUrl: 'templates/contact.html'
                    }
                }
            });


        $urlRouterProvider.otherwise('/sign-in');

    })

    .controller('SignInCtrl', function($scope, $state) {

        $scope.signIn = function(user) {
            console.log('Sign-In', user);
            $state.go('tabs.home');
        };

    })

    .controller('SignUpCtrl', function($scope, $state, userResource) {


        // Our form data for creating a new post with ng-model
        $scope.user = {};
        $scope.signUp = function() {
            //$scope.user.id=1;
            var userR = new userResource($scope.user);
            userR.$save();
            console.log('Sign-Up', $scope.user);
            $state.go('tabs.home');
        }


    })
    .controller('HomeTabCtrl', function($scope) {
        console.log('HomeTabCtrl');
    });
