(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{399:function(t,s,r){"use strict";r.r(s);var e=r(25),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"cors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" cors")]),t._v(" "),r("p",[t._v("브라우저에는 cors라는 정책이 있다.")]),t._v(" "),r("p",[t._v("너무너무 유명하므로 링크로 대치한다.")]),t._v(" "),r("p",[t._v("https://developer.mozilla.org/ko/docs/Web/HTTP/CORS")]),t._v(" "),r("p",[t._v("이 포스트에선 cors관련 다소 특이한 이슈들만 정리한다.")]),t._v(" "),r("h2",{attrs:{id:"공인망-사설망-http-요청시-에러"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#공인망-사설망-http-요청시-에러"}},[t._v("#")]),t._v(" 공인망 -> 사설망 http 요청시 에러")]),t._v(" "),r("p",[t._v("로컬 개발시 크로스 도메인에서 호스트 설정을 통해 개발하는 것은 꽤 흔한 일이다.")]),t._v(" "),r("p",[t._v("xxx.aaa 는 공인망, yyy.bbb가 사설망이라고 가정하자. (ip 클래스를 통해 확인하면 된다.)")]),t._v(" "),r("p",[t._v("단순히 xxx.aaa에서 yyy.bbb의 js 리소스만 불러오는데도 크롬 최신버전에선 cors 이슈가 발생할 수 있다.")]),t._v(" "),r("p",[t._v("크롬이 보안을 위해 업데이트된 것이 원인(?)이다.")]),t._v(" "),r("p",[t._v("https://developer.chrome.com/blog/private-network-access-update/")]),t._v(" "),r("p",[t._v("해결 방법으로는")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("https로 웹서빙을 하자.")])]),t._v(" "),r("li",[r("p",[t._v("호스트를 사설망으로만 구성된 호스트로 변경하여 해결한다. (or 사설망 → 공인망 구성도 가능)")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);