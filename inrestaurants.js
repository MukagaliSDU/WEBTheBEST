
function hotel(){
  const hotelID = sessionStorage.getItem("hotelID");
  switch (hotelID) {
      case "id1": document.getElementById("restaurants_image").src = "https://cdn.shymbulak-dev.com/media/946a100731c106319b36717ea1fe2cc3.png";
          document.getElementById("restaurants_description").innerHTML = "An alpine restaurant where you can enjoy an incredible view of the snowy mountains, taste delicious dishes from the chef and, of course, warm cocktails that will not only warm you up, but also take you to a fabulous atmosphere.";
          document.getElementById("restaurants_name_ins").innerHTML = "@S.N.e.G.";
          document.getElementById("restaurants_name").href = "https://www.instagram.com/sneg.shymbulak/?hl=en";
          document.getElementById("restaurants_location").innerHTML = "гst. Kerey-Zhanibek Khandar, house 640";
          document.getElementById("restaurants_room").src = "https://cdn.shymbulak-dev.com/media/58bf15164a61dca86515f32d6e031c48.jpg";
          document.getElementById("restaurants_room_description").innerHTML = "Solnce, Nebo and Gora is a high-mountain hotel-restaurant, surrounded by majestic mountain ranges of the Zailiyskiy Alatau. S.N.e.G managed to gain numerous fans from all over the world and win prestigious awards, including the British World Boutique Hotel Awards";
          document.getElementById("Title").innerHTML = "LUX";
          document.getElementById("restaurants_rooms_person").innerHTML = "Person: 4";
          document.getElementById("restaurants_name").innerHTML = "/ S.N.e.G.";
          break;
      case "id2": document.getElementById("restaurants_image").src = "https://cdn.shymbulak-dev.com/media/e726ca32f950917dc304d6e2c16c585b.png";
          document.getElementById("restaurants_description").innerHTML = "To eat deliciously, have fun, breathe fresh air, see the sights of Almaty - it is not necessary to visit many different places. All this can be combined by visiting the restaurant Chalet, located in the mountainous resort of Chimbulak.";
          document.getElementById("restaurants_name_ins").innerHTML = "@Chalet";
          document.getElementById("restaurants_name").href = "https://instagram.com/chalet_almaty?igshid=YmMyMTA2M2Y=";
          document.getElementById("restaurants_location").innerHTML = "st. Kerey-Zhanibek Khandar, house 640";
          document.getElementById("restaurants_room").src = "https://cdn.shymbulak-dev.com/media/b14380b3d9eb7ef03eaf41d1bb82d06a.jpg";
          document.getElementById("restaurants_room_description").innerHTML = "The term chalet comes from the Arpitan-speaking part of Switzerland and the French Savoy region, and originally referred to the hut of a herder. It was often embedded in the ground for the sake of temperature buffering.";
          document.getElementById("Title").innerHTML = "Standart";
          document.getElementById("restaurants_rooms_person").innerHTML = "Person: 2";
          document.getElementById("restaurants_name").innerHTML = "/ Chalet";
          break;

      case "id3": document.getElementById("restaurants_image").src = "https://cdn.shymbulak-dev.com/media/8f8f2849b740f0cc50d8d214830d5885.png";
          document.getElementById("restaurants_description").innerHTML = "The establishment is ideal for a quiet lunch with the family, as well as for a solemn event with friends or colleagues. The windows offer a view of the ski resort with the indescribable atmosphere of the Zailiyskiy Alatau.";
          document.getElementById("restaurants_name_ins").innerHTML = "@Assorti";
          document.getElementById("restaurants_name").href = "https://instagram.com/assortialmaty?igshid=YmMyMTA2M2Y=";
          document.getElementById("restaurants_location").innerHTML = "st. Kerey-Zhanibek Khandar, house 640";
          document.getElementById("restaurants_room").src = "https://cdn.shymbulak-dev.com/media/3c4cf2a9abcfa67f87960dbd06087282.jpg";
          document.getElementById("restaurants_room_description").innerHTML = "The restaurant always welcomes regular guests, strangers and those who just like to try something new. Our restaurant is pleased to offer you dishes for every taste, warming in the cold and giving freshness in the summer heat, but in any case satisfying hunger, but not only physical, but also emotional.";
          document.getElementById("Title").innerHTML = "LUX";
          document.getElementById("restaurants_rooms_person").innerHTML = "Person: 10";
          document.getElementById("restaurants_name").innerHTML = "/ Assorti";
          break;
      case "id4": document.getElementById("restaurants_image").src = "https://cdn.shymbulak-dev.com/media/4a8c4e69856eac9f17deb775cacd2a7d.png";
          document.getElementById("restaurants_description").innerHTML = "The highest point in the world (at 3200m) where you can taste Neapolitan pizza and hot panini from the oven while enjoying the view of the glacier through panoramic stained glass windows while drinking cocktails and liqueurs.";
          document.getElementById("restaurants_name_ins").innerHTML = "@Oblaka restobar";
          document.getElementById("restaurants_name").href = "https://instagram.com/oblaka.shymbulak?igshid=YmMyMTA2M2Y=";
          document.getElementById("restaurants_location").innerHTML = "st. Kerey-Zhanibek Khandar, house 640";
          document.getElementById("restaurants_room").src = "https://cdn.shymbulak-dev.com/media/8b606ca9c070b4f094fd82899ad7def9.jpg";
          document.getElementById("restaurants_room_description").innerHTML = "Restobar Oblaka is the highest point in the world where Neapolitan pizza is prepared.";
          document.getElementById("Title").innerHTML = "LUX";
          document.getElementById("restaurants_rooms_person").innerHTML = "Person: 4";
          document.getElementById("restaurants_name").innerHTML = "/ Oblaka restobar";
          break;
      case "id5":     document.getElementById("restaurants_image").src = "https://cdn.shymbulak-dev.com/media/f8b954629fe255c43cd4edb8746f1352.png";
          document.getElementById("restaurants_name_ins").innerHTML = "@Base camp Yurta";
          document.getElementById("restaurants_name").href = "https://instagram.com/yurta_shymbulak?igshid=YmMyMTA2M2Y=";
          document.getElementById("restaurants_location").innerHTML = "st. Kerey-Zhanibek Khandar, house 640";
          document.getElementById("restaurants_room").src = "https://cdn.shymbulak-dev.com/media/ed9c59c989178f15b4eca3804554a107.png";
          document.getElementById("restaurants_room_description").innerHTML = "Base Camp & Restaurant YURTA is located in a picturesque place called Talgar Pass (3200 m) of the ski resort Kolsay";
          document.getElementById("Title").innerHTML = "LUX";
          document.getElementById("restaurants_rooms_person").innerHTML = "Person: 20";
          document.getElementById("restaurants_name").innerHTML = "/ Base camp Yurta";
          break;
          case "id6":     document.getElementById("restaurants_image").src = "https://cdn.shymbulak-dev.com/media/16e9bb9f584ed0da2c814cedce4c44f4.png";
            document.getElementById("restaurants_description").innerHTML = "Gourmet is a relative term. But you can safely call Marrone Rosso a gourmet coffee shop. Marrone Rosso means brown-red in Latin, and they are considered among the finest coffee beans.";
            document.getElementById("restaurants_name_ins").innerHTML = "@Marrone Rosso";
            document.getElementById("restaurants_name").href = "https://cdn.shymbulak-dev.com/media/5615fc9c0366f7650dec008625f9166a.jpg";
            document.getElementById("restaurants_location").innerHTML = "st. Kerey-Zhanibek Khandar, house 640";
            document.getElementById("restaurants_room").src = "https://cdn.shymbulak-dev.com/media/5615fc9c0366f7650dec008625f9166a.jpg";
            document.getElementById("restaurants_room_description").innerHTML = "Solnce, Nebo and Gora is a high-mountain hotel-restaurant, surrounded by majestic mountain ranges of the Zailiyskiy Alatau. S.N.e.G managed to gain numerous fans from all over the world and win prestigious awards, including the British World Boutique Hotel Awards";
            document.getElementById("Title").innerHTML = "LUX";
            document.getElementById("restaurants_rooms_person").innerHTML = "Person: 8";
            document.getElementById("restaurants_name").innerHTML = "/ Marrone Rosso";
          break;
          case "id7":     document.getElementById("restaurants_image").src = "https://cdn.shymbulak-dev.com/media/419e749d05f6309dc85a34ed0c8149a5.png";
              document.getElementById("restaurants_description").innerHTML = "Here you can try a real Uzbek pilaf cooked in a huge cauldron on a fire, delicious manti and shish kebab from lamb, pork, duck breast. In combination with fresh mountain air and fabulous landscapes of the Shymbulak resort.";
              document.getElementById("restaurants_name_ins").innerHTML = "@Saray bar";
              document.getElementById("restaurants_name").href = "https://www.instagram.com/sneg.shymbulak/?hl=en";
              document.getElementById("restaurants_location").innerHTML = "st. Kerey-Zhanibek Khandar, house 640";
              document.getElementById("restaurants_room").src = "https://cdn.shymbulak-dev.com/media/f013899a37dea4d24c307214876c7480.png";
              document.getElementById("restaurants_room_description").innerHTML = "A hall for 50 seats and a VIP-hall with a balcony for 12 seats. Spacious glass hall for 80 seats. Outdoor terrace - for 100-120 seats.";
              document.getElementById("Title").innerHTML = "Standart";
              document.getElementById("restaurants_rooms_person").innerHTML = "Person: more 80";
              document.getElementById("restaurants_name").innerHTML = "/ Saray bar";
          break;
          case "id8":     document.getElementById("restaurants_image").src = "https://cdn.shymbulak-dev.com/media/65bc5e25bd56c80125529369d1ab35d0.png";
            document.getElementById("restaurants_description").innerHTML = "Café-Bakery Paul is a world-famous French bakery that has maintained a tradition of specialty baked goods since 1889. Here you can discover the art of French breakfast, crispy bread and airy pastries.";
            document.getElementById("restaurants_name_ins").innerHTML = "@Paul";
            document.getElementById("restaurants_name").href = "https://instagram.com/paul_kazakhstan?igshid=YmMyMTA2M2Y=";
            document.getElementById("restaurants_location").innerHTML = "st. Kerey-Zhanibek Khandar, house 640";
            document.getElementById("restaurants_room").src = "https://cdn.shymbulak-dev.com/media/4852b0bd2ba7c873e6f73b0b364b6331.jpg";
            document.getElementById("restaurants_room_description").innerHTML = "The inscription “Maison de qualité fondée en 1889” (“House of Quality since 1889”), proudly displayed on the windows of the PAUL chain of stores, is the result of the story of five generations of people who share the same passion - passion, passion for the taste of good bread.";
            document.getElementById("Title").innerHTML = "LUX";
            document.getElementById("restaurants_rooms_person").innerHTML = "Person: 20";
            document.getElementById("restaurants_name").innerHTML = "/ Paul";
          break;
          case "id9":     document.getElementById("restaurants_image").src = "https://cdn.shymbulak-dev.com/media/b0b3cf8dd6b1c3b4982d82523b0bceb6.png";
              document.getElementById("restaurants_description").innerHTML = "Now you don’t have to get on a plane to taste the finest Italian wine or the most delicious pasta or enjoy the best mountain views. You can do this at our resort. We invite you to the Italian restaurant, Rifugio Del Monte.";
              document.getElementById("restaurants_name_ins").innerHTML = "@Rifugio del Monte";
              document.getElementById("restaurants_name").href = "Rifugio del Monte";
              document.getElementById("restaurants_location").innerHTML = "513 Kerey-Zhanibek Khandar St., Almaty";
              document.getElementById("restaurants_room").src = "https://cdn.shymbulak-dev.com/media/7db02a7ec6a7331be6c08ee4d70e0709.jpg";
              document.getElementById("restaurants_room_description").innerHTML = "Restaurant of European cuisine at the ski resort Kolsay European cuisine restaurant";
              document.getElementById("Title").innerHTML = "LUX";
              document.getElementById("restaurants_rooms_person").innerHTML = "Person: more 8";
              document.getElementById("restaurants_name").innerHTML = "/ Rifugio del Monte";
          break;
          
  }
}
function restaurant_animation(){
    $(".about_hotel").hide();
    $(".about_hotel").fadeIn(1800);

    $("h1").fadeOut(1).fadeIn(1800);
    $("h4").fadeOut(1).fadeIn(1800);

}