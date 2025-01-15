(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{431:function(t,a,s){"use strict";s.r(a);var e=s(25),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" Javascript")]),t._v(" "),s("p",[t._v("js는 브라우저에서 다양한 인터렉션을 위해 탄생한 언어입니다.")]),t._v(" "),s("p",[t._v("단시간에 만들어진 언어라 설계에 몇몇 문제가 있지만, 그럼에도 불구하고 브라우저에서 동작하는 언어로서 특히 fe개발자에게 중요한 언어입니다.")]),t._v(" "),s("p",[t._v("Javascript 개발자들이 알아야할 기본적인 것들을 정리해놨습니다.")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/browser/"}},[t._v("리스트에 없는 몇몇 브라우저의 API는 여기서 소개합니다")])],1),t._v(" "),s("p",[t._v("아래는 핵심적인 개념들을 설명합니다.")]),t._v(" "),s("h2",{attrs:{id:"프로그래밍-패러다임"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#프로그래밍-패러다임"}},[t._v("#")]),t._v(" 프로그래밍 패러다임")]),t._v(" "),s("ol",[s("li",[t._v("프로토타입기반의 상속모델과 객체지향 프로그래밍")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/js/functional.html"}},[t._v("함수형 프로그래밍")])],1),t._v(" "),s("li",[t._v("동적이고 유연하다")])]),t._v(" "),s("h2",{attrs:{id:"클래스-상속모델과-프로토타입-상속모델"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#클래스-상속모델과-프로토타입-상속모델"}},[t._v("#")]),t._v(" 클래스 상속모델과 프로토타입 상속모델")]),t._v(" "),s("p",[t._v("핵심은 프로토타입 상속모델로 클래스상속모델을 구현하는것은 매우 간단한 일이고, (실제로 ES6엔 class 키워드가 있다.)")]),t._v(" "),s("p",[t._v("반대로 클래스 상속 모델로 프로토타입 상속모델을 구현하는것은 매우 힘든 일이다.")]),t._v(" "),s("h2",{attrs:{id:"비동기란-그리고-자바스크립트에서-이것이-중요한-이유"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비동기란-그리고-자바스크립트에서-이것이-중요한-이유"}},[t._v("#")]),t._v(" 비동기란? 그리고 자바스크립트에서 이것이 중요한 이유")]),t._v(" "),s("p",[t._v("비동기 프로그래밍이란 엔진이 이벤트루프에서 실행된다는 의미이다.")]),t._v(" "),s("p",[t._v("동기적인 프로그래밍에서는 네트워크 요청이나 disk io 같은 시간이 오래걸리는")]),t._v(" "),s("p",[t._v("작업들이 실행되면 처리가 완료될때까지 블로킹된다.")]),t._v(" "),s("p",[t._v("싱글스레드를 채택하는 자바스크립트의 특징에서, 무거운 작업을 만나서 블로킹이 된다면,")]),t._v(" "),s("p",[t._v("다음작업을 실행할수없다. 브라우저상에서 네트워크 요청중에 아무작업도 할 수 없다면 얼마나 불편할까?")]),t._v(" "),s("p",[t._v("그래서 비동기가 등장하게 됐다.")]),t._v(" "),s("p",[t._v("노드에서도 기본적으로는 동시에 여러작업을 할 수는 없겠지만(워커를 사용하면 가능), 네트워크요청을 기다리고 처리하는동안 다른 리퀘스트를 받는 정도는 가능하다는 것이다. 비동기의 우수성은 이미 다른 언어나 환경에서도 채택할정도로 이미 입증됐다.")]),t._v(" "),s("h2",{attrs:{id:"just-in-time-compilation-jitc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#just-in-time-compilation-jitc"}},[t._v("#")]),t._v(" Just In Time Compilation (JITC)")]),t._v(" "),s("p",[t._v("현재 메이저 브라우저의 js엔진은 인터프리터가 아닌 JITC입니다.")]),t._v(" "),s("p",[t._v("자바스크립트 코드를 파싱하여 bytecode 형태로 변환하고, 기본적으로는 인터프리터가 한줄씩 코드를 해석 실행하지만 자주 반복되는(Hot Spot)이라면 native code로 컴파일하여 실행합니다.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775",target:"_blank",rel:"noopener noreferrer"}},[t._v("V8엔진의 Bytecode를 더 이해하고싶다면.."),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("nodejs는 8.x버전대 이상을 사용한다면 바이트코드를 직접 프린트해볼수도있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("node --print-bytecode --eval "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("+1\n")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);