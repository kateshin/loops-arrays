// loop
var count = 0;
var list = '';

while (count < 10) {
  list += '<ol> current count is: ' + count + '</ol';
  count += 1;
}

// output results
document.write("<h1>Loops</h1>");
document.write("<ol>" + list + "</ol>");

// array:

var myItems = [
  ["question one", "answer one"],
  ["question two", "answer two"]
];

document.write("<p> " + myItems [1][1] + "</p>");
