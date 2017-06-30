var segments = 10;
var angle = 360/segments;
var colour = '#000000';
var revertColour = colour;
var size = 10;
var erasure = false;
var allPaths = [];

function updateSegments(value){
	segments = value;
	angle = 360/segments;
}
function updateColour(value){
	colour = '#' + value;
}
function updateSize(value){
	size = value;
}
function toggleErasure(){
	erasure = !erasure;
	console.log(erasure);
	if(erasure){
		$('#tooltoggle').removeClass('grey');
		$('#tooltoggle').addClass('teal');
		revertColour = colour;
		colour = "#ffffff";
	}else{
		$('#tooltoggle').removeClass('teal');
		$('#tooltoggle').addClass('grey');
		colour = revertColour
	}
}
function removeAll(){
	allPaths.forEach(function(path){
		path.remove();
	})
	allPaths.splice(0,allPaths.length);
}