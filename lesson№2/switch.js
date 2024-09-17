let month = prompt("Tarixi «2009.12.19» formatında daxil edin:");
let point = month.split(".");
let il = point[0];
let ay = +point[1];
let gun = point[2];
switch (ay) {
    case 1:
        alert(`${gun} Yanvar ${il}-cu il`)
        break;
    case 2:
        alert(`${gun} Fevral ${il}-cu il`)
        break;
    case 3:
        alert(`${gun} Mart ${il}-cu il`)
        break;
    case 4:
        alert(`${gun} Aprel ${il}-cu il`)
        break;
    case 5:
        alert(`${gun} May ${il}-cu il`)
        break;
    case 6:
        alert(`${gun} Iyun ${il}-cu il`)
        break;
    case 7:
        alert(`${gun} Iyul ${il}-cu il`)
        break;
    case 8:
        alert(`${gun} Avgust ${il}-cu il`)
        break;
    case 9:
        alert(`${gun} Sentyabr ${il}-cu il`)
        break;
    case 10:
        alert(`${gun} Oktyabr ${il}-cu il`)
        break;
    case 11:
        alert(`${gun} Noyabr ${il}-cu il`)
        break;
    case 12:
        alert(`${gun} Dekabr ${il}-cu il`)
        break;
    default:
        alert("Yanlış dəyər daxil edilib")
}