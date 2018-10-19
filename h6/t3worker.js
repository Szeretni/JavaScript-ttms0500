onmessage = function (e) {
    if (!e.data.type.match('image.*')) {
        console.log("Wrong type " + e.data.type);
    }
    else {
        var fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            let data = fileReader.result;
            postMessage(data);
        }
        fileReader.readAsDataURL(e.data);
    }
}
