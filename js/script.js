// 프로모션 이미지 슬라이드 효과 - swiper
new Swiper('.visual .swiper', {
  // direction : horizontal; // 수평 슬라이드
  autoplay : true, // 자동 재생 여부
  loop : true, // 반복 재생 여부
  slidesPerView : 3, // 슬라이드 보이는 개수
  spaceBetween : 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드 가운데 보이기
  navigation : { // 슬라이드 이전/ 다음 버튼 사용
    prevEl: '.visual .swiper-button-prev', // 이전 버튼 요소
    nextEl: '.visual .swiper-button-next' // 다음 버튼 요소
  }
});

// 프로모션 이미지 슬라이드 효과 - swiper
new Swiper('.book_core .swiper', {
  autoplay : true, // 자동 재생 여부
  observer : true,
  observeParents: true,
  loop : true, // 반복 재생 여부
  slidesPerView : 5, // 슬라이드 보이는 개수
  spaceBetween : 10, // 슬라이드 사이 여백
  navigation : { // 슬라이드 이전/ 다음 버튼 사용
    prevEl: '.book_core .swiper-button-prev', // 이전 버튼 요소
    nextEl: '.book_core .swiper-button-next' // 다음 버튼 요소
  },
});



