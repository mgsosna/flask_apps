var table = d3.select("tbody");

d3.json("/get_users", function(person){
    var row = table.append("tr");
        Object.values(person).forEach(value => {
            row.append("td").text(value);
        });
});
