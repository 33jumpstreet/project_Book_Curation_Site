// 프로모션 이미지 슬라이드 효과 - swiper
new Swiper('.visual .swiper', {
  // direction : horizontal; // 수평 슬라이드
  autoplay : true, // 자동 재생 여부
  loop : true, // 반복 재생 여부
  slidesPerView : 3, // 슬라이드 보이는 개수
  spaceBetween : 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드 가운데 보이기
  pagination : { // 페이지 번호 사용
    el : '.visual .swiper-pagination', // 페이지 번호 요소
    clickable : true // 사용자의 페이지 번호 제어 여부
  },
  navigation : { // 슬라이드 이전/ 다음 버튼 사용
    prevEl: '.visual .swiper-button-prev', // 이전 버튼 요소
    nextEl: '.visual .swiper-button-next' // 다음 버튼 요소
  }
});