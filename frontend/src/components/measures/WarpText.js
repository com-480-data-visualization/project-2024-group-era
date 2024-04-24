function wrapText(textSelection, radius) {
    textSelection.each(function () {
        let text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineHeight = 1.1, // ems
            x = text.attr("x"), // assume text anchor is "middle"
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy") || 0),
            tspan = text.text(null)
                        .append("tspan")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("dy", dy + "em");

        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > (radius * 2)) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan")
                             .attr("x", x)
                             .attr("y", y)
                             .attr("dy", `${lineHeight + dy}em`)
                             .text(word);
            }
        }
    });
}
