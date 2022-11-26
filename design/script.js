let btnDownload = document.getElementsByClassName(".down");
let img = document.getElementsByClassName(".post");

btnDownload.addEventListener('click', () => {
    let imgPath = img.getAttribute('src');
    let fileName = getFileName(imgPath);

    saveAs(imgPath, fileName);
});

function getFileName(str) {
    return str.substring(str.lastIndexOf('/')+1);
}