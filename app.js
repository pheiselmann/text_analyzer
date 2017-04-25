function analyzeText(text) {
  var textArray = text.replace(/\r?\n|\r/g, "").toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
  var totalWordCount = textArray.length;
  var uniqueWordCount = 0;
  var wordFrequencies = {};
  var totalWordsLength = 0;
  var averageWordLength = 0;

  //Total word count of the submitted text

  //Unique word count of the submitted text
  //Average word length in characters of the submitted text
  for (var i = 0; i < textArray.length; i++) {
    totalWordsLength += textArray[i].length;
    
    if (textArray[i] in wordFrequencies) {
      wordFrequencies[textArray[i]]++;
    }
    else {
      wordFrequencies[textArray[i]]=1;
    }
  }

  for (var key in wordFrequencies) {
      if (wordFrequencies.hasOwnProperty(key)) {
         ++uniqueWordCount;
      }
   }

  averageWordLength = totalWordsLength / textArray.length;
  
  var report = $('.js-text-report');

  report.find('.js-word-count').text(totalWordCount);
  report.find('.js-unique-word-count').text(uniqueWordCount);
  report.find('.js-average-word-length').text(averageWordLength + " characters");
  report.removeClass('hidden');
}

function handleFormSubmit() {
  $('.js-text-form').submit(function(event) { 
    event.preventDefault(); 
    //$('.js-text-report').empty();
    var text = $(this).find('#user.text').val();
    analyzeText(text);
  });
}

$(function() {
  handleFormSubmit();
});

