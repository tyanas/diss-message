(function($){
  var page = window.location.hash;

  function updateUrl(event) {
    window.location.hash = event.index;
    return false;
  }

  bespoke.vertical.from('article');
  if (page) {
    page = page.substr(page.length-1);
    bespoke.slide(parseInt(page));
  }
  bespoke.on('activate', updateUrl);
})(jQuery);
