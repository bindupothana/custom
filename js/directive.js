var app=angular.module('numberApp',[])
app.directive("customDirective", function () {
     
    return {
        
        restrict: "EA",
        

        link: function ($scope, element, attr) {
           
            element.bind('keydown', function(e) {
                    if (e.keyCode == 8){
                    
                    }else {
                         var number = this.value
                    if(this.value.length == 3)
                    {
                        console.log("hello")
                         this.value = number.substring(0,3) + '-';      
                        
                    }
                    else if(this.value.length == 7){
                        this.value = number.substring(0,7) + '-' ;
                    } 
                }
           
           });
    
        }

    };
                     
});