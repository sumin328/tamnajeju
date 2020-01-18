# Project Name
### TamnaJeju

    혹시 제주도 갈 계획 있으세요?

    제주도에는약 3,400 개의 카페가 있습니다. 그런데 왜 다들 같은 곳만 갈까요?
    당신의 제주 여행을 보다 더 풍성하게 만들어줄 제주 카페를 소개합니다.

    지역 별, 관광지 별, 내 취향 별로 제주 카페를 만나보세요.

    놀멍 쉬멍 마시멍!

   
### 접근방법
    - 카카오와 네이버맵에서 제주 카페 3,200개 리스트를 크롤링하여, EDA, 리뷰 텍스트 분석, 관광지 위치 기반 분석을 통해 추천 시스템을 구축했습니다.

### 활용 기술
    - 데이터 수집: Web Crawling, Selenium, Beautifulsoup, requests
    - 데이터 전처리:  Pandas, Jupyter notebook, Excel
    - 데이터 분석: Pandas, scikit-learn, Jupyter notebook, recommend system
    - 자연어 처리 : Konlpy, NLTK, Word2Vec
    - 데이터 시각화: matplotlib, D3.js, wordcloud, plotly, folium
    - 디자인: Adobe Illustrator, Adobe Photoshop, Adobe Indesign
    - 웹 퍼블리싱: HTML, CSS, JavaScript, Python, Github.io

### 팀원 역할 소개
    - 김다혜 : Data Analysis / Data Visualization
    - 이보람 : Data Analysis / Natural Language Processing
    - 오수민 : Data Analysis / Tech Leading
    - 장혜민 : Data Analysis / Recommender System
    - 한예은 : Data Analysis / Web Crawling
    - 황선영 : Data Analysis / Project Managing


## 웹 서버 실행

```bash
python -m http.server 8000
```

웹 브라우저에서 <http://localhost:8000/> 열기.
