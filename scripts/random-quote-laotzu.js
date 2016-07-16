/**
 * Created by Qian Yang on 2016-07-15.
 */


$(document).ready(function(){
  $("#newQuote").on("click", function(){
    var quotesLink = "https://spreadsheets.google.com/feeds/list/1FzukGMWVHRlolgK0hKFscauWS3KalMC0oYu1ZbLtKtI/od6/public/values?alt=json";
    $.getJSON(quotesLink, function(json) {
      var collection = json["feed"]["entry"];
      var randomQuotes = Math.floor(Math.random() * collection.length);
      $("#quote").html((collection[randomQuotes]["gsx$quote"]["$t"]  + "</br>" + " -- " + collection[randomQuotes]["gsx$book"]["$t"]));
    });
  });

  $("#twitter").on("click", function(){
    var currentQuote = $("#quote").text();
    if (currentQuote.length < 140) {
      $("#twitter").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + currentQuote );
    }
    if (currentQuote.length > 140) {
      var shortQuote = currentQuote.slice(0,130) + "...";
      $("#twitter").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + shortQuote );

    }
  });
});






