angular.module('portalApp')

.controller('skylarCtrl', ['$scope', '$http', '$q', 'skylarFactory', function ($scope, $http, $q, skylarFactory) {

    // Import variables and functions from service
    $scope.item ={value:''};
    $scope.item2 = {value:''};
    $scope.item3 = {value:''};
    $scope.item4 = {value:''};
    
     
    
    // Model for the search and list example
    $scope.model = {value: [{
        
  		star: "true",
        title: "Campus Tech",
        note: "*Great Deal: get 30% off on printers befor Oct 30!",
        location: "Location: Student Life Center - Lower Level",
        hours:"Regular Hours: Monday-Friday, 9a.m-5p.m",  
        
        services: [    
        {title: "Services",
        details: "item 1 details",
        category: '2'},
                            ],
        
        subtitle1: "Stationery:",
        details: [    
        {title: "Notebooks",
        details: "price $10",
        category: '2'},
            
        {title: "Pencils",
        details: "item 1 details",
        category: '2'},
            
         {title: "Pens",
        details: "item 1 details",
        category: '2'}    
      
                            ],
         subtitle2: "Stationery:",
        category: '1'
    }, {
        title: "Waterloo Store",
        
        location: "Location: South-campus-hall (SCH)",
        hours:"Regular Hours Begin Monday, September 19 <br> \
Monday – Tuesday: 9am – 6pm <br> \
Wednesday - Friday: 9am - 5pm  <br> \
Saturday: 12pm - 4pm <br> \
Sunday: Closed ",
        
        details: [    
        {title: "Collegiate Hoodie",
        details: "item 1 details",
        category: '2'},
            
        {title: "Ceremonial Seal Hoodie",
        details: "item 1 details",
        category: '2'},
            
         {title: "Nike Youth T-Shirt",
        details: "item 1 details",
        category: '2'}        
                            ],
        category: '1'
    }, {
        title: "Write Stuff",
        details: "item 3 details",
        category: '1'
    }, {
 title: "International News",
        location: "Location: Student Life Centre, 200 University Ave West, Waterloo, ON N2L 3G1",
        hours:"Open 24/7",  
        
        details: [{
            title: "Arizona",
        	details: "Who knows",
        	category: '1'
        },{
            title: "Chips",
        	details: "who knows",
        	category: '1'
        },{
            title: "Maynards",
        	details: "who knows",
        	category: '1'
        }],
        category: '1'
    }, {
        title: "Media.doc",
        details: "item 5 details",
        category: '1'
    }]};

    // initialize the service
    skylarFactory.init($scope);	
	$scope.portalHelpers.showView('skylarMain.html', 1);

    // Handle click on an item in the list and search example
    $scope.showDetails = function (item) {
        // Set which item to show in the details view
        $scope.item.value = item;
        // Show details view in the second column
        $scope.portalHelpers.showView('skylarDetails.html', 2);
    };

     // Handle click on an item in the second list 
 $scope.showDetails2 = function (item) {
        console.log(item);
        // Set which item to show in the details view
        $scope.item2.value = item;
        // Show details view in the second column
        $scope.portalHelpers.showView('skylarDetails2.html', 3);
    };
    
    // Handle "previous item" click from the details page
    $scope.prevItem = function () {
        // get previous items in the list
        var prevItem = $scope.portalHelpers.getPrevListItem();
        // refresh details view with the new item
        $scope.showDetails(prevItem);
    }

    $scope.nextItem = function () {
        var nextItem = $scope.portalHelpers.getNextListItem();
        $scope.showDetails(nextItem);
    }

}])


    // Factory maintains the state of the widget
    .factory('skylarFactory', ['$http', '$rootScope', '$filter', '$q', function ($http, $rootScope, $filter, $q) {
        var initialized = {
            value: false
        };


        var sourcesLoaded = 0;

        var init = function ($scope) {
            if (initialized.value)
                return;
            initialized.value = true;
        }


        return {
            init: init
        };

    }]);