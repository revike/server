url = "http://sf-pyw.mosyag.in/m04/api/forecasts"

$("#main-header").click(function() {
	$.getJSON(url, function(prophecies) {
		advice = prophecies["prophecies"]
		set_secret_message(advice);
	});
});

function set_secret_message(paragraphs) {
  $.each(paragraphs, function(i, d) {
    p = $("#p-" + i)
    p.html("<p>" + d + "</p>")
  })
}