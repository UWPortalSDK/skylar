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
        {title: "Campus Tech Services",
        service1: "Screen replacement",
		service2: "Hard Drive, SSD and RAM upgrades",
		service3: "Data transfers & recovery",
		service4: "Virus and malware removal" ,
        category: '2'} ],
        
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
        
         subtitle2: "Digital Devices:",
        
         devices: [    
        {title: "Laptops",
         img_url: "https://info.uwaterloo.ca/campustech/images/webstore/items/10105236.jpg",
       	 multi_details: [ {
                price: "Demo ThinkPad X1 Tablet m5-6Y57 12 IPS 8GB 256SSD ",
            }, {
                price: "W10P",
            }, {
                price: "Stylus; Keyboard; Fingerprint Reader; 1Yr Depot",
            }, {
                price: "Sku: 10105236",
            }, {
                price: "Price: $1209.00",
            }],
         category: '2'},
            
        {title: "3D Printers",
        details: "item 1 details",
        category: '2'}       
                            ],
        category: '1'
    }, {
        title: "Waterloo Store",
        
        location: "Location: South-campus-hall (SCH)",
        multiHours:[
            {
                time: "Regular Hours Begin Monday, September 19",
            }, {
                time: "Monday – Tuesday: 9am – 6pm",
            }, {
                time: "Wednesday - Friday: 9am - 5pm",
            }, {
                time: "Saturday: 12pm - 4pm",
            }, {
                time: "Sunday: Closed ",
            }],
        
        subtitle1: "Men:",       
        details: [    
        {title: "Collegiate Hoodie",
        details: "price $55.99",
        category: '2'},
            
        {title: "Ceremonial Seal Hoodie",
        details: "price $34.99",
        category: '2'}
                           ],
        subtitle2: "Women:",
        details2: [
        {title: "Ladies Collegiate Hoodie",
        details: "price $55.99",
        category: '2'}        
                            ],
        category: '1',
    }, {
        title: "Write Stuff",
        /* added code */
        location: "Location: South Campus Hall",
        multiHours:[
            {
                time: "Monday-Tuesday: Monday-Tuesday, 9a.m-6p.m", 
            },{
                time: "Wednesday-Friday: Wednesday-Friday, 9a.m-5p.m",
            },{
                time: "Saturday: 12p.m - 4p.m",
            },{
                time: "Sunday: Closed"
            }],
        
        details: [    
        {title: "Notebooks",
        details: "Price: $3.99",
        category: '2'},
            
        {title: "Pencils",
        details: "Price: $1.99",
        category: '2'},
            
         {title: "Pens",
        details: "Price: $2.99",
        category: '2'}        
                            ],
        
        /* end of added code */
        category: '1'
    }, {
 title: "International News",
        location: "Location: Student Life Centre, 200 University Ave West, Waterloo, ON N2L 3G1",
        hours:"Open 24/7",  
        
        details: [{
            title: "Arizona",
        	details: "$0.99",
            img_url:"https://i5.walmartimages.com/asr/9003fc0e-6a43-4c57-beef-f56705279c51_1.02a16974ea409c97d4fdebfd9be5bf53.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
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
    
        // Handle "previous item" click from the details page
    $scope.prevItem2 = function () {
        // get previous items in the list
        var prevItem = $scope.portalHelpers.getPrevListItem();
        // refresh details view with the new item
        $scope.showDetails2(prevItem);
    }

    $scope.nextItem2 = function () {
        var nextItem = $scope.portalHelpers.getNextListItem();
        $scope.showDetails2(nextItem);
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