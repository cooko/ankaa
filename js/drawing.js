var path;
var paths = [];

function onMouseDown(event) {
	console.log(segments, angle)
	paths.splice(0,paths.length);
	for(var i=0; i<segments; i++){
		paths.push(new Path({
			segments: [event.point.rotate(i*angle,paper.view.center)],
			strokeColor: colour,
			strokeWidth: size
		}));
		allPaths = allPaths.concat(paths);
		console.log(allPaths)
	}
}

function onMouseDrag(event) {
	console.log(paths)
	for(var i=0;i<segments; i++){
		paths[i].add(event.point.rotate(i*angle,paper.view.center));
	}
}

function onMouseUp(event) {
	for(var i=0;i<segments; i++){
		// paths[i].simplify(10);
	}
}