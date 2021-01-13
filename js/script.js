let newDate = new Date();
let day = newDate.getDay();
let hours = newDate.getHours();

var weekday = [];
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[day];

console.log(newDate);

let player = {

    name: "Ronaldo",
    image: 'img/ronaldo.png',
    stadium: 'img/stadium-day.jpg',
    country: "img/portugal.jpg",
    clubFlag: 'img/real-madrid.png',
    clubName: 'Real Madrid',
    title () {
        return `${this.name} best player from ${this.clubName}`
    }

}

if(hours > 12) {
    player.stadium = 'img/stadium-night.jpg';
    $(".container").css("background-image", "url(" + player.stadium + ")");
}

$("h3").text("Today is " + n);

$(".name-left").text(player.name);
$(".club-left").attr("src", player.club);
$(".country-left").attr("src", player.country);
$(".player-left-ctn > p").text(player.title());



