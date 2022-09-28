
    var rows = [{
        name: "RUN 2022",
        Id: 20,
        Year: "2022",
        Detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend nulla id enim hendrerit congue. Vestibulum ornare dapibus justo sed aliquam. Phasellus scelerisque congue tincidunt. Nam ac ligula feugiat, posuere odio et, faucibus elit. Pellentesque vulputate orci quis diam suscipit malesuada. Vestibulum feugiat nibh sit amet risus porta, et aliquam elit fringilla. Integer sed nisi ultricies, aliquam leo id, elementum ex. Suspendisse commodo lorem mauris, id ultrices urna finibus et. Vivamus odio erat, feugiat ut ultricies ac, malesuada sit amet sem. Ut tempor libero id massa tincidunt fringilla."
    }, {
        name: "Mondial Tennis",
        Id: 50,
        Year: "x2022",
        Detail: "Integer consectetur mauris id lacus pellentesque, id venenatis tellus aliquam. Pellentesque pretium, leo ac vestibulum interdum, purus augue sodales est, a rhoncus orci ante vitae mi. Ut ultricies felis vel libero placerat, et consectetur neque posuere. Donec ac dolor hendrerit, elementum magna sit amet, ullamcorper purus. Nullam pellentesque suscipit nisi vitae bibendum. Donec volutpat aliquam dignissim. In a orci eu ex dignissim tincidunt in eget odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
    },
    {
        name: "Mondial Tennis",
        Id: 50,
        Year: "x2022",
        Detail: "Integer consectetur mauris id lacus pellentesque, id venenatis tellus aliquam. Pellentesque pretium, leo ac vestibulum interdum, purus augue sodales est, a rhoncus orci ante vitae mi. Ut ultricies felis vel libero placerat, et consectetur neque posuere. Donec ac dolor hendrerit, elementum magna sit amet, ullamcorper purus. Nullam pellentesque suscipit nisi vitae bibendum. Donec volutpat aliquam dignissim. In a orci eu ex dignissim tincidunt in eget odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
    }];




var html = "<table class='table' border='1|1'> ";
html+="<thead class='thead-dark'>";
html+="<tr>";
html+="<th scope='col'>ID</th>";
html+="<th scope='col'>NAME</th>";
html+="<th scope='col'>YEAR</th>";
html+="</tr>";
for (var i = 0; i < rows.length; i++) {
    j=i++;
    html+="<tr>";
    html+="<th scope='row'>"+ rows[i].Id +"</th>";
    html+="<td >"+rows[i].name+"</td>";
    html+="<td >"+rows[i].Year+"</td>";
    html+="<td ><a href=compet"+j+".html> SHOW</a></td>";
    html+="</tr>";
}
html+="</table>";
document.getElementById("affichage").innerHTML = html;






