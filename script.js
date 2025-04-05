
let likes = 0;
function likeImage() {
    likes++;
    document.getElementById('like-count').innerText = "Likes : " + likes;
}
function downloadImage() {
    const image = document.querySelector(".slider img").src;
    const a = document.createElement("a");
    a.href = image;
    a.download = "image-manga.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
