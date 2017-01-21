console.log("Got here!");

var svgLeft = d3.select("body").select("section").select("div").select("#left");
// var svgRight = d3.select("body/section/div/#right")

console.log("2 - Got here!");

function render(data) {

    // Bind data
    var circles = svgLeft.selectAll("circle").data(data);

    // Enter
    circles.enter().append("circle")
        .attr("r", 10);

    // Update
    circles
        .attr("cx", function (d) {
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        });

    // Exit
    circles.exit().remove();
}

function type(d) {
    d.x = +d.x;
    d.y = +d.y;
    return d;
}

console.log("3 - Got here!");

d3.csv("data.csv", type, render);
