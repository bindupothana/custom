var app=angular.module('numberApp',[])
app.directive("customDirective", function () {
     
    return {
        
        restrict: "A",
        

        link: function (scope, element, attr) {
           
            element.bind('change', function() {
                if ( this.value.length === 10 ) {
                   var number = this.value
                   this.value = number.substring(0,3) + '-' + number.substring(3,6) + '-' + number.substring(6,10)
                }
                
            });
           
        }
    };
                     
});
/*var app=angular.module('numberApp',[])
       app.directive('customDirective',function () {
    var jquery = require('jquery');
    var inputmask = require("jquery.inputmask");
    return {
        require: 'ngModel',
        restrict: 'A',
        priority: 1000,
        link: function(scope,element, attr, ctrl) {

            var jquery_element = jquery(element);
            jquery_element.inputmask({mask:"****-****-****",autoUnmask:true});
            jquery_element.on('keyup paste focus blur', function() {
                var val = element.val();    
                ctrl.$setViewValue(val);
                ctrl.$render();

             });

            var pattern = /^\d{9}$/;

            var newValue = null;

            ctrl.$validators.ssnDigits = function(value) {
                 newValue = element.val();
                return newValue === '' ? true : pattern.test(newValue);    
            };
        }
    };
});

*/
