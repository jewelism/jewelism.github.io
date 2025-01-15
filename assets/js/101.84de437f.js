(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{455:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"프로토타입-prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로토타입-prototype"}},[t._v("#")]),t._v(" 프로토타입 (prototype)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("프로토타입을 공유하면 객체간에 속성이나 메소드를 공유할 수 있습니다.\n\n생성자로 객체를 생성하지않고, 팩토리 패턴으로 객체를 생성할때는\n\n속성을 공유하지않으므로 메모리를 조금 더 사용한다.\n")])])]),a("p",[t._v("보통 클래스 스타일의 상속 모델을 사용하는데, 자바스크립트는 역시나 특이하게도 프로토타입 상속모델을 사용합니다.")]),t._v(" "),a("p",[t._v("스코프에도 체인이 있듯이, 프로토타입에도 체인이 있습니다. 이것으로 상속을 구현합니다.")]),t._v(" "),a("p",[t._v("그리고 자바스크립트에는 메소드가 없지만, 편의상 속성에 함수가 바인딩 된거라면 메소드라고 하겠습니다.")]),t._v(" "),a("h2",{attrs:{id:"프로토타입-체인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로토타입-체인"}},[t._v("#")]),t._v(" 프로토타입 체인")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("객체에서 어떤 프로퍼티를 참조하려고할때(in 연산자, iterate 포함), \n\n그 객체 자체 속성을 탐색하다가 못 찾으면 자신의 프로토타입에서 속성을 찾고, 그것을 반복한다.\n\n`[[Prototype]]`이라는 private 속성은 자신의 프로토타입이 되는 다른 객체를 가리킨다.\n\n만약 프로토타입을 계속 거슬러 올라가다가\n\nnull을 프로토타입으로 가지는 오브젝트를 만나면 그제서야 프로퍼티 참조를 멈춘다.\n")])])]),a("p",[t._v("자바스크립트 콘솔에서 객체를 열어본적 있으신가요?")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("이렇게 객체를 콘솔로그를 남기고 열어보시면,")]),t._v(" "),a("p",[t._v("window 객체의 수많은 프로퍼티들과 프로토타입, "),a("code",[t._v("__proto__")]),t._v(" 프로퍼티가 있는걸 확인할 수 있습니다! (예제에서는 빈 객체이므로 프로토타입 체인만 보입니다.)")]),t._v(" "),a("p",[t._v("아래는 자바스크립트로 구현한 Linked List의 일부분입니다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("LinkedList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      current "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("6라인을 보시면 LinkedList function 프로토타입에 add라는 프로퍼티가 있죠?")]),t._v(" "),a("p",[t._v("프로토타입은 보통 이런식으로 사용합니다.")]),t._v(" "),a("p",[t._v("add라는 LinkedList.prototype의 속성에 바인딩된 함수를 빌려쓰는거죠.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("프로토타입 체인은,")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("프로토타입 체인을 만드는데 사용하고 어떤값이든 넣어도 괜찮지만,")]),t._v(" "),a("p",[t._v("위 코드처럼 primitive 값을 대입하면 무시됩니다.")]),t._v(" "),a("h2",{attrs:{id:"프로토타입-탐색"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로토타입-탐색"}},[t._v("#")]),t._v(" 프로토타입 탐색")]),t._v(" "),a("p",[t._v("객체의 프로퍼티를 참조하려고하면 js엔진은 해당 이름을 가진 프로퍼티를 찾을때까지")]),t._v(" "),a("p",[t._v("프로토타입 체인을 거슬러 올라가면서 탐색합니다.")]),t._v(" "),a("p",[t._v("없는 프로퍼티를 참조하려고하면, 프로토타입 체인 전체를 탐색합니다.")]),t._v(" "),a("h2",{attrs:{id:"hasownproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hasownproperty"}},[t._v("#")]),t._v(" hasOwnProperty")]),t._v(" "),a("p",[t._v("어떤 객체의 프로퍼티가 자기 자신의 프로퍼티인지, 프로토타입 체인에 있는것인지 확인하는 메소드입니다.")]),t._v(" "),a("p",[t._v("(다른말로, 이것으로 객체 메소드와 프로토타입 메소드를 구분할 수 있습니다.)")]),t._v(" "),a("p",[t._v("hasOwnProperty메소드는 프로토타입 체인을 탐색하지 않고 프로퍼티를 다룰수있는 유일한 방법입니다.")]),t._v(" "),a("p",[t._v("for in 문으로 객체를 탐색할때, 적절히 사용할 수 있다.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//공통코드")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 예제1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 예제2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { a: 1, b: 2 }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// c")]),t._v("\n")])])]),a("p",[t._v("브라우저마다 객체 순회 방법이 달라서 iteration 순서는 중요하지않지만, c가 출력되는것이 문제가 되는 경우도 있다.")]),t._v(" "),a("h2",{attrs:{id:"프로토타입을-사용할때-주의해야할점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로토타입을-사용할때-주의해야할점"}},[t._v("#")]),t._v(" 프로토타입을 사용할때 주의해야할점")]),t._v(" "),a("p",[t._v("프로토타입 체인이 너무 길지 않도록 적절히 사용하고")]),t._v(" "),a("p",[t._v("polyfill이나 ponyfill 같은 목적이 아니라면 네이티브 프로토타입을 확장하지말것 => Monkey Patching => 캡슐화를 망친다.")])])}),[],!1,null,null,null);s.default=e.exports}}]);