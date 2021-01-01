// Instantiate index
var index = 0;

function handleClick(){

    d3.request("/array")
       .header("Content-Type", "application/json")
       .post(JSON.stringify(`Index: ${index}`), function(){
           console.log("Data sent");
       });

    console.log(`Clicked ${this}, index ${index}`);
    index++;

}

d3.select("#button").on("click", handleClick);
