/**
 * Created by Qian Yang on 2016-07-15.
 */

var newQuote = function(){
    var quotesLink = "https://spreadsheets.google.com/feeds/list/1FzukGMWVHRlolgK0hKFscauWS3KalMC0oYu1ZbLtKtI/od6/public/values?alt=json";
    $.getJSON(quotesLink, function (json) {
      var collection = json["feed"]["entry"];
      var randomQuotes = Math.floor(Math.random() * collection.length);
      $("#quote").html((collection[randomQuotes]["gsx$quote"]["$t"] + "<br><br>" + " -- " + collection[randomQuotes]["gsx$book"]["$t"]));
    });
  };

$(document).ready(function(){
  $("#newQuote").on("click", function(){
    $("#quote").animate({
        opacity: 0
      }, 300,
      function() {
        newQuote();
        $("#quote").animate({
          opacity: 1
        }, 2000);
      });
    });

  $(".fa").on("click", function(){
    var currentQuote = $("#quote").text();
    if (currentQuote.length < 140) {
      $("#twitter").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + currentQuote );
    }
    if (currentQuote.length > 140) {
      var shortQuote = currentQuote.slice(0,129) + "...";
      $("#twitter").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + shortQuote );

    }
  });
});






