var app= angular.module('solutions',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : '../views/home.html',
    })
    .when('/projects', {
        templateUrl : '../views/projects.html',
        controller: 'ProjectController',
        controllerAs: 'projectctrl'        
    })
    .when('/impact', {
        templateUrl : '../views/impact.html'
    })
    .when('/about', {
        templateUrl : '../views/about.html'
    })
    .when('/contact', {
        templateUrl : '../views/contact.html'
    })
    .when('/login', {
        templateUrl : '../views/loginReg.html',
        controller : 'AuthController',
        controllerAs : 'auth'
    })
    .when('/signup', {
        templateUrl : '../views/loginReg.html',
        controller : 'AuthController',
        controllerAs : 'auth'    
    })
    .when('/signup/student', {
        templateUrl : '../views/loginReg.html',
        controller : 'AuthController',
        controllerAs : 'auth'    
    })
    .when('/signup/company', {
        templateUrl : '../views/loginReg.html',
        controller : 'AuthController',
        controllerAs : 'auth'
    })    
    .when('/login/reset', {
        templateUrl : '../views/loginReg.html',
        controller : 'AuthController',
        controllerAs : 'auth'
    })
    .when('/dashboard', {
        templateUrl : '../views/dashBoard.html',
        controller : 'AuthController',
        controllerAs : 'auth'        
    })
   	.otherwise({
        redirectTo: '/'
    });
});

app.controller('NavbarController', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});

app.controller('ProjectController', function(){
    this.projects = [
        {
            name: "ProjectX",
            description: "Thomas (Thomas Mann), Costa (Oliver Cooper) and JB (Jonathan Daniel Brown) are three anonymous high-school seniors who are determined to finally make their mark. But how to make themselves unforgettable in the annals of high-school history? With an epic party, of course! The idea is innocent enough, but nothing could prepare the three friends for this shindig. As word of the soiree's awesomeness spreads, dreams are ruined, records are blemished, and legends are born.",
            websiteLink: "http://www.saarang.org",
        },
        {
            name: "ProjectY",
            description: "The Los Alamos Laboratory, also known as Project Y, was a secret laboratory established by the Manhattan Project and operated by the University of California during World War II. Its mission was to design and build the first atomic bombs.",
            websiteLink: "http://www.shaastra.org",
        }    
        //projectlist
    ];
});

app.controller('AuthController',function(){
    this.isUserAuth= false;
    this.temp=0;
    //user-name
    //user-type(student/company)
    this.user= {
            type:'company',
            name:"XXX",
            email:"ABC@XYZ.com",
            projects: [
            {
                name: "ProjectX",
                description: "Thomas (Thomas Mann), Costa (Oliver Cooper) and JB (Jonathan Daniel Brown) are three anonymous high-school seniors who are determined to finally make their mark. But how to make themselves unforgettable in the annals of high-school history? With an epic party, of course! The idea is innocent enough, but nothing could prepare the three friends for this shindig. As word of the soiree's awesomeness spreads, dreams are ruined, records are blemished, and legends are born.",
                websiteLink: "http://www.saarang.org",
            },
            {
                name: "ProjectZ",
                description: "The Los Alamos Laboratory, also known as Project Y, was a secret laboratory established by the Manhattan Project and operated by the University of California during World War II. Its mission was to design and build the first atomic bombs.",
                websiteLink: "http://www.shaastra.org",
            }    
                //projectlist
            ],
    };

});






