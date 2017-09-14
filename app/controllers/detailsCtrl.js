// JavaScript Document
(function (){


		   var detailsCtrl = function ($scope,customerService,$log) {

         $(function() {
             var chart = new Highcharts.Chart({

                 chart: {
                     renderTo: 'container',
                     type: 'column'
                 },
                 credits: {
                  enabled: false
              },
                 title: {
                text: "Chart Info 1 "
                 },
                 yAxis: {
                     title: {
                         text: 'x axis info',
                         useHTML: true,
                         style: {
                             "-webkit-transform": "rotate(90deg)",
                             "-moz-transform": "rotate(90deg)",
                             "-o-transform": "rotate(90deg)"
                         }
                     }
                 },
                 plotOptions: {
               series: {
                   cursor: 'pointer',
                   name: 'chart details',
                 }
           },
                 series: [{
                     data: [23,45,12,89,123,12,5]}]

             });
             var chart2 = new Highcharts.Chart({

                 chart: {
                     renderTo: 'container2',
                     type: 'column'
                 },
                 credits: {
                  enabled: false
              },
                 title: {
                text: "Chart Info 2"
                 },
                 yAxis: {
                     title: {
                         text: 'x axis info',
                         useHTML: true,
                         style: {
                           "-webkit-transform": "rotate(90deg)",
                           "-moz-transform": "rotate(90deg)",
                           "-o-transform": "rotate(90deg)"

                         }
                     }
                 },
                 plotOptions: {
               series: {
                   cursor: 'pointer',
                   name: 'chart details',
                 }
           },
                 series: [{
                     data: [52,14,81,48,51,71,65]}]

             });

         var chart3 = new Highcharts.Chart({

             chart: {
                 renderTo: 'container3',
                 type: 'column'
             },
             credits: {
                  enabled: false
              },
             title: {
            text: "Chart Info 3"
             },
             yAxis: {
                 title: {
                     text: 'x axis info',
                     useHTML: true,
                     style: {
                       "-webkit-transform": "rotate(90deg)",
                       "-moz-transform": "rotate(90deg)",
                       "-o-transform": "rotate(90deg)"

                     }
                 }
             },
             plotOptions: {
           series: {
               cursor: 'pointer',
               name: 'chart details',
             }
       },
             series: [{
                 data: [26,95,121,93,13,52,15]}]

         });

       var chart4 = new Highcharts.Chart({

           chart: {
               renderTo: 'container4',
               type: 'column'
           },
           credits: {
                  enabled: false
              },
           title: {
          text: "Chart Info 4"
           },
           yAxis: {
               title: {
                   text: ' x axis info',
                   useHTML: true,
                   style: {
                     "-webkit-transform": "rotate(90deg)",
                     "-moz-transform": "rotate(90deg)",
                     "-o-transform": "rotate(90deg)"

                   }
               }
           },
           plotOptions: {
         series: {
             cursor: 'pointer',
             name: 'chart details',
           }
       },
           series: [{
               data: [94,25,50,89,121,52,56]}]

       });
       });

    };

detailsCtrl.$inject = ['$scope','customerService','$log'];

angular.module('F1FeederApp').controller('detailsCtrl', detailsCtrl);

}());
