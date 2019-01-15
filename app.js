const $odd = $('a:odd'); // selecting all odd elements
const $secureLinks = $('a[href^="https://"]'); // carrot sign '^' means starts with
const $pdfs = $('a[href$="pdf"]'); // dollar sign in this case "href$" matches the string at the end of an attribute value -- eg means find all links that end with a pdf
const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download'); // not supported in later versions of Chrome anymore including if declared in the html file

// $odd.css('backgroundColor', 'lightgray'); setting css with jQuery method as an example

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
  // check if the checked has been checked when the user clicks on the pdf link
  // if checkbox left unchecked
  if ($(':checked').length === 0){
    // prevent download of the pdf document
    event.preventDefault();
    // alert the user
    alert('Please check the box to allow PDF downloads.');
  }
  // if box is checked we do nothing and let the browser trigger the download
});

$('#links').append($pdfCheckbox);

// loop over a collection of links and display them in the browser next to their description
$('a').each(function(index, link){
  const url = $(link).attr('href');
  $(link).parent().append(`(${url})`); // ('(${url})') this is called string interpolation to append the value of the href with parentheses around it, it's done using new ES2015 feature called template literals
});

// another way to write the code above using keyword 'this'
/*
$('a').each(function(){
  const url = $(this).attr('href');
  $(this).parent().append(`(${url})`);
*/
