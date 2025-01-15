(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{382:function(e,t,r){"use strict";r.r(t);var n=r(25),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"reflow-layout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reflow-layout"}},[e._v("#")]),e._v(" reflow (layout)")]),e._v(" "),r("p",[e._v("리플로우라는것은 렌더링 트리의 일부(또는 전부)의 변경이 있을때 발생한다.")]),e._v(" "),r("p",[e._v("한마디로 리플로우는 배치를 뜻한다. 다른말로 레이아웃이라고도 한다.")]),e._v(" "),r("p",[e._v("렌더러가 생성되어 트리에 추가될 때 노드의 크기와 위치 정보는 없는데 이런 값을 계산하는 것이다.")]),e._v(" "),r("p",[e._v("그래서 첫 페이지의 레이아웃이 표시될때 리플로우가 일어난다.")]),e._v(" "),r("p",[e._v("렌더링 트리를 구성하는데 사용된 입력 정보의 어떤 변경도 리플로우와 리페인트를 발생시킨다. 구체적으로는 다음과 같은 경우이다.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("DOM 노드의 추가, 삭제 및 업데이트\ndisplay: none(리플로우와 리페인트) 또는 visibility: hidden(위치 변경은 일어나지 않기 때문에, 리페인트만) 등과 같은 DOM 노드 숨김\n페이지상에서 DOM 노드의 위치 이동 및 애니메이션\n스타일 속성의 약간의 변화를 위해 스타일 시트 추가\n윈도우 크기를 변경하거나 폰트 크기 변경, 그리고 스크롤 등 사용자의 액션\n")])])]),r("p",[e._v("이러한 일들이 자주 일어나기때문에, 브라우저는 작업을 큐에 밀어넣고 업데이트가 필요할때 큐를 플러시하여 리플로우를 최소화한다.")]),e._v(" "),r("p",[e._v("아래와 같은 작업의 get set은 큐를 플러시해야하는 작업들이다. 그러므로 for루프등 내부에 사용하게되면 루프를 돌때마다 리플로우가 일어나기때문에,")]),e._v(" "),r("p",[e._v("루프 바깥 블록에 할당해놓고 사용하는것이 유리하다.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("offsetTop, offsetLeft, offsetWidth, offsetHeight\nscrollTop, scrollLeft, scrollWidth, scrollHeight\nclientTop, clientLeft, clientWidth, clientHeight\ngetComputedStyle() 또는 IE의 currentStyle\n")])])]),r("p",[e._v("리플로우가 크기 변경 또는 렌더러 위치 변화때문에 실행되는 경우 렌더러의 크기는 다시 계산하지 않고 캐시로부터 가져온다.")]),e._v(" "),r("p",[e._v("큐나 캐싱으로 무거운 렌더링 작업을 최적화한다.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://gist.github.com/paulirish/5d52fb081b3570c81e3a",target:"_blank",rel:"noopener noreferrer"}},[e._v("리플로우를 유발하는 것들을 정리한 링크(?)"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" reference")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.mimul.com/pebble/default/2013/07/07/1373183724195.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.mimul.com/pebble/default/2013/07/07/1373183724195.html"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/wonism/TIL/blob/master/front-end/browser/reflow-repaint.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/wonism/TIL/blob/master/front-end/browser/reflow-repaint.md"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://d2.naver.com/helloworld/59361",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://d2.naver.com/helloworld/59361"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);