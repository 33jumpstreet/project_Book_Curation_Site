var API_URL = 'http://data4library.kr/api/loanItemSrch?authKey=0bd27008eae52d761bfdd12a35990ef20b41ebec4215574cb9077d91af5ed630&startDt=2022-06-01&endDt=2022-06-30&pageNo=1&pageSize=10&format=json';

$.getJSON(API_URL, function(data) {
  var list = data.response.docs;
  var $list = $('.book_core .swiper-wrapper');
  for (var i=0; i < list.length; i++) {
    var item = list[i];

    var $elem = $('#item-template')
    .clone()
    .removeAttr('id');

    $elem.find('.item-ranking').html(item.doc.ranking);
    $elem.find('.item-img').attr("src", item.doc.bookImageURL);
    $elem.find('.item-name').html(item.doc.bookname);
    $elem.find('.item-author').html(item.doc.authors);
    $elem.find('.item-publisher').html(item.doc.publisher);

    $list.append($elem);
  }
});

