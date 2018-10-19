let targetDiv = document.getElementById('divToDrop');

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var files = event.dataTransfer.files;
  var filesCount = files.length;
  for (let i = 0; i < filesCount; i++) {
    if (typeof (Worker) !== "undefined") {
      worker = new Worker("t3worker.js");
      worker.postMessage(files[i]);
      worker.onmessage = function (e) {
        let data = e.data;
        let thumbnail = document.createElement('a');
        let draggedImage = document.createElement('img');
        draggedImage.src = data;
        draggedImage.name = "image" + i;
        draggedImage.className = 'thumbnail';
        thumbnail.appendChild(draggedImage);
        thumbnail.href = data;
        thumbnail.target = 'blank';
        targetDiv.appendChild(thumbnail);
      }
    } else {
      console.log("Workes are not supported");
    }
  }
}
