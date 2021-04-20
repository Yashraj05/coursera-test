// var x ="Hello global";
// console.log("message is :"+x);

// var a = function() {
// 	var x ="Hello in a";
// 	console.log("a:message is :"+x);
// 	function p(){
// 	console.log("p: messageis :"+x);
// }
// 	p();
// }
// a();

// function Circle(radius){
// 	this.radius = radius;
// }
// Circle.prototype.getArea = 
// function() {
// 	return Math.PI * Math.pow(this.radius,2);
// };

// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// var myOtherCircle  = new Circle(20);
// console.log(myOtherCircle.getArea());
function makeMultilplier(multiplier){
	var multiplier = 3;
	function a(){
		console.log("multiplier is :"+multiplier);
	}
	a();

	return(
		function (x) {
			return multiplier*x;
		}

	);
}
var douAll = makeMultilplier(4);
console.log(douAll(10));
























