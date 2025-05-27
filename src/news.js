
const front = "<table class=\"table\">\
        <thead class=\"thead-light\">\
            <tr>\
            <th scope=\"col\">Date</th>\
            <th scope=\"col\">Info.</th>\
            </tr>\
        </thead>\
        <tbody>";

var news = "";
for (let i = 0; i < data["news"].length; ++i) {
    news += "<tr><th scope=\"row\">" + data["news"][i]["date"] + "</th><td>" + data["news"][i]["info"] + "</td></tr>"
}

const end = "</tbody></table>"

const inner = front + news + end;

document.getElementById("news_container").innerHTML = inner;