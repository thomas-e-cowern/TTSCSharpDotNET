$(document).ready(function() {
  console.log('JQuery is working');

  // Get the top-level header element
  var first = $("header");
  console.log(first);

  // Get all the section elements
  var sections = $("section").find("*");
  console.log(sections);

  // Get the section element with class="current"
  var sectionsCurrent = $("section.current");
  console.log(sectionsCurrent);

  // Get the section that comes after the current section
  console.log(sectionsCurrent.next());
 
  // Get the h2 node from the section before the 'current' section
  console.log(sectionsCurrent.prev().find("h2")[0]);

  // Get the div that contains the section that has an h2 with a class of 'highlight'
  console.log($(".highlight").parent().parent());
 
  // Get all the sections that contain an h2 and store them in an Array
  var hrArray = Array.from($("section").find("h2"));
  console.log(hrArray);
})


