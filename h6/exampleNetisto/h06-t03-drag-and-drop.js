// By default, data/elements cannot be dropped in other elements
// To allow a drop, prevent the default handling of the element
function allowDrop(event) {
	event.preventDefault();
}

// dragged data is dropped
function drop(event) {
	// prevent the browser default handling of the data
	event.preventDefault();
	// get files
	var files = event.dataTransfer.files;
	var filesCount = files.length;
	for (var i=0; i<filesCount; i++) {
		var file = files[i];
		// if not image -> continue
		if (!file.type.match('image.*')) continue;
		// read file
		var fileReader = new FileReader();
		fileReader.onload = function(e) {
			var img = document.createElement("img");
			img.draggable = false;
			img.setAttribute("class","thumbnail");
			img.setAttribute("src",e.target.result);
			var div = document.getElementById("divToDrop");
			div.appendChild(img);
		}
		// start reading file data
		fileReader.readAsDataURL(file);
    }
}