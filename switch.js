// this is if condition
// let userGov = prompt("Enter your Gov");
// if (userGov == "cairo") {
//   alert("5%");
// } else if (userGov == "alex") {
//   alert("10%");
// } else if (userGov == "aswan") {
//   alert("30%");
// } else {
//   alert("40%");
// }

// this is switch condition

let userGov = prompt("Enter yor Gov");

switch (userGov) {
    case 'cairo':
        alert("5%")
        break;
    case 'alex':
        alert("10%")
        break;
    case 'aswan':
        alert("30%")
        break;
    default:
        alert("40%")         
}