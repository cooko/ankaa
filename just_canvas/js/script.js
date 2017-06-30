var segments = 10;
var angle = 360/segments;
var colour = '#000000';
var revertColour = colour;
var size = 10;
var erasure = false;
var allPaths = [];
var redostack = [];

function toggleModel(){
	console.log("asdf");
	$('#lazyModel').toggle();
}

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

function undo(){
	console.log("undo", allPaths);
	if(allPaths.length > 0){
		var test = allPaths.pop();
		test.remove();
	}
}
function redo(){
	console.log("redo", redostack);
}