const fs = require('fs');

// =====================================================
// 공통 헤더 / 푸터
// =====================================================
function header(title, activeHref = '') {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>${title} — PLAYBALL</title>
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="assets/css/style.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css">
</head>
<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex justify-content-between">
      <div class="logo">
        <h1><a href="index.html" style="font-family:'KBO',sans-serif;font-weight:700">PLAYBALL</a></h1>
      </div>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link${activeHref==='index.html'?' active':''}" href="index.html">홈</a></li>
          <li><a class="nav-link${activeHref==='about.html'?' active':''}" href="about.html">소개</a></li>
          <li><a class="nav-link${activeHref==='quiz.html'?' active':''}" href="quiz.html">팀 찾기</a></li>
          <li><a class="nav-link${activeHref==='teams.html'?' active':''}" href="teams.html">구단 목록</a></li>
          <li class="dropdown"><a href="#"><span>응원 문화</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="chants.html">응원가 모음</a></li>
              <li><a href="goods.html">굿즈·유니폼</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>직관 가이드</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="stadiums.html">구장 가이드</a></li>
              <li><a href="food.html">구장별 먹거리</a></li>
              <li><a href="ticket.html">티켓 예매</a></li>
              <li><a href="checklist.html">직관 준비물</a></li>
              <li><a href="dayguide.html">직관 당일 가이드</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>야구 입문</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="rules.html">야구 기초 규칙</a></li>
              <li><a href="positions.html">포지션 소개</a></li>
              <li><a href="glossary.html">야구 용어 사전</a></li>
              <li><a href="derby.html">라이벌전·더비</a></li>
            </ul>
          </li>
          <li><a class="nav-link${activeHref==='contact.html'?' active':''}" href="contact.html">문의</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header><!-- End Header -->
`;
}

function breadcrumb(title, parent = '홈', parentHref = 'index.html') {
  return `
  <section class="breadcrumbs">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h2>${title}</h2>
        <ol>
          <li><a href="${parentHref}">${parent}</a></li>
          <li>${title}</li>
        </ol>
      </div>
    </div>
  </section>`;
}

const footer = `
  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>PLAYBALL</h3>
              <p>KBO 야구 직관 입문 가이드<br><br>
                <strong>Team:</strong> 리싸인<br>
                <strong>Members:</strong> 손범관 · 전우빈<br>
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 footer-links">
            <h4>메뉴</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html">홈</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="about.html">사이트 소개</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="quiz.html">팀 찾기</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="teams.html">구단 목록</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="contact.html">문의</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 footer-links">
            <h4>직관 가이드</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="stadiums.html">구장 가이드</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="ticket.html">티켓 예매</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="checklist.html">직관 준비물</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="rules.html">야구 규칙</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="glossary.html">용어 사전</a></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>중앙대학교</h4>
            <p>표준웹테크놀로지 01분반 기말 프로젝트<br>20221169 손범관 · 20202899 전우빈</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">&copy; Copyright <strong><span>PLAYBALL</span></strong>. TEAM 리싸인</div>
    </div>
  </footer>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>`;

const dir = '/home/claude/playball_t15/';

// =====================================================
// 1. index.html — 메인 (히어로 + about + steps + features + portfolio + team + faq + contact)
// =====================================================
fs.writeFileSync(dir+'index.html', header('PLAYBALL — KBO 야구 직관 입문 가이드','index.html') + `

  <!-- ======= Hero ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="container text-center text-md-left" data-aos="fade-up">
      <h1>응원할 팀이<br>아직 없다고?</h1>
      <h2>야구는 보고 싶은데 어느 팀을 응원해야 할지 모르겠다면<br>딱 4가지 질문으로 당신에게 꼭 맞는 팀을 찾아드려요</h2>
      <a href="quiz.html" class="btn-get-started">내 팀 찾으러 가기 →</a>
    </div>
  </section>

  <main id="main">

    <!-- ======= About ======= -->
    <section id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-7" data-aos="fade-right">
            <img src="assets/img/about-img.jpg" class="img-fluid" alt="PLAYBALL 소개">
          </div>
          <div class="col-xl-6 col-lg-5 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">PLAYBALL이란?</h3>
            <p data-aos="fade-up">KBO 야구 입문자가 자신에게 맞는 팀을 찾고, 직관을 제대로 즐길 수 있도록 돕는 종합 가이드 사이트입니다. 팀 선택부터 직관 당일까지 필요한 모든 정보를 한 곳에서 제공해요.</p>
            <div class="icon-box" data-aos="fade-up">
              <i class="bx bx-target-lock"></i>
              <h4>나에게 맞는 팀 찾기</h4>
              <p>4가지 질문에 답하면 KBO 10개 구단 중 나에게 딱 맞는 팀을 추천해드려요</p>
            </div>
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-baseball"></i>
              <h4>10개 구단 상세 소개</h4>
              <p>각 구단의 매력, 응원 문화, 홈구장 정보를 한눈에 확인할 수 있어요</p>
            </div>
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-map-pin"></i>
              <h4>직관 완벽 가이드</h4>
              <p>티켓 예매부터 응원가, 구장 먹거리까지 직관에 필요한 모든 것</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Steps ======= -->
    <section id="steps" class="steps section-bg">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-lg-4 col-md-6 content-item" data-aos="fade-in">
            <span>01</span><h4>팀 찾기</h4>
            <p>4가지 질문에 답해 나에게 맞는 KBO 구단을 추천받으세요</p>
          </div>
          <div class="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="100">
            <span>02</span><h4>구단 탐구</h4>
            <p>선택한 팀의 매력, 응원 문화, 홈구장 정보를 깊이 알아보세요</p>
          </div>
          <div class="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="200">
            <span>03</span><h4>응원 준비</h4>
            <p>응원가를 배우고 굿즈·유니폼 등 응원 도구를 준비하세요</p>
          </div>
          <div class="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="300">
            <span>04</span><h4>티켓 예매</h4>
            <p>단계별 예매 가이드로 처음이어도 쉽게 티켓을 구매할 수 있어요</p>
          </div>
          <div class="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="400">
            <span>05</span><h4>직관 준비물</h4>
            <p>빠짐없이 챙겨가기 위한 체크리스트를 확인하세요</p>
          </div>
          <div class="col-lg-4 col-md-6 content-item" data-aos="fade-in" data-aos-delay="500">
            <span>06</span><h4>직관 즐기기</h4>
            <p>당일 가이드를 보며 완벽한 첫 직관을 경험하세요</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Features (응원 문화 탭) ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-5 mb-lg-0" data-aos="fade-right">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                  <h4>응원가</h4><p>각 구단의 대표 응원가와 떼창 문화를 소개해요</p>
                </a>
              </li>
              <li class="nav-item mt-2">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                  <h4>응원 도구</h4><p>막대풍선, 유니폼, 수건 등 응원 필수 아이템</p>
                </a>
              </li>
              <li class="nav-item mt-2">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                  <h4>떼창 문화</h4><p>경기장에서 함께 부르는 응원 문화 가이드</p>
                </a>
              </li>
              <li class="nav-item mt-2">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                  <h4>치어리더</h4><p>각 구단 치어리더와 응원단장 소개</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-7 ml-auto" data-aos="fade-left">
            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1"><figure><img src="assets/img/features-1.png" alt="" class="img-fluid"></figure></div>
              <div class="tab-pane" id="tab-2"><figure><img src="assets/img/features-2.png" alt="" class="img-fluid"></figure></div>
              <div class="tab-pane" id="tab-3"><figure><img src="assets/img/features-3.png" alt="" class="img-fluid"></figure></div>
              <div class="tab-pane" id="tab-4"><figure><img src="assets/img/features-4.png" alt="" class="img-fluid"></figure></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Services (직관 가이드 카테고리) ======= -->
    <section id="services" class="services section-bg">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>직관 가이드</h2>
          <p>처음 직관 가는 분들을 위해 필요한 모든 정보를 카테고리별로 정리했어요</p>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
            <div class="icon-box icon-box-pink">
              <div class="icon"><i class="bx bx-map"></i></div>
              <h4 class="title"><a href="stadiums.html">구장 가이드</a></h4>
              <p class="description">KBO 9개 홈구장 위치, 가는 법, 특징, 먹거리를 한눈에 정리했어요</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box icon-box-cyan">
              <div class="icon"><i class="bx bx-book-open"></i></div>
              <h4 class="title"><a href="rules.html">야구 규칙 입문</a></h4>
              <p class="description">스트라이크, 볼, 홈런 등 초보자도 쉽게 이해하는 기초 규칙</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-green">
              <div class="icon"><i class="bx bx-check-square"></i></div>
              <h4 class="title"><a href="checklist.html">직관 준비물</a></h4>
              <p class="description">출발 전 빠짐없이 챙기기 위한 체크리스트와 준비 팁</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div class="icon-box icon-box-blue">
              <div class="icon"><i class="bx bx-music"></i></div>
              <h4 class="title"><a href="chants.html">응원가 모음</a></h4>
              <p class="description">KBO 10개 구단 대표 응원가를 유튜브 링크와 함께 모았어요</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Portfolio (구단 목록) ======= -->
    <section id="portfolio" class="portfolio section-bg">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>KBO 10개 구단</h2>
          <p>각 구단 카드를 눌러 상세 정보를 확인하세요. 지역별로 필터할 수 있어요</p>
        </div>
        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">전체</li>
              <li data-filter=".filter-app">수도권</li>
              <li data-filter=".filter-card">영남</li>
              <li data-filter=".filter-web">호남·충청</li>
            </ul>
          </div>
        </div>
        <div class="row portfolio-container" data-aos="fade-up">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
              <div class="portfolio-info"><h4>LG 트윈스</h4><p>수도권 · 서울</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="LG 트윈스"><i class="bx bx-plus"></i></a>
                  <a href="team-detail.html" title="구단 상세"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info"><h4>두산 베어스</h4><p>수도권 · 서울</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="두산 베어스"><i class="bx bx-plus"></i></a>
                  <a href="team-detail.html" title="구단 상세"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="">
              <div class="portfolio-info"><h4>키움 히어로즈</h4><p>수도권 · 서울</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="키움 히어로즈"><i class="bx bx-plus"></i></a>
                  <a href="team-detail.html" title="구단 상세"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="">
              <div class="portfolio-info"><h4>SSG 랜더스</h4><p>수도권 · 인천</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="SSG 랜더스"><i class="bx bx-plus"></i></a>
                  <a href="team-detail.html" title="구단 상세"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="">
              <div class="portfolio-info"><h4>KT 위즈</h4><p>수도권 · 수원</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="KT 위즈"><i class="bx bx-plus"></i></a>
                  <a href="team-detail.html" title="구단 상세"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="">
              <div class="portfolio-info"><h4>NC 다이노스</h4><p>영남 · 창원</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="NC 다이노스"><i class="bx bx-plus"></i></a>
                  <a href="team-detail.html" title="구단 상세"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="">
              <div class="portfolio-info"><h4>롯데 자이언츠</h4><p>영남 · 부산</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="롯데 자이언츠"><i class="bx bx-plus"></i></a>
                  <a href="team-detail.html" title="구단 상세"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="">
              <div class="portfolio-info"><h4>삼성 라이온즈</h4><p>영남 · 대구</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="삼성 라이온즈"><i class="bx bx-plus"></i></a>
                  <a href="team-detail.html" title="구단 상세"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="">
              <div class="portfolio-info"><h4>KIA 타이거즈</h4><p>호남·충청 · 광주</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="KIA 타이거즈"><i class="bx bx-plus"></i></a>
                  <a href="team-detail.html" title="구단 상세"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
              <div class="portfolio-info"><h4>한화 이글스</h4><p>호남·충청 · 대전</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="한화 이글스"><i class="bx bx-plus"></i></a>
                  <a href="team-detail.html" title="구단 상세"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Team (주요 구장) ======= -->
    <section id="team" class="team">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>주요 홈구장</h2>
          <p>대표적인 KBO 홈구장들을 소개해요</p>
        </div>
        <div class="row">
          ${[
            ['잠실야구장','LG · 두산','team-1.jpg'],
            ['고척스카이돔','키움 히어로즈','team-2.jpg'],
            ['인천 랜더스필드','SSG 랜더스','team-3.jpg'],
            ['창원NC파크','NC 다이노스','team-4.jpg'],
          ].map(([name,team,img])=>`
          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
            <div class="member">
              <img src="assets/img/team/${img}" class="img-fluid" alt="${name}">
              <div class="member-info">
                <div class="member-info-content">
                  <h4>${name}</h4>
                  <span>${team}</span>
                </div>
              </div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- ======= FAQ ======= -->
    <section id="faq" class="faq section-bg">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>직관 꿀팁 FAQ</h2>
          <p>처음 직관 가는 분들이 가장 많이 묻는 질문들이에요</p>
        </div>
        <div class="faq-list">
          <ul>
            ${[
              ['얼마나 일찍 도착해야 하나요?','경기 시작 30~40분 전에 도착하는 게 좋아요. 입구 줄, 자리 찾기, 먹거리 구입 시간이 필요해요.','faq-list-1','show'],
              ['어떤 좌석이 처음 직관에 좋나요?','응원 분위기를 느끼고 싶다면 1루 외야석을 추천해요. 조용히 집중하고 싶다면 내야 지정석이 좋아요.','faq-list-2',''],
              ['외부 음식을 가져가도 되나요?','대부분 구장은 외부 음식 반입 가능해요. 단, 유리병과 캔은 반입 불가예요. 페트병이나 포장 음식으로 준비하세요.','faq-list-3',''],
              ['응원가를 몰라도 괜찮나요?','물론이에요! 처음엔 주변 사람을 따라하면 돼요. 응원단장이 리드하니까 따라가기만 해도 충분해요.','faq-list-4',''],
              ['비가 오면 경기가 취소되나요?','약한 비라면 경기를 진행해요. 강한 비나 천둥·번개 시 중단 또는 취소될 수 있어요.','faq-list-5',''],
            ].map(([q,a,id,show])=>`
            <li data-aos="fade-up">
              <i class="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" class="${show?'collapse':'collapsed'}" data-bs-target="#${id}">${q} <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="${id}" class="collapse ${show}" data-bs-parent=".faq-list"><p>${a}</p></div>
            </li>`).join('')}
          </ul>
        </div>
      </div>
    </section>

    <!-- ======= Contact ======= -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>문의</h2>
          <p>궁금한 점이나 사이트 개선 제안이 있으면 알려주세요</p>
        </div>
        <div class="row no-gutters justify-content-center" data-aos="fade-up">
          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address"><i class="bi bi-geo-alt"></i><h4>소속:</h4><p>중앙대학교 표준웹테크놀로지 01분반</p></div>
              <div class="email mt-4"><i class="bi bi-people"></i><h4>팀명:</h4><p>TEAM 리싸인</p></div>
              <div class="phone mt-4"><i class="bi bi-person-badge"></i><h4>팀원:</h4><p>20221169 손범관 · 20202899 전우빈</p></div>
            </div>
          </div>
          <div class="col-lg-5 d-flex align-items-stretch">
            <iframe style="border:0; width:100%; height:270px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9!2d126.9!3d37.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sko!2skr!4v1" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="row mt-5 justify-content-center" data-aos="fade-up">
          <div class="col-lg-10">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group"><input type="text" name="name" class="form-control" placeholder="이름" required></div>
                <div class="col-md-6 form-group mt-3 mt-md-0"><input type="email" class="form-control" name="email" placeholder="이메일" required></div>
              </div>
              <div class="form-group mt-3"><input type="text" class="form-control" name="subject" placeholder="제목" required></div>
              <div class="form-group mt-3"><textarea class="form-control" name="message" rows="5" placeholder="내용" required></textarea></div>
              <div class="my-3"><div class="loading">Loading</div><div class="error-message"></div><div class="sent-message">메시지가 전송됐어요!</div></div>
              <div class="text-center"><button type="submit">문의 보내기</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>

  </main>
` + footer);

// =====================================================
// inner-page 공통 wrapper
// =====================================================
function innerPage(filename, title, activeHref, breadcrumbTitle, content) {
  fs.writeFileSync(dir + filename,
    header(title, activeHref) +
    `\n  <main id="main">\n` +
    breadcrumb(breadcrumbTitle) +
    `\n    <section class="inner-page">\n      <div class="container">\n` +
    content +
    `\n      </div>\n    </section>\n  </main>\n` +
    footer
  );
}

// =====================================================
// 2. about.html — 사이트 소개 (텍스트+이미지 좌우형)
// =====================================================
innerPage('about.html','사이트 소개','about.html','사이트 소개', `
        <style>
          .about-split{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;margin-bottom:60px}
          .about-split:nth-child(even){direction:rtl}
          .about-split:nth-child(even) .about-body{direction:ltr}
          .about-img-ph{background:#f4f4f4;border-radius:12px;height:280px;display:flex;align-items:center;justify-content:center;color:#aaa;border:1px dashed #ddd}
          .about-body h3{font-size:26px;margin-bottom:16px}
          .about-body p{font-size:15px;color:#666;line-height:1.9}
          .value-row{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}
          .value-card{text-align:center;padding:28px 20px;background:#f9f9f9;border-radius:12px}
          .value-card i{font-size:36px;color:#1bac91;margin-bottom:12px}
          .value-card h4{font-size:16px;margin-bottom:8px}
          .value-card p{font-size:13px;color:#888}
          @media(max-width:768px){.about-split,.value-row{grid-template-columns:1fr}.about-split:nth-child(even){direction:ltr}}
        </style>
        <div class="about-split">
          <div class="about-img-ph">[ 소개 이미지 ]</div>
          <div class="about-body">
            <h3>PLAYBALL이란?</h3>
            <p>KBO 야구 입문자가 자신에게 맞는 팀을 찾고, 직관을 제대로 즐길 수 있도록 돕는 종합 가이드 사이트입니다.</p>
            <p>기존 구단 사이트나 KBO 공식 홈페이지는 기존 팬을 위한 구성이라 처음 야구에 관심이 생긴 사람들에게는 불친절합니다. PLAYBALL은 그 첫 번째 장벽부터 함께 해결합니다.</p>
          </div>
        </div>
        <div class="about-split">
          <div class="about-body">
            <h3>왜 PLAYBALL을 만들었나요?</h3>
            <p>KBO 관중 수는 매년 역대 최다를 경신하고 있지만, 처음 야구에 관심이 생긴 입문자가 "어느 팀을 응원해야 하는지"부터 막히는 경우가 많아요.</p>
            <p>PLAYBALL은 팀 선택 이전 단계부터 직관 당일까지 모든 과정을 함께 안내합니다.</p>
          </div>
          <div class="about-img-ph">[ 이미지 ]</div>
        </div>
        <div class="value-row">
          <div class="value-card"><i class="bx bx-target-lock"></i><h4>입문자 중심</h4><p>야구를 전혀 몰라도 이해할 수 있는 쉬운 설명</p></div>
          <div class="value-card"><i class="bx bx-search"></i><h4>맞춤 팀 추천</h4><p>막연한 소개가 아닌 개인 맞춤형 팀 추천</p></div>
          <div class="value-card"><i class="bx bx-map-pin"></i><h4>직관 원스톱</h4><p>팀 선택부터 직관 당일까지 한 곳에서 해결</p></div>
        </div>`);

// =====================================================
// 3. quiz.html — 팀 추천 테스트 (인터랙티브 퀴즈)
// =====================================================
innerPage('quiz.html','팀 추천 테스트','quiz.html','팀 추천 테스트', `
        <style>
          .quiz-container{max-width:660px;margin:0 auto}
          .quiz-box{background:#fff;border:1px solid #eee;border-radius:16px;padding:40px;box-shadow:0 4px 20px rgba(0,0,0,.06)}
          .q-step{font-size:13px;color:#1bac91;font-weight:700;margin-bottom:8px}
          .q-title{font-size:22px;margin-bottom:28px}
          .q-opts{display:grid;grid-template-columns:1fr 1fr;gap:14px}
          .q-opt{background:#f9f9f9;border:2px solid #eee;border-radius:12px;padding:16px;cursor:pointer;font-size:14px;font-weight:500;text-align:left;display:flex;gap:10px;align-items:center;transition:all .2s}
          .q-opt:hover{border-color:#1bac91;background:#fff}
          .q-opt .em{font-size:22px}
          .q-dots{display:flex;gap:8px;margin-top:24px;justify-content:center}
          .q-dot{width:8px;height:8px;border-radius:50%;background:#eee}
          .q-dot.on{background:#1bac91;width:24px;border-radius:4px}
          .q-back{background:none;border:none;font-size:13px;color:#888;cursor:pointer;margin-top:12px;display:block}
          .result{text-align:center;display:none}
          .result.show{display:block}
          .result-team{font-size:52px;font-weight:700;margin:12px 0 6px}
          .result-city{font-size:15px;color:#888;margin-bottom:16px}
          .result-desc{font-size:14px;color:#666;max-width:400px;margin:0 auto 24px;line-height:1.9}
          .result-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
          .btn-retry{border:2px solid #eee;background:none;padding:10px 22px;border-radius:50px;cursor:pointer;font-size:14px;font-weight:700}
          .btn-primary-custom{background:#1bac91;color:#fff;padding:12px 26px;border-radius:50px;border:none;font-size:14px;font-weight:700;cursor:pointer}
          @media(max-width:500px){.q-opts{grid-template-columns:1fr}}
        </style>
        <div class="quiz-container">
          <p class="text-center text-muted mb-4">4가지 질문에 답하면 당신에게 딱 맞는 구단을 추천해드려요</p>
          <div class="quiz-box">
            <div id="quizBody">
              <div class="q-step">QUESTION <span id="qNum">1</span> / 4</div>
              <h3 class="q-title" id="qTitle"></h3>
              <div class="q-opts" id="qOpts"></div>
              <div class="q-dots" id="qDots"></div>
              <button class="q-back" id="backBtn" onclick="prev()">← 이전으로</button>
            </div>
            <div class="result" id="result">
              <div style="font-size:13px;color:#888">당신에게 추천하는 팀</div>
              <div class="result-team" id="rTeam"></div>
              <div class="result-city" id="rCity"></div>
              <div class="result-desc" id="rDesc"></div>
              <div class="result-btns">
                <button class="btn-primary-custom" onclick="location.href='team-detail.html'">구단 상세 보기</button>
                <button class="btn-retry" onclick="restart()">다시 하기 ↺</button>
              </div>
            </div>
          </div>
        </div>
        <script>
        const teams={
          LG:{name:"LG 트윈스",city:"서울 · 잠실야구장",c:"#c30452",desc:"수도권 최고 인기 구단! 29년 만의 우승을 차지한 팀. 두꺼운 팬층과 열정적인 응원이 매력이에요."},
          DOOSAN:{name:"두산 베어스",city:"서울 · 잠실야구장",c:"#131230",desc:"전통의 명문! 잠실을 LG와 함께 쓰는 라이벌 관계가 볼거리예요."},
          KIWOOM:{name:"키움 히어로즈",city:"서울 · 고척스카이돔",c:"#570514",desc:"유일한 돔구장 팀! 날씨 걱정 없이 쾌적하게 직관할 수 있어요."},
          SSG:{name:"SSG 랜더스",city:"인천 · 랜더스필드",c:"#ce0e2d",desc:"축제 같은 응원 문화! 랜더스필드는 야구장보다 놀이공원 느낌이에요."},
          KT:{name:"KT 위즈",city:"수원 · KT위즈파크",c:"#000000",desc:"수원의 신흥 강팀. 깔끔하고 현대적인 분위기를 좋아한다면 딱!"},
          NC:{name:"NC 다이노스",city:"창원 · NC파크",c:"#315288",desc:"한국에서 가장 예쁜 구장! 차분하고 단단한 팬덤이 매력이에요."},
          LOTTE:{name:"롯데 자이언츠",city:"부산 · 사직야구장",c:"#041e42",desc:"부산 사직의 전설적인 응원! '아주라' 응원은 꼭 경험해봐야 해요."},
          SAMSUNG:{name:"삼성 라이온즈",city:"대구 · 라이온즈파크",c:"#074ca1",desc:"대구의 명문 구단. 파란 물결 응원과 강한 자부심이 특징이에요."},
          KIA:{name:"KIA 타이거즈",city:"광주 · 챔피언스필드",c:"#ea0029",desc:"역대 최다 우승 명문! 광주의 빨간 열정을 느껴보세요."},
          HANWHA:{name:"한화 이글스",city:"대전 · 이글스파크",c:"#fc4e00",desc:"'보살팬'으로 유명한 애정의 끝판왕. 언더독의 매력에 빠질 거예요."},
        };
        const qs=[
          {q:"어느 지역에 살고 있나요?",opts:[{e:"🏙️",t:"수도권 (서울·경기·인천)",v:["LG","DOOSAN","KIWOOM","SSG","KT"]},{e:"🌊",t:"영남권 (부산·대구·경남)",v:["LOTTE","SAMSUNG","NC"]},{e:"🌾",t:"호남·충청 (광주·대전)",v:["KIA","HANWHA"]},{e:"✈️",t:"지역 상관없어요",v:Object.keys(teams)}]},
          {q:"어떤 응원 분위기가 좋아요?",opts:[{e:"🔥",t:"화끈하고 열정적인 응원",v:["LOTTE","KIA","HANWHA","SAMSUNG"]},{e:"😎",t:"세련되고 차분한 분위기",v:["LG","DOOSAN","KT","NC"]},{e:"🎉",t:"축제처럼 신나는 분위기",v:["KIWOOM","SSG","LOTTE"]},{e:"🤷",t:"뭐든 상관없어요",v:Object.keys(teams)}]},
          {q:"어떤 팀 스타일이 끌려요?",opts:[{e:"🏆",t:"전통 명문 구단",v:["LG","DOOSAN","KIA","LOTTE","SAMSUNG"]},{e:"🚀",t:"패기 넘치는 신흥 강팀",v:["KIWOOM","SSG","KT","NC"]},{e:"💙",t:"애정 가는 언더독",v:["HANWHA","KIWOOM","NC"]},{e:"🤷",t:"상관없어요",v:Object.keys(teams)}]},
          {q:"어떤 색이 끌려요?",opts:[{e:"❤️",t:"빨강·핑크 계열",v:["KIA","SSG","LG"]},{e:"💙",t:"파랑·남색 계열",v:["SAMSUNG","NC","LOTTE","DOOSAN"]},{e:"🧡",t:"주황 계열",v:["HANWHA"]},{e:"🖤",t:"검정 계열",v:["KT","KIWOOM"]}]},
        ];
        let step=0,scores={};
        function init(){scores={};Object.keys(teams).forEach(k=>scores[k]=0)}
        init();
        function render(){
          const q=qs[step];
          document.getElementById('qNum').textContent=step+1;
          document.getElementById('qTitle').textContent=q.q;
          const o=document.getElementById('qOpts');o.innerHTML='';
          q.opts.forEach(opt=>{const b=document.createElement('button');b.className='q-opt';b.innerHTML='<span class="em">'+opt.e+'</span>'+opt.t;b.onclick=()=>choose(opt.v);o.appendChild(b);});
          const d=document.getElementById('qDots');d.innerHTML='';
          qs.forEach((_,i)=>{const s=document.createElement('div');s.className='q-dot'+(i===step?' on':'');d.appendChild(s);});
          document.getElementById('backBtn').style.visibility=step>0?'visible':'hidden';
        }
        function choose(vals){vals.forEach(v=>{if(scores[v]!==undefined)scores[v]++});if(step<qs.length-1){step++;render();}else showResult();}
        function prev(){if(step>0){step--;render();}}
        function showResult(){
          const best=Object.keys(scores).reduce((a,b)=>scores[a]>=scores[b]?a:b);
          const t=teams[best];
          document.getElementById('rTeam').textContent=t.name;
          document.getElementById('rTeam').style.color=t.c;
          document.getElementById('rCity').textContent=t.city;
          document.getElementById('rDesc').textContent=t.desc;
          document.getElementById('quizBody').style.display='none';
          document.getElementById('result').classList.add('show');
        }
        function restart(){step=0;init();document.getElementById('result').classList.remove('show');document.getElementById('quizBody').style.display='block';render();}
        render();
        </script>`);

// =====================================================
// 4. teams.html — 구단 목록 (카드 그리드 + 필터)
// =====================================================
const teamsData=[
  {n:'LG 트윈스',city:'서울',c:'#c30452',r:'수도권',f:'filter-app',short:'LG'},
  {n:'두산 베어스',city:'서울',c:'#131230',r:'수도권',f:'filter-app',short:'OB'},
  {n:'키움 히어로즈',city:'서울',c:'#570514',r:'수도권',f:'filter-app',short:'키'},
  {n:'SSG 랜더스',city:'인천',c:'#ce0e2d',r:'수도권',f:'filter-app',short:'SSG'},
  {n:'KT 위즈',city:'수원',c:'#000000',r:'수도권',f:'filter-app',short:'KT'},
  {n:'NC 다이노스',city:'창원',c:'#315288',r:'영남',f:'filter-card',short:'NC'},
  {n:'롯데 자이언츠',city:'부산',c:'#041e42',r:'영남',f:'filter-card',short:'롯'},
  {n:'삼성 라이온즈',city:'대구',c:'#074ca1',r:'영남',f:'filter-card',short:'삼'},
  {n:'KIA 타이거즈',city:'광주',c:'#ea0029',r:'호남·충청',f:'filter-web',short:'KIA'},
  {n:'한화 이글스',city:'대전',c:'#fc4e00',r:'호남·충청',f:'filter-web',short:'한'},
];
innerPage('teams.html','구단 목록','teams.html','구단 목록', `
        <style>
          .team-filter{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:32px;justify-content:center}
          .team-filter button{border:2px solid #ddd;background:#fff;padding:8px 22px;border-radius:50px;font-size:13px;font-weight:700;cursor:pointer;transition:all .2s;font-family:'KBO',sans-serif}
          .team-filter button.on,.team-filter button:hover{border-color:#1bac91;color:#1bac91}
          .teams-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
          .team-card{background:#fff;border:1px solid #eee;border-radius:16px;overflow:hidden;transition:transform .2s,box-shadow .2s;display:block;text-decoration:none;color:inherit}
          .team-card:hover{transform:translateY(-5px);box-shadow:0 12px 28px rgba(0,0,0,.1)}
          .team-card .band{height:6px}
          .team-card .body{padding:22px;display:flex;align-items:center;gap:16px}
          .team-badge{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:#fff;flex-shrink:0}
          .team-card h4{font-size:18px;margin-bottom:4px}
          .team-card .meta{font-size:12px;color:#999}
          @media(max-width:600px){.teams-grid{grid-template-columns:1fr}}
        </style>
        <div class="team-filter">
          <button class="on" onclick="filterTeam('all',this)">전체</button>
          <button onclick="filterTeam('수도권',this)">수도권</button>
          <button onclick="filterTeam('영남',this)">영남</button>
          <button onclick="filterTeam('호남·충청',this)">호남·충청</button>
        </div>
        <div class="teams-grid">
          ${teamsData.map(t=>`
          <a href="team-detail.html" class="team-card" data-region="${t.r}">
            <div class="band" style="background:${t.c}"></div>
            <div class="body">
              <div class="team-badge" style="background:${t.c}">${t.short}</div>
              <div><h4>${t.n}</h4><div class="meta">📍 ${t.city} &nbsp;·&nbsp; ${t.r}</div></div>
            </div>
          </a>`).join('')}
        </div>
        <script>
        function filterTeam(r,btn){
          document.querySelectorAll('.team-filter button').forEach(b=>b.classList.remove('on'));
          btn.classList.add('on');
          document.querySelectorAll('.team-card').forEach(c=>{c.style.display=(r==='all'||c.dataset.region===r)?'block':'none';});
        }
        </script>`);

// =====================================================
// 5. team-detail.html — 구단 상세 (portfolio-details 기반)
// =====================================================
fs.writeFileSync(dir+'team-detail.html', header('구단 상세 — LG 트윈스','teams.html') + `
  <main id="main">
    ${breadcrumb('LG 트윈스','구단 목록','teams.html')}
    <section class="portfolio-details">
      <div class="container">
        <style>
          .team-hero{background:linear-gradient(135deg,#c30452,#8a0339);color:#fff;border-radius:16px;padding:48px 40px;margin-bottom:40px;position:relative;overflow:hidden}
          .team-hero::after{content:"⚾";position:absolute;font-size:220px;opacity:.07;right:-20px;top:-30px}
          .team-hero .kicker{font-size:12px;letter-spacing:2px;opacity:.8;margin-bottom:10px}
          .team-hero h2{font-size:52px;letter-spacing:-2px;margin-bottom:6px}
          .team-hero .en{font-size:16px;opacity:.7;letter-spacing:3px}
          .info-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:36px}
          .info-card{background:#f9f9f9;border-radius:12px;padding:18px;text-align:center}
          .info-card .ic{font-size:22px;margin-bottom:8px}
          .info-card .k{font-size:11px;color:#999}
          .info-card .v{font-size:15px;font-weight:700;margin-top:4px}
          .charm-box{background:#062822;color:#fff;border-radius:14px;padding:32px;margin-bottom:36px}
          .charm-box p{font-size:15px;line-height:2;color:#ccc}
          .charm-box .hl{color:#1bac91;font-weight:700}
          .tags-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}
          .tag-pill{border:1.5px solid #1bac91;color:#1bac91;padding:6px 15px;border-radius:50px;font-size:12px;font-weight:700}
          .cheer-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:36px}
          .cheer-box{border:1px solid #eee;border-radius:14px;overflow:hidden}
          .cheer-box .ch{padding:14px 18px;font-weight:700;font-size:15px;border-bottom:1px solid #eee;background:#f9f9f9}
          .cheer-box .cb{padding:16px 18px}
          .song-row{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px dashed #eee}
          .song-row:last-child{border:none}
          .play-btn{width:34px;height:34px;border-radius:50%;background:#1bac91;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;text-decoration:none}
          .song-info .t{font-weight:700;font-size:13px}
          .song-info .s{font-size:11px;color:#999}
          .yt-link{margin-left:auto;font-size:11px;color:#1bac91;border:1px solid #1bac91;padding:5px 10px;border-radius:50px;font-weight:700;text-decoration:none}
          .tool-item{display:flex;align-items:center;gap:10px;padding:9px 0;font-size:13px;border-bottom:1px dashed #eee}
          .tool-item:last-child{border:none}
          .tool-dot{width:9px;height:9px;border-radius:50%;background:#1bac91;flex-shrink:0}
          .stadium-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center;margin-bottom:36px}
          .stadium-ph{background:#f4f4f4;border-radius:12px;height:220px;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:13px;border:1px dashed #ddd}
          .s-row{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid #eee;font-size:13px}
          .s-row .lb{font-weight:700;min-width:60px;color:#1bac91}
          .player-cta{background:#062822;color:#fff;border-radius:14px;padding:36px;text-align:center}
          .player-cta h4{font-size:22px;margin-bottom:10px}
          .player-cta p{color:#aaa;margin-bottom:20px;font-size:14px}
          .team-nav-row{display:flex;justify-content:space-between;padding:28px 0;border-top:1px solid #eee;margin-top:20px}
          .team-nav-row a{font-weight:700;font-size:14px;text-decoration:none;color:#062822}
          .team-nav-row .dir{display:block;font-size:11px;color:#aaa;margin-bottom:3px;font-weight:400}
          @media(max-width:600px){.info-cards,.cheer-grid,.stadium-grid{grid-template-columns:1fr}}
        </style>

        <div class="team-hero">
          <div class="kicker">서울 · 잠실야구장</div>
          <h2>LG 트윈스</h2>
          <div class="en">LG TWINS</div>
        </div>

        <div class="info-cards">
          <div class="info-card"><div class="ic">📍</div><div class="k">연고지</div><div class="v">서울특별시</div></div>
          <div class="info-card"><div class="ic">📅</div><div class="k">창단연도</div><div class="v">1990년</div></div>
          <div class="info-card"><div class="ic">🏟️</div><div class="k">홈구장</div><div class="v">잠실야구장</div></div>
          <div class="info-card"><div class="ic">🦁</div><div class="k">마스코트</div><div class="v">럭키·스타</div></div>
        </div>

        <div class="charm-box">
          <p>LG 트윈스는 <span class="hl">수도권 최고 인기 구단</span> 중 하나로, 잠실야구장을 가득 메우는 두꺼운 팬층이 가장 큰 매력입니다. 오랜 암흑기를 견디고 <span class="hl">2023년 29년 만의 통합 우승</span>을 차지하며 잠실 라이벌 두산과의 '엘꼴라시코' 같은 명승부를 만들어왔습니다.</p>
          <div class="tags-row">
            <span class="tag-pill"># 수도권 인기구단</span>
            <span class="tag-pill"># 엘꼴라시코</span>
            <span class="tag-pill"># 두꺼운 팬층</span>
          </div>
        </div>

        <div class="cheer-grid">
          <div class="cheer-box">
            <div class="ch">🎵 대표 응원가</div>
            <div class="cb">
              <div class="song-row"><a href="#" class="play-btn">▶</a><div class="song-info"><div class="t">승리의 LG</div><div class="s">팀 대표 응원가</div></div><a href="#" class="yt-link" target="_blank">YouTube</a></div>
              <div class="song-row"><a href="#" class="play-btn">▶</a><div class="song-info"><div class="t">엘지 트윈스 파이팅</div><div class="s">떼창 응원가</div></div><a href="#" class="yt-link" target="_blank">YouTube</a></div>
            </div>
          </div>
          <div class="cheer-box">
            <div class="ch">📣 응원 도구</div>
            <div class="cb">
              <div class="tool-item"><div class="tool-dot"></div>막대풍선 (적색·백색)</div>
              <div class="tool-item"><div class="tool-dot"></div>LG 트윈스 유니폼</div>
              <div class="tool-item"><div class="tool-dot"></div>응원 수건 (타월)</div>
              <div class="tool-item"><div class="tool-dot"></div>응원 메가폰</div>
            </div>
          </div>
        </div>

        <div class="stadium-grid">
          <div class="stadium-ph">[ 잠실야구장 지도 이미지 ]</div>
          <div>
            <div class="s-row"><span class="lb">위치</span><span>서울 송파구 올림픽로 25</span></div>
            <div class="s-row"><span class="lb">가는 법</span><span>2호선 종합운동장역 5·6번 출구</span></div>
            <div class="s-row"><span class="lb">수용</span><span>약 23,750석</span></div>
            <div class="s-row"><span class="lb">먹거리</span><span>치킨·컵밥·외부 반입 가능</span></div>
            <div class="s-row"><span class="lb">특징</span><span>두산 베어스와 홈구장 공유</span></div>
          </div>
        </div>

        <div class="player-cta">
          <h4>선수단이 더 궁금하다면?</h4>
          <p>LG 트윈스 공식 사이트에서 전체 선수단을 확인하세요.</p>
          <a href="https://www.lgtwins.com" target="_blank" class="btn-get-started" style="display:inline-block;padding:12px 28px;background:#1bac91;color:#fff;border-radius:50px;font-weight:700;text-decoration:none">선수 더 알아보기 →</a>
        </div>

        <div class="team-nav-row">
          <a href="teams.html"><span class="dir">←</span>구단 목록으로</a>
          <a href="teams.html" style="text-align:right"><span class="dir">다음 구단 →</span>두산 베어스</a>
        </div>
      </div>
    </section>
  </main>
` + footer);

// =====================================================
// 나머지 15개 — inner-page 기반, 각각 다른 레이아웃
// =====================================================

// 공통 스타일 상수
const sectionTitle = (t,s='')=>`<div class="section-title mb-5" data-aos="fade-up"><h2>${t}</h2>${s?`<p>${s}</p>`:''}</div>`;

// 6. chants.html — 응원가 모음 (탭형)
innerPage('chants.html','응원가 모음','chants.html','응원가 모음', `
        <style>
          .chant-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px;border-bottom:2px solid #eee;padding-bottom:14px}
          .chant-tab{border:none;background:none;padding:9px 18px;font-size:13px;font-weight:700;cursor:pointer;color:#888;border-radius:8px;transition:all .2s;font-family:'KBO',sans-serif}
          .chant-tab.on{background:#1bac91;color:#fff}
          .chant-item{display:flex;align-items:center;gap:16px;background:#fff;border:1px solid #eee;border-radius:12px;padding:18px 22px;margin-bottom:12px}
          .chant-num{font-size:26px;font-weight:700;color:#1bac91;min-width:40px;font-family:'KBO',sans-serif}
          .chant-info h4{font-size:15px;margin-bottom:3px}
          .chant-info p{font-size:12px;color:#999}
          .chant-yt{margin-left:auto;background:#ff0000;color:#fff;padding:8px 16px;border-radius:50px;font-size:12px;font-weight:700;text-decoration:none;white-space:nowrap}
        </style>
        ${sectionTitle('응원가 모음','KBO 각 구단의 대표 응원가를 모았어요. 팀을 눌러 필터하세요')}
        <div class="chant-tabs">
          ${['전체','LG','두산','키움','SSG','KT','NC','롯데','삼성','KIA','한화'].map((t,i)=>`<button class="chant-tab${i===0?' on':''}" onclick="switchChant('${t}',this)">${t}</button>`).join('')}
        </div>
        <div id="chantList">
          ${[
            {team:'LG',title:'승리의 LG',type:'팀 대표 응원가'},
            {team:'LG',title:'엘지 트윈스 파이팅',type:'떼창'},
            {team:'두산',title:'베어스 승리하라',type:'팀 대표 응원가'},
            {team:'키움',title:'히어로즈 파이팅',type:'팀 대표 응원가'},
            {team:'SSG',title:'랜더스 화이팅',type:'팀 대표 응원가'},
            {team:'KT',title:'위즈 파이팅',type:'팀 대표 응원가'},
            {team:'NC',title:'NC 다이노스',type:'팀 대표 응원가'},
            {team:'롯데',title:'아주라',type:'대표 응원가'},
            {team:'삼성',title:'삼성 라이온즈 파이팅',type:'팀 대표 응원가'},
            {team:'KIA',title:'기아 타이거즈',type:'팀 대표 응원가'},
            {team:'한화',title:'한화 이글스 파이팅',type:'팀 대표 응원가'},
          ].map((c,i)=>`<div class="chant-item" data-team="${c.team}"><div class="chant-num">${String(i+1).padStart(2,'0')}</div><div class="chant-info"><h4>${c.title}</h4><p>${c.team} · ${c.type}</p></div><a href="#" class="chant-yt" target="_blank">▶ YouTube</a></div>`).join('')}
        </div>
        <script>
        function switchChant(t,btn){document.querySelectorAll('.chant-tab').forEach(b=>b.classList.remove('on'));btn.classList.add('on');document.querySelectorAll('.chant-item').forEach(item=>{item.style.display=(t==='전체'||item.dataset.team===t)?'flex':'none';});}
        </script>`);

// 7. goods.html — 굿즈·유니폼 (카드 그리드)
innerPage('goods.html','굿즈·유니폼 가이드','goods.html','굿즈·유니폼 가이드', `
        <style>
          .goods-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:48px}
          .goods-card{background:#fff;border:1px solid #eee;border-radius:14px;overflow:hidden;transition:transform .2s}
          .goods-card:hover{transform:translateY(-4px)}
          .goods-card .gi{height:140px;display:flex;align-items:center;justify-content:center;font-size:48px;background:#f9f9f9}
          .goods-card .gb{padding:16px}
          .goods-card h4{font-size:15px;margin-bottom:4px}
          .goods-card p{font-size:12px;color:#888}
          .buy-list{display:flex;flex-direction:column;gap:14px}
          .buy-item{display:flex;align-items:center;gap:16px;background:#fff;border:1px solid #eee;border-radius:12px;padding:20px}
          .buy-item i{font-size:28px;color:#1bac91;flex-shrink:0}
          .buy-item h4{font-size:15px;margin-bottom:4px}
          .buy-item p{font-size:13px;color:#888}
          @media(max-width:600px){.goods-grid{grid-template-columns:1fr 1fr}}
        </style>
        ${sectionTitle('직관 필수 굿즈','처음 직관을 가는 분들이 갖추면 좋은 응원 아이템들이에요')}
        <div class="goods-grid">
          ${[['👕','유니폼','구단 홈·어웨이 유니폼. 등번호 커스텀도 가능'],['🎋','막대풍선','구단 공식 색상의 응원 막대풍선'],['🧣','응원 타월','목에 두르거나 흔들어 응원하는 수건'],['🧢','볼캡·버킷햇','구단 로고 모자. 여름 직관 필수'],['📣','메가폰','응원단장 따라 구호 외칠 때 유용'],['🎒','에코백·파우치','실용적으로 쓸 수 있는 가방류']].map(([e,n,d])=>`<div class="goods-card"><div class="gi">${e}</div><div class="gb"><h4>${n}</h4><p>${d}</p></div></div>`).join('')}
        </div>
        ${sectionTitle('구매처 안내')}
        <div class="buy-list">
          ${[['bx bx-store','구단 공식 쇼핑몰','각 구단 홈페이지에서 공식 굿즈 구매 가능'],['bx bx-buildings','야구장 현장 매장','경기 당일 구장 내 공식 굿즈 매장 운영'],['bx bx-cart','네이버 스마트스토어','비공식 굿즈 및 커스텀 아이템 다수 판매']].map(([ic,n,d])=>`<div class="buy-item"><i class="${ic}"></i><div><h4>${n}</h4><p>${d}</p></div></div>`).join('')}
        </div>`);

// 8. stadiums.html — 구장 가이드 (카드형)
innerPage('stadiums.html','구장 가이드','stadiums.html','구장 가이드', `
        <style>
          .stadiums-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
          .st-card{background:#fff;border:1px solid #eee;border-radius:16px;overflow:hidden;transition:transform .2s}
          .st-card:hover{transform:translateY(-4px)}
          .st-card .si{height:150px;display:flex;align-items:center;justify-content:center;font-size:13px;color:#aaa;background:#f4f4f4;border-bottom:1px dashed #ddd}
          .st-card .sb{padding:20px}
          .st-card .steams{display:inline-block;padding:4px 12px;border-radius:50px;font-size:11px;font-weight:700;color:#fff;margin-bottom:10px}
          .st-card h4{font-size:17px;margin-bottom:8px}
          .st-meta span{display:flex;gap:8px;font-size:12px;color:#888;margin-bottom:4px}
          .st-meta strong{color:#444}
          @media(max-width:600px){.stadiums-grid{grid-template-columns:1fr}}
        </style>
        ${sectionTitle('KBO 홈구장 가이드','9개 홈구장 위치와 특징을 한눈에 확인하세요')}
        <div class="stadiums-grid">
          ${[
            {name:'잠실야구장',teams:'LG·두산',city:'서울 송파구',access:'2호선 종합운동장역',cap:'23,750석',feature:'두 팀 공용',c:'#c30452'},
            {name:'고척스카이돔',teams:'키움',city:'서울 구로구',access:'1호선 구일역',cap:'16,813석',feature:'유일한 실내 돔구장',c:'#570514'},
            {name:'인천 랜더스필드',teams:'SSG',city:'인천 미추홀구',access:'1호선 도화역',cap:'23,000석',feature:'현대식 시설',c:'#ce0e2d'},
            {name:'수원KT위즈파크',teams:'KT',city:'경기 수원시',access:'1호선 수원역',cap:'25,000석',feature:'넓은 외야석',c:'#000000'},
            {name:'창원NC파크',teams:'NC',city:'경남 창원시',access:'버스 이용',cap:'22,112석',feature:'가장 예쁜 구장',c:'#315288'},
            {name:'사직야구장',teams:'롯데',city:'부산 동래구',access:'3호선 사직역',cap:'23,500석',feature:'부산 응원 성지',c:'#041e42'},
            {name:'대구삼성라이온즈파크',teams:'삼성',city:'대구 수성구',access:'2호선 대공원역',cap:'24,000석',feature:'현대식 신구장',c:'#074ca1'},
            {name:'기아챔피언스필드',teams:'KIA',city:'광주 북구',access:'버스 이용',cap:'20,009석',feature:'역동적인 외야석',c:'#ea0029'},
            {name:'한화생명이글스파크',teams:'한화',city:'대전 중구',access:'버스 이용',cap:'13,000석',feature:'아담한 구장',c:'#fc4e00'},
          ].map(s=>`<div class="st-card"><div class="si">[ ${s.name} 이미지 ]</div><div class="sb"><span class="steams" style="background:${s.c}">${s.teams}</span><h4>${s.name}</h4><div class="st-meta"><span>📍 <strong>${s.city}</strong></span><span>🚇 <strong>${s.access}</strong></span><span>👥 <strong>${s.cap}</strong></span><span>⭐ <strong>${s.feature}</strong></span></div></div></div>`).join('')}
        </div>`);

// 9. food.html — 구장별 먹거리 (탭형)
innerPage('food.html','구장별 먹거리','food.html','구장별 먹거리', `
        <style>
          .food-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px;border-bottom:2px solid #eee;padding-bottom:12px}
          .food-tab{border:none;background:none;padding:9px 16px;font-size:13px;font-weight:700;cursor:pointer;color:#888;transition:all .2s;font-family:'KBO',sans-serif}
          .food-tab.on{background:#1bac91;color:#fff;border-radius:8px}
          .food-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px}
          .food-card{background:#fff;border:1px solid #eee;border-radius:12px;padding:20px;text-align:center}
          .food-card .fe{font-size:38px;margin-bottom:10px}
          .food-card h4{font-size:14px;margin-bottom:4px}
          .food-card p{font-size:12px;color:#888}
          .notice{background:#fff8e1;border:1px solid #ffe082;border-radius:12px;padding:16px 20px;font-size:13px;color:#6d4c00}
          @media(max-width:500px){.food-grid{grid-template-columns:1fr 1fr}}
        </style>
        ${sectionTitle('구장별 먹거리','각 구장의 명물 먹거리와 반입 가능 음식 정보예요')}
        <div class="food-tabs">
          ${['잠실','고척','인천','수원','창원','사직','대구','광주','대전'].map((t,i)=>`<button class="food-tab${i===0?' on':''}" onclick="switchFood('${t}',this)">${t}</button>`).join('')}
        </div>
        <div class="food-grid">
          ${[['🍗','야구장 치킨','직관의 필수템'],['🍺','생맥주','시원한 한 잔'],['🍱','컵밥','가성비 최고'],['🌭','핫도그','간편한 스낵'],['🥤','콜라·사이다','경기 관람 필수'],['🍜','라면·우동','따뜻한 국물']].map(([e,n,d])=>`<div class="food-card"><div class="fe">${e}</div><h4>${n}</h4><p>${d}</p></div>`).join('')}
        </div>
        <div class="notice">💡 대부분의 구장은 외부 음식 반입이 가능하지만, 유리병·캔은 반입 불가예요. 플라스틱 용기나 포장 음식으로 준비하세요!</div>
        <script>function switchFood(t,btn){document.querySelectorAll('.food-tab').forEach(b=>b.classList.remove('on'));btn.classList.add('on');}</script>`);

// 10. ticket.html — 티켓 예매 가이드 (스텝형)
innerPage('ticket.html','티켓 예매 가이드','ticket.html','티켓 예매 가이드', `
        <style>
          .step-list{display:flex;flex-direction:column;gap:0}
          .step-item{display:flex;gap:24px;align-items:flex-start;padding-bottom:32px;position:relative}
          .step-item::after{content:"";position:absolute;left:25px;top:52px;bottom:0;width:2px;background:#eee}
          .step-item:last-child::after{display:none}
          .step-num{width:52px;height:52px;border-radius:50%;background:#1bac91;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;flex-shrink:0;font-family:'KBO',sans-serif;position:relative;z-index:1}
          .step-body{flex:1;padding-top:8px}
          .step-body h4{font-size:18px;margin-bottom:8px}
          .step-body p{font-size:14px;color:#666;line-height:1.8}
          .step-tip{background:#f0fbf8;border-left:3px solid #1bac91;border-radius:0 8px 8px 0;padding:10px 14px;margin-top:12px;font-size:13px;color:#1bac91}
          .site-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
          .site-card{background:#fff;border:1px solid #eee;border-radius:12px;padding:20px;text-align:center}
          .site-card .si{font-size:32px;margin-bottom:10px}
          .site-card h4{font-size:14px;margin-bottom:4px}
          .site-card p{font-size:12px;color:#888}
          @media(max-width:500px){.site-cards{grid-template-columns:1fr}}
        </style>
        ${sectionTitle('티켓 예매 방법','처음이라도 쉽게 따라할 수 있는 단계별 예매 가이드예요')}
        <div class="step-list">
          ${[
            {n:1,t:'관람할 경기 선택',d:'KBO 공식 홈페이지 또는 각 구단 앱에서 경기 일정을 확인하고 관람할 경기를 선택하세요.',tip:'💡 주말 경기는 빨리 매진되니 1~2주 전에 예매하는 게 좋아요'},
            {n:2,t:'예매 사이트 접속',d:'티켓링크, 인터파크, 구단 공식 앱 등 각 구단이 지정한 예매처를 이용해야 해요.',tip:'💡 구단마다 공식 예매처가 다를 수 있으니 구단 사이트에서 확인하세요'},
            {n:3,t:'좌석 선택',d:'1루(홈팀), 3루(원정팀), 외야, 지정석 등 원하는 좌석을 선택하세요.',tip:'💡 처음 직관이라면 응원 분위기를 느낄 수 있는 외야석을 추천해요'},
            {n:4,t:'결제 및 확인',d:'신용카드, 간편결제 등으로 결제 후 예매 확인 메일이나 앱에서 QR코드를 저장해두세요.',tip:'💡 당일 현장 수령보다 모바일 티켓이 빠르고 편해요'},
          ].map(s=>`<div class="step-item"><div class="step-num">${s.n}</div><div class="step-body"><h4>${s.t}</h4><p>${s.d}</p><div class="step-tip">${s.tip}</div></div></div>`).join('')}
        </div>
        ${sectionTitle('주요 예매 사이트')}
        <div class="site-cards">
          ${[['🎟','티켓링크','다수 구단 공식 예매처'],['🎫','인터파크','일부 구단 예매처'],['📱','구단 공식 앱','각 구단 전용 앱']].map(([e,n,d])=>`<div class="site-card"><div class="si">${e}</div><h4>${n}</h4><p>${d}</p></div>`).join('')}
        </div>`);

// 11. checklist.html — 직관 준비물 (체크리스트 인터랙션)
innerPage('checklist.html','직관 준비물 체크리스트','checklist.html','직관 준비물', `
        <style>
          .progress-bar-wrap{background:#eee;border-radius:50px;height:10px;margin-bottom:8px}
          .progress-fill{background:#1bac91;border-radius:50px;height:100%;transition:width .3s}
          .progress-text{font-size:13px;color:#888;margin-bottom:12px}
          .check-cat{margin-bottom:28px}
          .check-cat h4{font-size:16px;margin-bottom:14px}
          .check-item{display:flex;align-items:center;gap:14px;background:#fff;border:1px solid #eee;border-radius:10px;padding:14px 18px;margin-bottom:8px;cursor:pointer;transition:all .2s}
          .check-item:hover{border-color:#1bac91}
          .check-item input[type=checkbox]{width:18px;height:18px;accent-color:#1bac91;cursor:pointer;flex-shrink:0}
          .check-item .ct h5{font-size:14px;margin-bottom:2px}
          .check-item .ct p{font-size:12px;color:#999}
          .check-item.done{background:#f0fbf8;opacity:.75}
        </style>
        ${sectionTitle('직관 준비물 체크리스트','출발 전 하나씩 체크하면서 빠진 게 없는지 확인해요')}
        <div class="progress-text" id="progText">0 / 15 완료</div>
        <div class="progress-bar-wrap"><div class="progress-fill" id="progFill" style="width:0%"></div></div>
        ${[
          {cat:'🎟 티켓·입장',items:[['모바일 티켓 또는 실물 티켓','예매 앱 또는 메일에서 QR 확인'],['신분증','학생 할인 시 필요'],['교통카드·현금','구장 내 현금 사용처 있음']]},
          {cat:'👕 응원 준비',items:[['구단 유니폼 또는 구단 색 옷','응원 분위기를 높여줘요'],['막대풍선','현장 구매도 가능'],['응원 타월','없어도 괜찮아요']]},
          {cat:'☀️ 날씨 대비',items:[['모자 또는 햇빛 차단 용품','외야 낮 경기는 매우 더워요'],['얇은 겉옷','저녁 경기는 쌀쌀할 수 있어요'],['우산·우비','우천 경기 대비']]},
          {cat:'🍱 먹거리',items:[['물·음료 (페트병)','유리병·캔 반입 불가'],['간식·도시락','외부 음식 반입 가능'],['쓰레기봉투','경기장 매너']]},
          {cat:'📱 기타',items:[['보조배터리','응원가 검색·촬영 필수'],['귀마개','너무 시끄러울 때를 대비'],['돗자리 (외야석)','잔디석 이용 시']]},
        ].map(cat=>`<div class="check-cat"><h4>${cat.cat}</h4>${cat.items.map(([t,d])=>`<label class="check-item"><input type="checkbox" onchange="updateProg()"><div class="ct"><h5>${t}</h5><p>${d}</p></div></label>`).join('')}</div>`).join('')}
        <script>
        function updateProg(){
          const total=document.querySelectorAll('input[type=checkbox]').length;
          const done=document.querySelectorAll('input[type=checkbox]:checked').length;
          document.getElementById('progText').textContent=done+' / '+total+' 완료';
          document.getElementById('progFill').style.width=(done/total*100)+'%';
          document.querySelectorAll('.check-item').forEach(i=>{i.classList.toggle('done',i.querySelector('input').checked);});
        }
        </script>`);

// 12. dayguide.html — 직관 당일 가이드 (타임라인형)
innerPage('dayguide.html','직관 당일 가이드','dayguide.html','직관 당일 가이드', `
        <style>
          .timeline{position:relative;padding-left:60px}
          .timeline::before{content:"";position:absolute;left:22px;top:0;bottom:0;width:2px;background:#eee}
          .tl-item{position:relative;margin-bottom:32px}
          .tl-dot{position:absolute;left:-46px;top:10px;width:18px;height:18px;border-radius:50%;background:#1bac91;border:3px solid #fff;box-shadow:0 0 0 2px #1bac91}
          .tl-time{font-size:12px;color:#1bac91;font-weight:700;margin-bottom:4px}
          .tl-card{background:#fff;border:1px solid #eee;border-radius:14px;padding:20px}
          .tl-card h4{font-size:17px;margin-bottom:8px}
          .tl-card p{font-size:14px;color:#666;line-height:1.8}
          .tl-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
          .tl-tag{font-size:11px;background:#f4f4f4;padding:4px 10px;border-radius:50px;color:#666}
        </style>
        ${sectionTitle('직관 당일 가이드','경기 당일 이것만 따라하면 완벽한 직관!')}
        <div class="timeline">
          ${[
            {time:'경기 2시간 전',title:'출발 전 체크',desc:'모바일 티켓 확인, 준비물 점검, 대중교통 경로 확인. 구장 근처는 주차가 어려우니 대중교통 이용을 추천해요.',tags:['티켓 확인','교통 확인']},
            {time:'경기 1시간 전',title:'구장 도착 & 입장',desc:'입구에서 QR티켓 스캔 후 입장. 가방 검사가 있을 수 있어요. 유리병·캔은 반입 불가!',tags:['QR 스캔','가방 검사']},
            {time:'경기 40분 전',title:'좌석 찾기 & 먹거리',desc:'좌석을 찾고, 치킨·맥주 등 먹거리를 미리 구입해두세요. 경기 시작 후에는 줄이 더 길어져요.',tags:['좌석 확인','먹거리 구입']},
            {time:'경기 시작 전',title:'응원가 예습',desc:'응원단장을 따라 응원가를 배워보세요. 몰라도 괜찮아요, 분위기만 따라가도 충분히 즐거워요!',tags:['응원가','분위기 파악']},
            {time:'경기 중',title:'경기 관람 & 응원',desc:'스트라이크, 볼, 홈런 등 기본 규칙만 알아도 훨씬 재밌어요. 모르면 옆 사람에게 물어봐도 OK!',tags:['응원','규칙 확인']},
            {time:'경기 종료 후',title:'퇴장 & 귀가',desc:'경기 종료 후 한꺼번에 나가면 엄청 막혀요. 조금 여유있게 나오거나 잠깐 기다렸다 나오는 게 좋아요.',tags:['혼잡 주의','대중교통']},
          ].map(t=>`<div class="tl-item"><div class="tl-dot"></div><div class="tl-time">${t.time}</div><div class="tl-card"><h4>${t.title}</h4><p>${t.desc}</p><div class="tl-tags">${t.tags.map(tag=>`<span class="tl-tag">${tag}</span>`).join('')}</div></div></div>`).join('')}
        </div>`);

// 13. rules.html — 야구 기초 규칙 (아이콘 카드)
innerPage('rules.html','야구 기초 규칙','rules.html','야구 기초 규칙', `
        <style>
          .rules-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:40px}
          .rule-card{background:#fff;border:1px solid #eee;border-radius:14px;padding:24px}
          .rule-icon{font-size:36px;margin-bottom:12px}
          .rule-badge{background:#1bac91;color:#fff;border-radius:6px;padding:3px 10px;font-size:11px;font-weight:700;display:inline-block;margin-bottom:8px}
          .rule-card h4{font-size:17px;margin-bottom:8px}
          .rule-card p{font-size:13px;color:#666;line-height:1.8}
          .summary-box{background:#062822;color:#fff;border-radius:14px;padding:36px;text-align:center}
          .summary-box h4{font-size:20px;margin-bottom:12px}
          .summary-box p{color:#aaa;font-size:14px;line-height:1.9}
          @media(max-width:600px){.rules-grid{grid-template-columns:1fr}}
        </style>
        ${sectionTitle('야구 기초 규칙','이것만 알면 경기를 2배 더 재밌게 볼 수 있어요')}
        <div class="rules-grid">
          ${[
            {icon:'⚾',badge:'스트라이크 & 볼',title:'스트라이크 존',desc:'투수가 던진 공이 스트라이크 존을 통과하면 스트라이크. 3스트라이크면 타자 아웃!'},
            {icon:'🏏',badge:'아웃',title:'아웃 3가지',desc:'삼진(3스트라이크), 플라이아웃(공중 뜬 공 잡힘), 땅볼아웃(1루 먼저 송구)'},
            {icon:'🏃',badge:'진루',title:'베이스 달리기',desc:'타자가 공을 치면 1루→2루→3루→홈으로 달려요. 홈을 밟으면 1점!'},
            {icon:'💥',badge:'홈런',title:'홈런',desc:'타자가 친 공이 외야 펜스를 넘어가면 홈런. 베이스에 있는 모든 주자가 득점!'},
            {icon:'🔢',badge:'이닝',title:'이닝 구조',desc:'9이닝이 기본. 1이닝은 양팀이 각각 3아웃씩 잡히면 종료. 동점이면 연장전!'},
            {icon:'🎯',badge:'볼넷',title:'볼 4개 = 출루',desc:'투수가 볼을 4개 던지면 타자는 1루로 걸어나가요 (볼넷 또는 사사구)'},
          ].map(r=>`<div class="rule-card"><div class="rule-icon">${r.icon}</div><span class="rule-badge">${r.badge}</span><h4>${r.title}</h4><p>${r.desc}</p></div>`).join('')}
        </div>
        <div class="summary-box"><h4>💡 한 줄 요약</h4><p>투수가 공을 던지면 타자가 치고 베이스를 돌아 홈으로 오면 점수!<br>9이닝 동안 더 많은 점수를 낸 팀이 이겨요.</p></div>`);

// 14. positions.html — 포지션 소개 (다이어그램+그리드)
innerPage('positions.html','포지션 소개','positions.html','포지션 소개', `
        <style>
          .diagram-box{background:#f4f4f4;border-radius:16px;height:240px;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:14px;margin-bottom:36px;border:1px dashed #ddd}
          .pos-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
          .pos-card{background:#fff;border:1px solid #eee;border-radius:14px;padding:20px;text-align:center;transition:transform .2s}
          .pos-card:hover{transform:translateY(-4px)}
          .pos-icon{font-size:32px;margin-bottom:10px}
          .pos-num{font-size:22px;font-weight:700;color:#1bac91;margin-bottom:4px;font-family:'KBO',sans-serif}
          .pos-card h4{font-size:14px;margin-bottom:6px}
          .pos-card p{font-size:12px;color:#888;line-height:1.6}
          @media(max-width:500px){.pos-grid{grid-template-columns:1fr 1fr}}
        </style>
        ${sectionTitle('야구 포지션 소개','9명의 선수가 각자 맡은 위치와 역할이 달라요')}
        <div class="diagram-box">[ 야구장 포지션 다이어그램 이미지 ]</div>
        <div class="pos-grid">
          ${[
            {n:1,icon:'⚾',name:'투수 (Pitcher)',desc:'공을 던지는 선수. 경기의 핵심'},
            {n:2,icon:'🥊',name:'포수 (Catcher)',desc:'투수 뒤에서 공을 받는 수비 핵심'},
            {n:3,icon:'1️⃣',name:'1루수',desc:'1루 베이스를 지키는 선수'},
            {n:4,icon:'2️⃣',name:'2루수',desc:'2루 근처를 담당하는 선수'},
            {n:5,icon:'3️⃣',name:'3루수',desc:'3루 베이스를 지키는 선수'},
            {n:6,icon:'🔄',name:'유격수 (SS)',desc:'2루~3루 사이 담당. 수비 핵심'},
            {n:7,icon:'👈',name:'좌익수 (LF)',desc:'외야 왼쪽을 담당하는 선수'},
            {n:8,icon:'⬆️',name:'중견수 (CF)',desc:'외야 가운데 담당. 발 빠른 선수'},
            {n:9,icon:'👉',name:'우익수 (RF)',desc:'외야 오른쪽을 담당하는 선수'},
          ].map(p=>`<div class="pos-card"><div class="pos-icon">${p.icon}</div><div class="pos-num">${p.n}</div><h4>${p.name}</h4><p>${p.desc}</p></div>`).join('')}
        </div>`);

// 15. glossary.html — 야구 용어 사전 (검색+FAQ 아코디언)
innerPage('glossary.html','야구 용어 사전','glossary.html','야구 용어 사전', `
        <style>
          .glossary-search{display:flex;gap:12px;margin-bottom:24px}
          .glossary-search input{flex:1;border:2px solid #eee;border-radius:10px;padding:12px 16px;font-size:14px;font-family:'KBO',sans-serif;outline:none;transition:border-color .2s}
          .glossary-search input:focus{border-color:#1bac91}
          .term-item{background:#fff;border:1px solid #eee;border-radius:12px;overflow:hidden;margin-bottom:8px}
          .term-q{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;cursor:pointer;font-weight:700;font-size:15px;transition:background .2s}
          .term-q:hover{background:#f9f9f9}
          .term-q .arrow{transition:transform .3s;color:#aaa;font-size:12px}
          .term-q.open .arrow{transform:rotate(180deg)}
          .term-a{display:none;padding:14px 20px;font-size:14px;color:#666;line-height:1.9;border-top:1px solid #eee}
          .term-a.show{display:block}
        </style>
        ${sectionTitle('야구 용어 사전','자주 등장하는 야구 용어들을 쉽게 정리했어요')}
        <div class="glossary-search"><input type="text" placeholder="🔍 용어 검색..." oninput="searchGlossary(this.value)" id="gSearch"></div>
        <div id="termList">
          ${[
            ['스트라이크','투수가 던진 공이 스트라이크 존을 통과했을 때. 3스트라이크면 삼진 아웃'],
            ['볼','스트라이크 존을 벗어난 공. 4볼이면 타자는 1루로 출루'],
            ['홈런','타자가 친 공이 외야 펜스를 넘어가는 것. 득점 확정'],
            ['삼진','3스트라이크로 타자가 아웃되는 것'],
            ['볼넷','4개의 볼로 타자가 1루로 걸어나가는 것. 사사구라고도 함'],
            ['더블플레이','수비팀이 한 번에 두 명을 아웃시키는 것'],
            ['클린업','3·4·5번 타순. 주로 강타자가 배치됨'],
            ['불펜','후반 이닝을 담당하는 구원 투수들'],
            ['세이브','이기는 상황에서 마무리 투수가 경기를 끝냈을 때 주어지는 기록'],
            ['희생번트','주자를 진루시키기 위해 고의로 번트를 대는 것'],
            ['대타','선발 타자 대신 후반에 출전하는 대체 타자'],
            ['이닝','공격과 수비가 한 번씩 이루어지는 단위. 9이닝이 기본'],
          ].map(([q,a])=>`<div class="term-item"><div class="term-q" onclick="toggleTerm(this)"><span>${q}</span><span class="arrow">▼</span></div><div class="term-a">${a}</div></div>`).join('')}
        </div>
        <script>
        function toggleTerm(el){el.classList.toggle('open');el.nextElementSibling.classList.toggle('show');}
        function searchGlossary(v){document.querySelectorAll('.term-item').forEach(item=>{const q=item.querySelector('.term-q span').textContent;item.style.display=q.includes(v)?'block':'none';});}
        </script>`);

// 16. derby.html — 라이벌전·더비 (좌우 이미지+텍스트 교차형)
innerPage('derby.html','라이벌전·더비','derby.html','라이벌전·더비', `
        <style>
          .derby-list{display:flex;flex-direction:column;gap:28px}
          .derby-item{display:grid;grid-template-columns:1fr 1fr;border-radius:18px;overflow:hidden;border:1px solid #eee}
          .derby-item:nth-child(even){direction:rtl}
          .derby-item:nth-child(even) .derby-body{direction:ltr}
          .derby-img{height:220px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#fff}
          .derby-body{padding:30px;direction:ltr;background:#fff}
          .derby-badge{display:inline-block;background:#1bac91;color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:50px;margin-bottom:12px}
          .derby-teams{font-size:22px;font-weight:700;margin-bottom:8px}
          .derby-name{font-size:18px;margin-bottom:10px;color:#333}
          .derby-desc{font-size:13px;color:#666;line-height:1.9}
          @media(max-width:600px){.derby-item,.derby-item:nth-child(even){grid-template-columns:1fr;direction:ltr}}
        </style>
        ${sectionTitle('KBO 라이벌전·더비','야구를 더 뜨겁게 만드는 라이벌 매치들이에요')}
        <div class="derby-list">
          ${[
            {teams:'LG vs 두산',badge:'잠실 더비',name:'엘꼴라시코',desc:'같은 잠실야구장을 홈구장으로 쓰는 두 팀의 맞대결. 서울 팬들의 자존심을 건 한판.',bg:'linear-gradient(135deg,#c30452,#131230)'},
            {teams:'KIA vs 삼성',badge:'전통 라이벌',name:'한국판 엘클라시코',desc:'KBO 역사에서 우승을 가장 많이 나눠가진 두 명문 구단. 한국 야구의 역사가 담긴 대결.',bg:'linear-gradient(135deg,#ea0029,#074ca1)'},
            {teams:'롯데 vs NC',badge:'낙동강 더비',name:'경남 자존심 대결',desc:'부산 롯데와 창원 NC의 경남 지역 더비. 양 팀 팬들의 응원이 뜨겁기로 유명.',bg:'linear-gradient(135deg,#041e42,#315288)'},
            {teams:'LG vs 키움',badge:'서울 더비',name:'서울 하늘 쟁탈전',desc:'같은 서울을 연고지로 하는 두 팀의 더비. 잠실과 고척이라는 독특한 구장 대결.',bg:'linear-gradient(135deg,#c30452,#570514)'},
          ].map(d=>`<div class="derby-item"><div class="derby-img" style="background:${d.bg}">${d.teams}</div><div class="derby-body"><span class="derby-badge">${d.badge}</span><div class="derby-teams">${d.teams}</div><div class="derby-name">${d.name}</div><p class="derby-desc">${d.desc}</p></div></div>`).join('')}
        </div>`);

// 17. faq.html — 직관 꿀팁 FAQ (FAQ형)
innerPage('faq.html','직관 꿀팁 & FAQ','faq.html','직관 꿀팁 FAQ', `
        <div class="faq-list">
          <ul>
            ${[
              ['처음 직관 가는데 얼마나 일찍 도착해야 하나요?','경기 시작 30~40분 전 도착을 추천해요. 입구 줄, 자리 찾기, 먹거리 구입 시간이 필요해요.','faq-1','show'],
              ['어떤 좌석이 처음 직관에 좋나요?','응원 분위기를 느끼고 싶다면 1루 외야석, 조용히 집중하고 싶다면 내야 지정석을 추천해요.','faq-2',''],
              ['외부 음식을 가져가도 되나요?','대부분 구장은 외부 음식 반입 가능이에요. 단 유리병·캔은 불가. 페트병이나 포장 음식으로 준비하세요.','faq-3',''],
              ['응원가를 몰라도 괜찮나요?','물론이에요! 처음엔 주변 사람 따라하면 돼요. 응원단장이 리드하니까 따라가기만 해도 충분히 즐거워요.','faq-4',''],
              ['비가 오면 경기가 취소되나요?','약한 비라면 경기를 진행해요. 강한 비나 천둥·번개 시 중단 또는 취소될 수 있어요.','faq-5',''],
              ['상대팀 유니폼을 입고 가도 되나요?','입장은 가능하지만 홈팀 응원석에서는 눈치가 보일 수 있어요. 원정팀 응원석에 앉으면 편해요.','faq-6',''],
              ['우천 취소되면 환불이 되나요?','5이닝 이상 진행된 경기는 정식 경기로 인정되어 환불이 안 돼요. 5이닝 미만은 환불 또는 재관람권 제공.','faq-7',''],
              ['직관 처음인데 혼자 가도 괜찮나요?','완전히 괜찮아요! 혼자 직관하는 분들도 많아요. 오히려 혼자가면 더 자유롭게 즐길 수 있어요.','faq-8',''],
            ].map(([q,a,id,show])=>`
            <li data-aos="fade-up">
              <i class="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" class="${show?'collapse':'collapsed'}" data-bs-target="#${id}">${q} <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="${id}" class="collapse ${show}" data-bs-parent=".faq-list"><p>${a}</p></div>
            </li>`).join('')}
          </ul>
        </div>`);

// 18. map.html — 연고지 지도 (지도+리스트)
innerPage('map.html','KBO 연고지 지도','map.html','연고지 지도', `
        <style>
          .map-wrap{display:grid;grid-template-columns:1.4fr 1fr;gap:28px;align-items:start}
          .map-box{background:#f4f4f4;border-radius:14px;overflow:hidden;border:1px solid #eee;height:440px;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:14px}
          .region-group{margin-bottom:24px}
          .region-group h4{font-size:13px;font-weight:700;color:#aaa;letter-spacing:.5px;margin-bottom:10px;text-transform:uppercase}
          .region-item{display:flex;align-items:center;gap:12px;padding:12px 16px;background:#fff;border:1px solid #eee;border-radius:10px;margin-bottom:8px;transition:border-color .2s}
          .region-item:hover{border-color:#1bac91}
          .region-dot{width:12px;height:12px;border-radius:50%;flex-shrink:0}
          .region-item h5{font-size:14px;margin-bottom:2px}
          .region-item p{font-size:11px;color:#aaa}
          @media(max-width:700px){.map-wrap{grid-template-columns:1fr}}
        </style>
        ${sectionTitle('KBO 연고지 지도','내 지역에 가까운 구단을 찾아보세요')}
        <div class="map-wrap">
          <div class="map-box">[ 한국 지도 + 구단 위치 핀 이미지 ]</div>
          <div>
            ${[
              {region:'수도권',teams:[{n:'LG 트윈스',city:'서울',c:'#c30452'},{n:'두산 베어스',city:'서울',c:'#131230'},{n:'키움 히어로즈',city:'서울',c:'#570514'},{n:'SSG 랜더스',city:'인천',c:'#ce0e2d'},{n:'KT 위즈',city:'수원',c:'#000000'}]},
              {region:'영남권',teams:[{n:'NC 다이노스',city:'창원',c:'#315288'},{n:'롯데 자이언츠',city:'부산',c:'#041e42'},{n:'삼성 라이온즈',city:'대구',c:'#074ca1'}]},
              {region:'호남·충청',teams:[{n:'KIA 타이거즈',city:'광주',c:'#ea0029'},{n:'한화 이글스',city:'대전',c:'#fc4e00'}]},
            ].map(rg=>`<div class="region-group"><h4>${rg.region}</h4>${rg.teams.map(t=>`<div class="region-item"><div class="region-dot" style="background:${t.c}"></div><div><h5>${t.n}</h5><p>📍 ${t.city}</p></div></div>`).join('')}</div>`).join('')}
          </div>
        </div>`);

// 19. course.html — 직관 코스 추천 (코스 타임라인 카드)
innerPage('course.html','직관 코스 추천','course.html','직관 코스 추천', `
        <style>
          .course-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}
          .course-card{background:#fff;border:1px solid #eee;border-radius:18px;overflow:hidden;transition:transform .2s}
          .course-card:hover{transform:translateY(-5px)}
          .course-header{padding:22px;color:#fff}
          .course-header h4{font-size:19px;margin-bottom:4px}
          .course-header p{font-size:13px;opacity:.85}
          .course-body{padding:20px}
          .course-step{display:flex;gap:12px;padding:10px 0;border-bottom:1px dashed #eee}
          .course-step:last-child{border:none}
          .cs-time{font-size:11px;color:#1bac91;font-weight:700;min-width:70px;padding-top:2px}
          .cs-desc h5{font-size:13px;margin-bottom:2px}
          .cs-desc p{font-size:11px;color:#888}
          @media(max-width:600px){.course-grid{grid-template-columns:1fr}}
        </style>
        ${sectionTitle('직관 코스 추천','구장별 주변 맛집·카페와 함께 즐기는 직관 코스예요')}
        <div class="course-grid">
          ${[
            {title:'잠실 직관 코스',sub:'LG · 두산',c:'linear-gradient(135deg,#c30452,#8a0339)',steps:[['경기 3시간 전','석촌호수 카페','잠실 석촌호수 뷰 카페에서 시작'],['경기 1.5시간 전','잠실 식사','롯데월드몰 푸드코트 또는 근처 맛집'],['경기 40분 전','잠실야구장 입장','2호선 종합운동장역 5번 출구 도보 5분'],['경기 종료 후','송파 야식','치맥이나 포장마차에서 마무리']]},
            {title:'사직 직관 코스',sub:'롯데 자이언츠',c:'linear-gradient(135deg,#041e42,#1a3a6b)',steps:[['경기 3시간 전','서면 카페거리','부산 서면의 트렌디한 카페에서 출발'],['경기 2시간 전','부산 돼지국밥','사직 근처 전통 돼지국밥으로 배 채우기'],['경기 40분 전','사직야구장 입장','3호선 사직역 도보 10분'],['경기 종료 후','부산 야경','광안리 또는 해운대에서 마무리']]},
            {title:'고척 직관 코스',sub:'키움 히어로즈',c:'linear-gradient(135deg,#570514,#3a020d)',steps:[['경기 3시간 전','구로 맛집 탐방','고척 근처 다양한 로컬 맛집 방문'],['경기 1시간 전','고척스카이돔 입장','1호선 구일역 도보 5분. 실내라 편안'],['경기 중','돔구장 먹거리','날씨 상관없이 쾌적한 실내에서 직관'],['경기 종료 후','신도림 야식','신도림역 근처에서 야식으로 마무리']]},
            {title:'창원 직관 코스',sub:'NC 다이노스',c:'linear-gradient(135deg,#315288,#1a2e50)',steps:[['경기 3시간 전','창원 특화거리','창원 시내 특화거리에서 식사와 쇼핑'],['경기 1시간 전','창원NC파크 입장','가장 예쁜 구장 중 하나로 유명'],['경기 중','구장 포토스팟','아름다운 구장 전경에서 인증샷 필수'],['경기 종료 후','마산 횟집','경남의 신선한 해산물로 마무리']]},
          ].map(c=>`<div class="course-card"><div class="course-header" style="background:${c.c}"><h4>${c.title}</h4><p>${c.sub}</p></div><div class="course-body">${c.steps.map(([t,p,d])=>`<div class="course-step"><div class="cs-time">${t}</div><div class="cs-desc"><h5>${p}</h5><p>${d}</p></div></div>`).join('')}</div></div>`).join('')}
        </div>`);

// 20. contact.html — 문의 (폼형)
innerPage('contact.html','문의','contact.html','문의', `
        <section id="contact" class="contact" style="padding:0">
          <div class="row no-gutters justify-content-center" data-aos="fade-up">
            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">
                <div class="address"><i class="bi bi-geo-alt"></i><h4>소속:</h4><p>중앙대학교 표준웹테크놀로지 01분반</p></div>
                <div class="email mt-4"><i class="bi bi-people"></i><h4>팀명:</h4><p>TEAM 리싸인</p></div>
                <div class="phone mt-4"><i class="bi bi-person-badge"></i><h4>팀원:</h4><p>20221169 손범관 · 20202899 전우빈</p></div>
              </div>
            </div>
            <div class="col-lg-5 d-flex align-items-stretch">
              <iframe style="border:0;width:100%;height:270px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163!2d126.95!3d37.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sko!2skr!4v1" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
          <div class="row mt-5 justify-content-center" data-aos="fade-up">
            <div class="col-lg-10">
              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group"><input type="text" name="name" class="form-control" placeholder="이름" required></div>
                  <div class="col-md-6 form-group mt-3 mt-md-0"><input type="email" class="form-control" name="email" placeholder="이메일" required></div>
                </div>
                <div class="form-group mt-3">
                  <select class="form-control" name="subject">
                    <option>오류 제보</option><option>내용 수정 요청</option><option>기능 제안</option><option>기타 문의</option>
                  </select>
                </div>
                <div class="form-group mt-3"><input type="text" class="form-control" name="subject2" placeholder="제목" required></div>
                <div class="form-group mt-3"><textarea class="form-control" name="message" rows="5" placeholder="내용을 자세히 작성해주세요" required></textarea></div>
                <div class="my-3"><div class="loading">Loading</div><div class="error-message"></div><div class="sent-message">메시지가 전송됐어요!</div></div>
                <div class="text-center"><button type="submit">문의 보내기</button></div>
              </form>
            </div>
          </div>
        </section>`);

// 완료 출력
const files = fs.readdirSync(dir).filter(f=>f.endsWith('.html'));
console.log(`✅ 완료! 총 ${files.length}개 HTML 파일 생성`);
console.log(files.join('\n'));
