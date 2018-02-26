
imgContainer = document.querySelector('.img-container');

imgArray = [
    {
        link: "photo1.jpeg"
    },
    {
        link: "photo2.jpeg"
    },
    {
        link: "photo3.jpeg"
    },
];

imgArray.forEach(function (picture) {
    var imgElement = document.createElement('img');
    imgElement.src = picture.link;
    imgContainer.appendChild(imgElement);
});

imgElement

if (typeof imgContainer !== 'undefined') {
    /*we are good
    */

    function pictureClick() {
        document.getElementById('imgArray').click();
        console.log('You clicked!')
    }

    imgArray.addEventListener('click,', pictureClick);
}