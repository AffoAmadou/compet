
    var rows = [{
        name: "AAA",
        Id: 20,
        Year: "2022"
    }, {
        name: "BBB",
        Id: 50,
        Year: "x2022"
    }, {
        name: "CCC",
        Id: 45,
        Year: "xx2022"
    }];




var html = "<table border='1|1'>";
for (var i = 0; i < rows.length; i++) {
    html+="<tr>";
    html+="<th>"+rows[i].Id+"</th>";
    html+="<td>"+rows[i].name+"</td>";
    html+="<td>"+rows[i].Year+"</td>";
    html+="</tr>";

}
html+="</table>";
document.getElementById("affichage").innerHTML = html;