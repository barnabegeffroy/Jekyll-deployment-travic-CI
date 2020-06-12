var veg = document.getElementById("veg");
var carne = document.getElementById("carne");

var vegOutput = document.getElementById("vegValue");
vegOutput.innerHTML = veg.value;

var carneOutput = document.getElementById("carneValue");
carneOutput.innerHTML = carne.value;

var images = ['image1', 'image2', 'image3', 'image4', 'image5'];
var max = 5;

veg.oninput = function () {
    sum = parseInt(this.value) + parseInt(carne.value);
    if (sum > max) {
        carne.value = max - this.value;
    }
    vegOutput.innerHTML = this.value;
    carneOutput.innerHTML = carne.value;
    updateImage();
}
carne.oninput = function () {
    sum = parseInt(veg.value) + parseInt(this.value);
    if (sum > max) {
        veg.value = max - this.value;
    }
    vegOutput.innerHTML = veg.value;
    carneOutput.innerHTML = this.value;
    updateImage();
}

function updateImage() {
    var vegValue = veg.value;
    var carneValue = carne.value;
    sum = parseInt(vegValue) + parseInt(carneValue);
    for (var i = 0, l = images.length; i < l; i++) {
        if (i < vegValue) {
            document.getElementById(images[i]).src = "./images/veg.jpg";
        }
        else if (i < sum) {
            document.getElementById(images[i]).src = "./images/carne.jpg";
        }
        else {
            document.getElementById(images[i]).src = "./images/images.png";
        }
    }
}