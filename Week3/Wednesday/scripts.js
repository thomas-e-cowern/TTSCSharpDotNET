$(document).ready(function() {
  console.log('JQuery is working');

  var first = $("header");
  console.log(first);

  var sections = $("section").find("*");
  console.log(sections);

  var sectionsCurrent = $("section.current");
  console.log(sectionsCurrent);

  console.log(sectionsCurrent.next());

  console.log(sectionsCurrent.prev().find("h2")[0]);

  console.log($(".highlight").parent().parent());

  var hrArray = Array.from($("section").find("h2"));
  console.log(hrArray);
})


