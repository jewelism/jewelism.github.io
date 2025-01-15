(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{461:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[s._v("#")]),s._v(" type")]),s._v(" "),a("p",[s._v("자바스크립트는 타입이 없는 (척하는) 언어이다.")]),s._v(" "),a("p",[s._v("단순히 변수선언만 var, let, const를 이용해서 한다.")]),s._v(" "),a("p",[s._v("상황에 알맞게 형변환이 가능하다.")]),s._v(" "),a("p",[s._v("js의 primitive type")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("boolean\nstring\nnumber\nnull\nundefined\n")])])]),a("p",[s._v("참고 - number는 최대 2^53-1 => 더 큰 정수를 표현하려면 "),a("RouterLink",{attrs:{to:"/js/standard-built-in-object.html#bigint"}},[s._v("BigInt")]),s._v(" Standard built-in object를 사용")],1),s._v(" "),a("p",[s._v("Symbol 같은 경우에는 ES6에서 새롭게 추가된 스펙이다.")]),s._v(" "),a("p",[a("a",{attrs:{href:"#symbol"}},[s._v("설명이 길어지므로 여기에서는 제외하고 하단에서 설명한다.")])]),s._v(" "),a("h3",{attrs:{id:"이상한-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이상한-null"}},[s._v("#")]),s._v(" 이상한 null")]),s._v(" "),a("p",[s._v("자바스크립트에서 null은 조금 이상하다.")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('typeof null // "object"\n')])])]),a("p",[s._v("null은 자바스크립트를 깊숙하게 건드리지않는 이상 undefined와 차이가 없다고 봐도 된다.")]),s._v(" "),a("p",[s._v("null의 사용은 prototype을 끊을때 외에는 undefined를 사용해도 된다.")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("someObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("hr"),s._v(" "),a("p",[s._v("typeof 연산자를 쓰다보면 function이라는 타입이 있다고 착각할수도 있다.")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('typeof function(){} // "function"\n')])])]),a("p",[s._v('하지만 단순히 "1급 객체", "호출 가능한 객체"일 뿐이다. 실제로는 object의 하위 타입일뿐이다.')]),s._v(" "),a("p",[s._v("null과 undefined를 제외한 3가지는 primitive wrapper가 존재한다.")]),s._v(" "),a("p",[s._v("단순히 첫글자가 대문자일뿐이다.")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("Boolean\nString\nNumber\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'boseok'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h2",{attrs:{id:"boxing-unboxing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boxing-unboxing"}},[s._v("#")]),s._v(" boxing, unboxing")]),s._v(" "),a("p",[s._v("예를 들자면")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//object")]),s._v("\n")])])]),a("p",[s._v("== 연산자는 내부적으로 형변환해서 비교하기때문에 아예 안쓰는 연산자이지만 예를 들기위해서 사용하였음.")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/js/construct.html"}},[s._v("new 연산자의 설명은 여기서")])],1),s._v(" "),a("p",[s._v("여튼 위의 코드를 보면, wrapper 객체로 새롭게 생성한 Number의 객체의 타입은 당연히 숫자가 아니라 객체다.")]),s._v(" "),a("p",[s._v("그렇다면 아래와 같은 코드를 보자.")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" one "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" two "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" three "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" one "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("three"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" three"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//3 number")]),s._v("\n")])])]),a("p",[s._v("one은 객체고, two는 숫자이다.")]),s._v(" "),a("p",[s._v("객체와 숫자를 + 연산자로 합칠수있나?")]),s._v(" "),a("p",[s._v("콘솔로그를 보면 3이 찍히는걸 확인할 수 있다. 그리고 타입도 숫자이다.")]),s._v(" "),a("p",[s._v("이 말은 자동으로 형변환이 이루어진 것인데, wrapper가 벗겨져서 숫자가 된것이므로, 언박싱이라고 한다.")]),s._v(" "),a("p",[s._v("반대로 숫자가 객체로 변환된다면 그것은 박싱이다.")]),s._v(" "),a("p",[s._v("결론은 타입캐스팅을 자동으로 해준다.")]),s._v(" "),a("p",[s._v("그리고 객체가 아니라 단순히 값이나 리터럴을 사용하면 타입 변환이 더 많이 일어난다.")]),s._v(" "),a("p",[s._v("가능한 정확하게 타입을 변환해주는 것이 최선이다.")]),s._v(" "),a("p",[s._v("참고 - 박싱, 언박싱은 자바에서도 마찬가지다.")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"쉽고-빠른-타입캐스팅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#쉽고-빠른-타입캐스팅"}},[s._v("#")]),s._v(" 쉽고 빠른 타입캐스팅")]),s._v(" "),a("p",[s._v("숫자와 문자열 - 빈문자열과 +연산자 사용")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("p",[s._v("Boolean")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("p",[s._v("undefined, null, 0, '' 은 false처럼 작동한다. - 암묵적 타입변환")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//실행될수없음")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//실행될수없음")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("if문과 마찬가지로, &&연산자도 마찬가지다.")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("someFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//아무일도일어나지않음")]),s._v("\n")])])]),a("h2",{attrs:{id:"연산자의-작동방식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#연산자의-작동방식"}},[s._v("#")]),s._v(" && 연산자의 작동방식")]),s._v(" "),a("p",[s._v("위의 예제를 보면, someFunction을 호출하는 코드가 있는데 함수가 호출되지않는다.")]),s._v(" "),a("p",[s._v("&& 연산자는 앞의 expression을 평가해서, false처럼 작동한다면 && 뒤의 expression은 아예 실행조차하지않는다.")]),s._v(" "),a("p",[s._v("비슷하게 || 연산자는 앞의 expression이 true처럼 작동한다면 || 뒤의 expression은 실행하지않는다.")]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[s._v("#")]),s._v(" Symbol")]),s._v(" "),a("p",[s._v("ES6에 새롭게 추가된 스펙이다")]),s._v(" "),a("p",[s._v("Symbol은 새로운 primitive 타입이며,")]),s._v(" "),a("p",[s._v("기존에 object의 key로는 string only였는데, Symbol도 가능하게되었다.")]),s._v(" "),a("p",[s._v("object의 key는 어떤값을 넣던 string으로 타입캐스팅이 되면서 여러가지 문제점들이 있었는데,")]),s._v(" "),a("p",[s._v("ES6가 등장하면서 Map, Symbol등이 그 이슈들을 굉장히 좋은방법들로 해결해준다.")]),s._v(" "),a("p",[s._v("Symbol은 생성자가 없다. 그래서 함수호출형태로만 사용한다.")]),s._v(" "),a("p",[s._v("new 연산자를 못쓴다는 의미이다. wrapper객체를 생성하는 방법은 있긴하지만(Object(Symbol()))")]),s._v(" "),a("p",[s._v("원래의 심볼 목적인 객체 프로퍼티 키로 쓰려고하는 것에 어긋난다.")]),s._v(" "),a("p",[s._v("파라미터는 description이 유일하다. 어떤 용도인지 간단하게 메모하는정도이다. 값은 디버깅외에는 의미없다.")]),s._v(" "),a("p",[s._v("실제로 같은 desc를 넣고(숫자 1), 심볼을 2개 생성해서 객체의 키로 각각 설정해주고 콘솔로그를 보면,")]),s._v(" "),a("p",[s._v("똑같이 생긴 심볼 2개가 각각 객체 키로 설정되어있다. 내부적으로는 키값이 다른것이다.")]),s._v(" "),a("p",[s._v("s1과 s2를 비교해봐도 마찬가지로 다르다.")]),s._v(" "),a("p",[s._v("매 함수호출마다 다른 심볼들을 생성한다.")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" s2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {Symbol(1): 1, Symbol(1): 2}")]),s._v("\ns1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);