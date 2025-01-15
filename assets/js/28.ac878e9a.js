(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{388:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"web-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-api"}},[t._v("#")]),t._v(" Web API")]),t._v(" "),a("p",[t._v("DOM(Document)")]),t._v(" "),a("p",[t._v("XHR(XmlHttpRequest) - ajax, fetch, axios")]),t._v(" "),a("p",[t._v("timeout - setTimeout, setInterval")]),t._v(" "),a("p",[t._v("이것들은 개발자가 접근할수없는, 호출만 가능한 스레드이다. (노드의 경우 C++ API)")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("delay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"end"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("위의 코드를 보면, setTimeout이 별도스레드에서 실행된다고 가정하면,")]),t._v(" "),a("p",[t._v("브라우저 콘솔에 이 코드를 붙여넣고 기능을 작동시켜보자.(버튼을 누른다던지)")]),t._v(" "),a("p",[t._v("end가 콘솔에 찍히기전에는 어떠한 동작도 실행되지않는다.")]),t._v(" "),a("p",[t._v("이것은 별도스레드에서 작동하는게 아니라,")]),t._v(" "),a("p",[t._v("싱글스레드인 이벤트루프와 큐를 통해 작동하고 있는 것을 확인할 수 있다.")]),t._v(" "),a("p",[t._v("하지만 fetch, XHR, worker API는 백그라운드 스레드에서 동작한다.")]),t._v(" "),a("p",[t._v("나머지 setTimeout, setInterval, RequestAnimationFrame, Promise는 메인 스레드 이벤트 루프다.")]),t._v(" "),a("p",[t._v("어차피 나중에 코드가 실행되는 것이므로, web api에 무거운 로직이 들어가서")]),t._v(" "),a("p",[t._v("오래걸리는게 싫다면 아래의 워커 api를 사용하면 된다.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/browser/worker-api.html"}},[t._v("worker API")])],1),t._v(" "),a("p",[t._v("이것은 js의 싱글스레드의 한계를 극복할수있게 도와주는 api이다.")]),t._v(" "),a("p",[t._v("별도의 워커스레드에서 스크립트를 실행한다.")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"settimeout-setinterval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-setinterval"}},[t._v("#")]),t._v(" setTimeout, setInterval")]),t._v(" "),a("p",[t._v("setTimeout, setInterval은 비동기로 함수를 실행시킬 수 있다.")]),t._v(" "),a("p",[t._v("setTimeout(callback, N)은 타이머id를 반환하고 대략(일반적으로 +4ms) {N}ms 후에 callback을 실행시킨다.")]),t._v(" "),a("p",[t._v("setInterval은 setTimeout과 유사하지만 함수호출을 쌓는다.")]),t._v(" "),a("p",[t._v("지정한 시간마다 함수를 실행시켜준다.")]),t._v(" "),a("p",[t._v("실행하는 코드가 일정시간 동안 블럭되도 계속 함수를 호출하기때문에 계속 쌓인다.")]),t._v(" "),a("p",[t._v("따라서 의도했던 실행주기를 보장할 수 없다.")]),t._v(" "),a("p",[t._v("블럭되는 코드를 해결하려면 recursive를 이용하자.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("somefunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("somefunc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("이렇게하면 함수 호출이 쌓이지도 않고, 제어하기도 쉽다.")]),t._v(" "),a("p",[t._v("마지막으로, 타이머를 모두 쓰고나면 리턴받은 타이머id로 clearTimeout을 해주자.")])])}),[],!1,null,null,null);s.default=e.exports}}]);