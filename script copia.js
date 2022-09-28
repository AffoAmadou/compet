
    var rows = [{
        name: "AAA",
        Id: 20,
        Year: "2022",
        Detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend nulla id enim hendrerit congue. Vestibulum ornare dapibus justo sed aliquam. Phasellus scelerisque congue tincidunt. Nam ac ligula feugiat, posuere odio et, faucibus elit. Pellentesque vulputate orci quis diam suscipit malesuada. Vestibulum feugiat nibh sit amet risus porta, et aliquam elit fringilla. Integer sed nisi ultricies, aliquam leo id, elementum ex. Suspendisse commodo lorem mauris, id ultrices urna finibus et. Vivamus odio erat, feugiat ut ultricies ac, malesuada sit amet sem. Ut tempor libero id massa tincidunt fringilla."
    }, {
        name: "BBB",
        Id: 50,
        Year: "x2022",
        Detail: "Integer consectetur mauris id lacus pellentesque, id venenatis tellus aliquam. Pellentesque pretium, leo ac vestibulum interdum, purus augue sodales est, a rhoncus orci ante vitae mi. Ut ultricies felis vel libero placerat, et consectetur neque posuere. Donec ac dolor hendrerit, elementum magna sit amet, ullamcorper purus. Nullam pellentesque suscipit nisi vitae bibendum. Donec volutpat aliquam dignissim. In a orci eu ex dignissim tincidunt in eget odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
    }, {
        name: "CCC",
        Id: 45,
        Year: "xx2022",
        Detail: "Nam at metus risus. Ut pretium ex nec maximus iaculis. Nunc et ligula pharetra tellus accumsan tincidunt non vitae nisl. Sed a finibus sem. Suspendisse facilisis nisl id ipsum vestibulum, vitae aliquet velit mollis. Integer arcu eros, lacinia congue libero ut, venenatis sodales urna. Vivamus facilisis lorem massa, eget pellentesque neque accumsan sit amet. Donec in lacus turpis. Integer magna nulla, aliquet placerat convallis at, bibendum ac odio. Nullam fringilla, tellus a placerat pulvinar, leo tellus malesuada nisl, non vehicula est tortor sed tortor. Aenean porta non dui a lacinia. Aliquam erat volutpat. Donec suscipit elit vitae ex imperdiet, eu volutpat sem blandit. Nulla non nibh nibh. Sed ac eros mauris."
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