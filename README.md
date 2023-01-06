# 박한순 포트폴리오 입니다.

리액트를 사용해 영화제에 출품된 영화 소개 페이지를 만들었습니다.

## 1. Components

모든 컴포넌트는 함수형으로 사용했습니다.

### Index.js

리액트 라우터를 사용하여 연도별 데이터를 분류합니다.

### App - 전체 페이지를 렌더링 합니다.

App에서 Header와 Content를 렌더링합니다.

### Header - 페이지 상단의 메뉴를 렌더링합니다.

페이지 로고를 페이지 상단에 표시합니다.
연도별 메뉴를 YearList를 통해 map으로 표시합니다.

### YearList - 상단 메뉴중 연도별 메뉴를 렌더링합니다.

사용자가 연도별로 데이터를 나눠 볼수 있는 메뉴를 제공합니다.

### Content - 페이지 하단의 데이터 리스트를 렌더링합니다.

MovieList를 map을 사용하여 나열합니다.

### MovieList - 영화 데이터를 표시해주는 컴포넌트입니다.

ListImg, ListDirector, ListActor, ListBranch, ListSynop 컴포넌트로 영화 데이터를 표시합니다.

## 2. 반응형 페이지

movie_list 클래스의 속성을 display: flex; flex-wrap: wrap; 줘서 가로 넓이에 맞게 데이터가 표현되도록 하였습니다.

## 3. 애니메이션

1. 상단 메뉴를 표시할때 NavLink를 사용하여 클릭된 메뉴에 className에 active가 추가 되게 했고,
   메뉴선택 사항이 변하도록 css를 transition: 0.6s; 해서 메뉴선택시 변화하도록 만들었습니다.

2. desc_area 클래스에 마우스 호버시 opacity를 100 주게 해서 포스터 위에 마우스를 올리면 상제정보가 나오도록 만들었습니다.

## 4. React Router사용

메뉴를 통한 페이지 이동은 ReactRouter를 사용하여 변경하였고, a태그 대신 NavLink컴포넌트를 사용하여 창이 새로고침 되지 않도록했습니다.
Github pages는 router를 지원하지않기 때문에 browerRouter대신 hashRouter를 사용햇습니다.

## 8. Git pages

https://phsmax9.github.io/pofolpage1.io/ 를 통해 완성된 페이지를 보실수 있습니다.
