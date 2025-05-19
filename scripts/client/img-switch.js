let currentIndex = 0;
const images = ["articles/1/media/images/cover/top10-cover_id1.png", "articles/2/media/images/cover/top10-cover_id2.png", "articles/3/media/images/cover/top10-cover_id3.png", "articles/4/media/images/cover/top10-cover_id4.png", "articles/5/media/images/cover/top10-cover_id5.png"];
const texts = ["Top 10 des meilleurs jeux Switch", "Top 10 des meilleures chansons françaises", "Top 10 des meilleurs films", "Top 10 des pires lapsus à la télévision", "Top 10 des références cachées dans les logos"];
const links = [
    'articles/1/index.html',
    'articles/2/index.html',
    'articles/3/index.html',
    'articles/4/index.html',
    'articles/5/index.html'
];
const mainImg = document.getElementById("main-img");
const imageText = document.getElementById("image-text");
let intervalId;

document.getElementById("main-img").src = images[currentIndex];
document.getElementById("image-text").innerHTML = texts[currentIndex];
document.getElementById(`dot${currentIndex + 1}`).classList.add('active');

intervalId = setInterval(function(){
    document.getElementById("main-img").classList.remove("animate-right");
    document.getElementById("image-text").classList.remove("animate-right");
    document.getElementById(`dot${currentIndex + 1}`).classList.remove('active');
    currentIndex++;
    if(currentIndex === images.length) {
        currentIndex = 0;
    }
    document.getElementById("main-img").src = images[currentIndex];
    document.getElementById("image-text").innerHTML = texts[currentIndex];
    document.getElementById("main-img").classList.add("animate-right");
    document.getElementById("image-text").classList.add("animate-right");
    document.getElementById(`dot${currentIndex + 1}`).classList.add('active');
    setTimeout(() => {
        document.getElementById("main-img").classList.remove("animate-right");
        document.getElementById("image-text").classList.remove("animate-right");
    }, 500);
}, 5000);

document.getElementById("prev-btn").addEventListener("click", function(){
    clearInterval(intervalId);
    document.getElementById("main-img").classList.add("animate-left");
    document.getElementById("image-text").classList.add("animate-left");
    setTimeout(() => {
        document.getElementById("main-img").classList.remove("animate-left");
        document.getElementById("image-text").classList.remove("animate-left");
        intervalId = setInterval(function(){
        document.getElementById(`dot${currentIndex + 1}`).classList.remove('active');
        currentIndex++;
        if(currentIndex === images.length) {
            currentIndex = 0;
        }
        document.getElementById("main-img").src = images[currentIndex];
        document.getElementById("image-text").innerHTML = texts[currentIndex];
        document.getElementById(`dot${currentIndex + 1}`).classList.add('active');
        }, 5000);

        document.getElementById(`dot${currentIndex + 1}`).classList.remove('active');
        currentIndex--;
        if(currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        document.getElementById("main-img").src = images[currentIndex];
        document.getElementById("image-text").innerHTML = texts[currentIndex];
        document.getElementById(`dot${currentIndex + 1}`).classList.add('active');
    }, 500);
});

document.getElementById("next-btn").addEventListener("click", function(){
    clearInterval(intervalId);
    document.getElementById("main-img").classList.add("animate-right");
    document.getElementById("image-text").classList.add("animate-right");
    setTimeout(() => {
        document.getElementById("main-img").classList.remove("animate-right");
        document.getElementById("image-text").classList.remove("animate-right");
        intervalId = setInterval(function(){
        document.getElementById(`dot${currentIndex + 1}`).classList.remove('active');
        currentIndex++;
        if(currentIndex === images.length) {
            currentIndex = 0;
        }
        document.getElementById("main-img").src = images[currentIndex];
        document.getElementById("image-text").innerHTML = texts[currentIndex];
        document.getElementById(`dot${currentIndex + 1}`).classList.add('active');
        }, 5000);

        document.getElementById(`dot${currentIndex + 1}`).classList.remove('active');
        currentIndex++;
        if(currentIndex === images.length) {
            currentIndex = 0;
        }
        document.getElementById("main-img").src = images[currentIndex];
        document.getElementById("image-text").innerHTML = texts[currentIndex];
        document.getElementById(`dot${currentIndex + 1}`).classList.add('active');
    }, 500);
});

mainImg.addEventListener("click", function() {
    window.location.href = links[currentIndex];
});