// card_slide 이미지 슬라이드 효과 - swiper
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

// core 이미지 슬라이드 효과 - swiper
new Swiper('.book_core .swiper', {
  autoplay : true, // 자동 재생 여부
  observer : true,
  observeParents: true,
  loop : true, // 반복 재생 여부
  slidesPerView : 5, // 슬라이드 보이는 개수
  spaceBetween : 30, // 슬라이드 사이 여백
  navigation : { // 슬라이드 이전/ 다음 버튼 사용
    prevEl: '.book_core .swiper-button-prev', // 이전 버튼 요소
    nextEl: '.book_core .swiper-button-next' // 다음 버튼 요소
  },
});

// 책중심 메뉴 클릭시 같은 페이지 내에서 이동하기 
// 1) 원하는 부분의 좌표 구하기 
// window.addEventListener("scroll", (event) => {
//   let scrollY = this.scrollY;
//   let scrollX = this.scrollX;
//   console.log(scrollY);
//   console.log(scrollX);
// });

// 2) 버튼을 클릭하면 해당 좌표로 이동
const $core_btn = document.querySelector('.core_btn');
$core_btn.addEventListener('click', () => {
  // window.scrollTo(x좌표, y좌표);
  window.scrollTo({left:0, top: 1300,  behavior:'smooth'});
});

const $best_btn = document.querySelector('.best_btn');
$best_btn.addEventListener('click', () => {
  // window.scrollTo(x좌표, y좌표);
  window.scrollTo({left:0, top: 1746,  behavior:'smooth'});
});

const $cue_btn = document.querySelector('.cue_btn');
$cue_btn.addEventListener('click', () => {
  // window.scrollTo(x좌표, y좌표);
  window.scrollTo({left:0, top: 2353,  behavior:'smooth'});
});


// 검색창 요소 찾기 
const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector(".search input");

// 1) 검색창 요소를 클릭하면 실행
searchEl.addEventListener("click", function() {
  searchInputEl.focus();
});

// 2) 검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 3) 검색한 요소 내부 실제 input 요소에서 포커스가 해제(블러)되며 실행
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

