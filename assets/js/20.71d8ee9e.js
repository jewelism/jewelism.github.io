(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{372:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"event"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event"}},[t._v("#")]),t._v(" Event")]),t._v(" "),s("p",[t._v("이벤트는 사용자 행위나 비동기적 작업의 진행을 나타내기 위해 API가 생성할 수도 있습니다.")]),t._v(" "),s("p",[t._v("'click' 이벤트를 발생시키기 위해서는 사용자가 버튼을 클릭한다던지, HTMLElement.click() 을 이용한다던지,")]),t._v(" "),s("p",[t._v("이벤트를 정의한 후 EventTarget.dispatchEvent()를 이용하여 프로그래밍으로 만들어낼수도 있습니다.")]),t._v(" "),s("p",[t._v("부모 엘리먼트와 자식 엘리먼트의 위치가 겹쳐있을때 이벤트는 양쪽 모두에서 일어나는데, 이벤트 처리 순서는")]),t._v(" "),s("p",[t._v("이벤트 확산, 캡쳐의 설정에 따라 달라집니다.")]),t._v(" "),s("h2",{attrs:{id:"이벤트-버블링-event-bubbling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-버블링-event-bubbling"}},[t._v("#")]),t._v(" 이벤트 버블링 (Event Bubbling)")]),t._v(" "),s("p",[t._v("이벤트가 발생됐을때 그 이벤트가 상위 엘리먼트로 퍼져나가는 현상을 말합니다.")]),t._v(" "),s("p",[t._v("이벤트는 기본적으로 버블링됩니다.")]),t._v(" "),s("p",[t._v("div내부에 button이 있고, button을 클릭하면 button의 click이벤트가 발생하고,")]),t._v(" "),s("p",[t._v("div 또한 click이벤트가 발생합니다. div의 click을 막고싶다면 아래에서 설명할")]),t._v(" "),s("p",[t._v("stopPropagation을 사용하세요")]),t._v(" "),s("h2",{attrs:{id:"이벤트-캡쳐-event-capture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-캡쳐-event-capture"}},[t._v("#")]),t._v(" 이벤트 캡쳐 (Event Capture)")]),t._v(" "),s("p",[t._v("이벤트 캡쳐는 이벤트 버블링의 반대방향으로 퍼져나가는 것을 뜻합니다.")]),t._v(" "),s("h2",{attrs:{id:"이벤트-위임-event-delegation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-위임-event-delegation"}},[t._v("#")]),t._v(" 이벤트 위임 (Event Delegation)")]),t._v(" "),s("p",[t._v("이벤트 위임은 단순히 상위 엘리먼트에 이벤트를 붙인걸 의미합니다.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tbody")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tbody")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("td를 클릭했을때의 이벤트를 등록할때 td에 등록하지않고, tr이나 tbody에 이벤트를 붙이고 활용하는것을")]),t._v(" "),s("p",[t._v("단순히 이벤트 위임이라고 표현합니다.")]),t._v(" "),s("p",[t._v("상위에서 이벤트를 감지하면, 하위 요소들이 바뀌는것에 조금 더 유연한 설계를 할 수 있죠.")]),t._v(" "),s("p",[t._v("대신 상황에 따라 분기처리가 필요합니다.")]),t._v(" "),s("p",[t._v("=> 의도한 EventTarget이 맞는지, 자식 요소가 있다면 자식요소를 포함하고 있는지 contains로 검사")]),t._v(" "),s("h2",{attrs:{id:"이벤트-등록-삭제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-등록-삭제"}},[t._v("#")]),t._v(" 이벤트 등록, 삭제")]),t._v(" "),s("p",[t._v("이벤트리스너는 등록하고 사용후 적절한 타이밍에 삭제해줘야합니다 => 메모리릭")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("EventTarget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useCapture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nEventTarget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useCapture"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("3가지 파라미터의 레퍼런스가 일치해야 삭제에 성공합니다.")]),t._v(" "),s("p",[t._v("useCapture는 버블링 대신 캡쳐를 선택할 수 있습니다.")]),t._v(" "),s("h3",{attrs:{id:"이벤트의-주요-프로퍼티"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이벤트의-주요-프로퍼티"}},[t._v("#")]),t._v(" 이벤트의 주요 프로퍼티")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이벤트가 처음에 발생했던 대상의 참조입니다.")]),t._v("\nEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPropagation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이벤트의 DOM 내 추가 확산을 방지합니다.")]),t._v("\nEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 취소 가능한 경우 이벤트를 취소합니다.")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);