var body = document.querySelector('.body');
var images = ['photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg', 'photo4.jpeg'];
var images1 = []; 


//the loop that puts my images on the page
var pictures = function (x) {
    for (var i = 0; i < x.length; i++) {
        var img = x[i];
        img = document.createElement('img');
        img.setAttribute("src", x[i]);
        body.appendChild(img);
        images1.push(img); //puts images in new array
    }
};
pictures(images); //runs previous function
var main = document.getElementById('currentImg');
var divM = document.querySelector('.addmain');

var hide = function (e) {
    main.setAttribute("src", 'blank.png');
    divM.classList.toggle('hide');
    divM.classList.remove('main');
}

//define function for what will happen on mouse click
var alert = function (e) {
    var img = this.getAttribute("src");
    main.setAttribute("src", img);
    divM.classList.add('main');
    divM.addEventListener('click', hide)
}

//use loop to add mouseclick function to each image in array
var clickPictures = function (x) {
    for (var i = 0; i < x.length; i++) {
        var img = x[i];
        img.addEventListener('click', alert);
    }
}

//run function
clickPictures(images1)

// var close = function(e) {
//     divM.classList.remove('.main');
// }

// main.addEventLister('click', close);