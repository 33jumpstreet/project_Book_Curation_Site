var API_URL = 'http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbchch49341429001&QueryType=Bestseller&MaxResults=12&start=1&SearchTarget=Book&output=js&Version=20131101';

$.getJSON(API_URL, function(data) {
  // console.log(data)
  var list = data.item;
  var $list = $('.bestseller .inner');
  for (var i=0; i < list.length; i++) {
    var item = list[i];
    console.log(item);

    var $elem = $('#seller-item')
    .clone()
    .removeAttr('id');
    $elem.find('.item-ranking').html(item.bestRank);
    $elem.find('.item-img').attr("src", item.cover);
    $elem.find('.detail .item-name').html(item.title);
    $elem.find('.detail .item-author').html(item.author);

    $list.append($elem);
  }
});

