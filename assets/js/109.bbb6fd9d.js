(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{466:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"var-let-const"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-let-const"}},[t._v("#")]),t._v(" var-let-const")]),t._v(" "),a("p",[t._v("var는 함수레벨 스코프를 가져서 블록레벨스코프에 변수를 선언해도 함수레벨어디서나 사용해도된다. (레퍼런스에러가 안난다는 의미)")]),t._v(" "),a("p",[t._v("그리고 재선언과 재할당이 가능하다.")]),t._v(" "),a("p",[t._v("ES6를 사용할수있는 환경이라면, 쓰지말도록하자.")]),t._v(" "),a("p",[t._v("let과 const로 완벽대체 가능.")]),t._v(" "),a("p",[t._v("let은 블록레벨 스코프의 변수이다. 다른언어들처럼.. const와 다르게 재할당 가능.")]),t._v(" "),a("p",[t._v("선언시 값을 대입해줄 필요가없음.")]),t._v(" "),a("p",[t._v("없는것을 참조하려고하면 레퍼런스에러가난다.")]),t._v(" "),a("p",[t._v("const도 블록레벨 스코프의 변수이고, 재할당이 불가능하다.")]),t._v(" "),a("p",[t._v("선언시 값을 대입해줘야함")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ok")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//error")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ok")]),t._v("\n")])])]),a("p",[t._v("const는 primitive에 대해서는 immutable이다.")]),t._v(" "),a("p",[t._v("object을 대입하면, immutable object는 아니다.")]),t._v(" "),a("p",[t._v("하지만 주소값은 변경할 수 없음. (재할당할수없음)")]),t._v(" "),a("p",[t._v("예를 들면 const 에 숫자나 문자열을 대입하면, 변경할수없다.")]),t._v(" "),a("p",[t._v("하지만 배열이나 오브젝트를 대입하고, 배열이나 오브젝트에 값을 추가하거나 뺄수있다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" numA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnumA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//에러")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" objA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobjA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'쥬얼리'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//에러")]),t._v("\nobjA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'쥬얼리'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//에러아님")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);