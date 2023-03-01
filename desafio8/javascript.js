"use strict"

let xValues = ["Esperado", "Alcançado"];
let yValues = [170, 100];

let barColors = [
	"#CE9FFC",
  	"#4A4556"
];

new Chart("myChart", {
  	type: "doughnut",
  	data: {
    	datasets: [{
		data: yValues,
      		backgroundColor: barColors,
		borderColor: '#363447',
		borderRadius: '100%'
    	}]
},
  options: {
                        plugins:{
                              title: {
                                    display: true,
                                    text: "World Wide Wine Production 2018"
                              }
                        }
                  }
});



var radiusPlus = 4;
Chart.elements.Rectangle.prototype.draw = function() {
   var ctx = this._chart.ctx;
   var vm = this._view;
   var left, right, top, bottom, signX, signY, borderSkipped;
   var borderWidth = vm.borderWidth;

   if (!vm.horizontal) {
       left = vm.x - vm.width / 2;
       right = vm.x + vm.width / 2;
       top = vm.y;
       bottom = vm.base;
       signX = 1;
       signY = bottom > top? 1: -1;
       borderSkipped = vm.borderSkipped || 'bottom';
   } else {
       left = vm.base;
       right = vm.x;
       top = vm.y - vm.height / 2;
       bottom = vm.y + vm.height / 2;
       signX = right > left? 1: -1;
       signY = 1;
       borderSkipped = vm.borderSkipped || 'left';
   }

   if (borderWidth) {
   var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
   borderWidth = borderWidth > barSize? barSize: borderWidth;
   var halfStroke = borderWidth / 2;
   var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
   var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
   var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
   var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);

   if (borderLeft !== borderRight) {
       top = borderTop;
       bottom = borderBottom;
   }
   if (borderTop !== borderBottom) {
       left = borderLeft;
       right = borderRight;
   }
   }

   var barWidth = Math.abs(left - right);
   var roundness = this._chart.config.options.barRoundness || 0.5;
   var radius = barWidth * roundness * 0.5;
   
   var prevTop = top;
   
   top = prevTop + radius;
   var barRadius = top - prevTop;

   ctx.beginPath();
   ctx.fillStyle = vm.backgroundColor;
   ctx.strokeStyle = vm.borderColor;
   ctx.lineWidth = borderWidth;

   // draw the chart
   var x= left, y = (top - barRadius + 1), width = barWidth, height = bottom - prevTop, radius = barRadius + radiusPlus;

   ctx.moveTo(x + radius, y);
   ctx.lineTo(x + width - radius, y);
   ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
   ctx.lineTo(x + width, y + height);
   ctx.lineTo(x, y + height);
   ctx.lineTo(x, y + radius);
   ctx.quadraticCurveTo(x, y, x + radius, y);
   ctx.closePath();

   ctx.fill();
   if (borderWidth) {
   ctx.stroke();
   }

   top = prevTop;
}

var ctx = document.getElementById("ChartBar").getContext("2d");
var myChart = new Chart(ctx, {
   type: 'bar',
   data: {
   labels: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
   datasets: [{
           label: '',
           data: [40, 80, 55, 99, 85, 83, 50],
           borderWidth: 0,
           backgroundColor: "#00AAFB",
   }]
   },
   options: {
   scales: {
       xAxes: [{
           barThickness: 15,
           gridLines: {
               offsetGridLines: false,
               display: false
           }
       }],
       yAxes: [{
           ticks: {
               beginAtZero: true,
               stepSize: 25,
               suggestedMin: 50,
               suggestedMax: 100
           }
       }]
   }
   }
});





/* 

let xValues = ["Esperado", "Alcançado"];
let yValues = [100, 70];

let barColors = [
	"#b91d47",
  	"#00aba9",
  	"#2b5797",
  	"#e8c3b9",
 	"#1e7145"
];

new Chart("myChart", {
  	type: "doughnut",
  	data: {
	
    	datasets: [{
		labels: 'My First Dataset',
		data: yValues,
      		backgroundColor: barColors,
    	}]
},
  options: {
                        plugins:{
                              title: {
                                    display: false,
                                    text: "World Wide Wine Production 2018"
                              }
                        }
                  }
});

*/