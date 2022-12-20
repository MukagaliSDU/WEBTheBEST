function hotel(){
    const hotelID = sessionStorage.getItem("hotelID");
    switch (hotelID) {
        case "id1": document.getElementById("news_image").src = "https://i.pinimg.com/originals/84/34/b8/8434b81c75ea788e9c0a41a475b48916.jpg"; break;
        case "id2": document.getElementById("news_image").src = "https://central-asia.guide/wp-content/uploads/2021/12/Kolsai_lake_2.jpg"; break;
        case "id3": document.getElementById("news_image").src = "https://www.journalofnomads.com/wp-content/uploads/2022/05/Kolsai-Lakes-and-Kaindy-Lake-Kazakhstan.jpg"; break;
        case "id4": document.getElementById("news_image").src = "https://www.journalofnomads.com/wp-content/uploads/2022/05/Kolsai-Lakes-and-Kaindy-Lake-Kazakhstan.jpg"; break;
        case "id5": document.getElementById("news_image").src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/39/d3/0d/20180609-141818-largejpg.jpg?w=1200&h=-1&s=1"; break;
        case "id6": document.getElementById("news_image").src = "https://www.asia-hikes.com/wp-content/uploads/2021/06/iStock-1273005120-800x800.jpg"; break;
        case "id7": document.getElementById("news_image").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JBR3sYlYlV625yialFNGUjePF7l0eSEOEA&usqp=CAU"; break;
        case "id8": document.getElementById("news_image").src = "https://img5.goodfon.com/wallpaper/big/b/47/kolsay-lakes-national-park-middle-kolsai-lake-tian-shan-moun.jpg"; break;
        case "id9": document.getElementById("news_image").src = "https://i.ytimg.com/vi/1Bs7x2X5JsQ/maxresdefault.jpg"; break;
    }
}function innews_animation(){
    $(".Newsid").fadeOut(100).fadeIn(800);
    $(".hotel").fadeOut(100).fadeIn(800);
    $(".news_container").fadeOut(100).fadeIn(800);

}
