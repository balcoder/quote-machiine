$(document).ready(function () {
  let lastQuote;
  const quotes = [
    ["Lao Tzu", "The journey of a thousand miles begins with one step."],
    ["Norman Vaughan", "Dream big and dare to fail."],
    [
      "Ralph Waldo Emerson",
      "What you do speaks so loudly that I cannot hear what you say.",
    ],
    ["Gandhi", "You must be the change you wish to see in the world."],
    [
      "Christopher Morley",
      "There is only one success: to be able to spend your life in your own way.",
    ],
    ["John Muir", "The power of imagination makes us infinite."],
    ["T.S. Eliot", "Every moment is a fresh beginning"],
    [
      "Albert Einstein",
      "Your imagination is your preview of life’s coming attractions.",
    ],
    ["Marsha Sinetar ", "Do what you love and the money will follow."],
  ];

  $("#getQuote").on("click", function () {
    var html = "";
    var randIndex = Math.floor(Math.random() * quotes.length);
    if (randIndex === lastQuote) {
      var randIndex = Math.floor(Math.random() * quotes.length);
    }
    lastQuote = randIndex;

    html +=
      "<blockquote>" +
      quotes[randIndex][1] +
      "<footer>" +
      quotes[randIndex][0] +
      "</footer>" +
      "</blockquote>";
    //Render Quote
    $(".quote-box").html(html);
    //Tweet the quote
    $(".twitter-quote").on("click", function () {
      $(this).attr(
        "href",
        "https://twitter.com/intent/tweet?text=" + jQuery(html).text()
      );
    });
  });
});
