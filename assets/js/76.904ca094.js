(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{427:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"godot-고도-게임엔진"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#godot-고도-게임엔진"}},[t._v("#")]),t._v(" godot (고도 게임엔진)")]),t._v(" "),s("p",[t._v("오픈소스 게임엔진 godot(아마 godot4 기준)에 대한 포스팅입니다.")]),t._v(" "),s("p",[t._v("2D 게임을 다루고 있어서 3D에 대한 내용은 아마 없..")]),t._v(" "),s("p",[t._v("장점으로는 타 엔진이 대략 30%의 수수료를 가져가는것과 다르게 오픈소스라 라이센스비용이 들지않는다는 점.")]),t._v(" "),s("p",[t._v("그리고 직관적으로 설계되어 많은 부분들이 배우지 않아도 이해하여 사용하기 쉽다.")]),t._v(" "),s("p",[t._v("그 말은 상대적으로 "),s("code",[t._v("배우기 쉬운 엔진")]),t._v("이라는 의미")]),t._v(" "),s("p",[t._v("이 엔진 또한 다양한 플랫폼에서 빌드가 가능함.")]),t._v(" "),s("p",[t._v("언어도 선택의 여지가 넓음. 반대로 GDscript라는 자체언어가 있는데, 아무래도 이게 공식 언어다보니 호환성이 가장 좋은듯하고 썼을때 가장 무난한 느낌. 두번째로는 유니티를 저격하는건지 C#을 공식 지원한다.")]),t._v(" "),s("p",[t._v("GDS는 마치 파이썬과 ts의 하위호환을 합쳐놓은듯한 느낌. js 개발자인 나는 꽤나 비슷하다고 느꼈지만 js가 편한 부분도 많아서 가끔 그립다.")]),t._v(" "),s("h2",{attrs:{id:"기본컨셉"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기본컨셉"}},[t._v("#")]),t._v(" 기본컨셉")]),t._v(" "),s("p",[t._v("godot4에선(이전버전 모름) 노드라는 개념으로 장면(씬)을 구성한다.")]),t._v(" "),s("p",[t._v("2D게임을 제작할때 최상위노드는 Node2D 이다.")]),t._v(" "),s("p",[t._v("왼쪽상단을 보면 Scene이라는 탭이 있고, 거기에서 Node2D를 생성하고 하위 노드로 게임에 필요한 배경이나 캐릭터 등을 모두 추가한다.")]),t._v(" "),s("p",[t._v("그리고 노드는 씬으로 저장할수있어서 godot4 gui에서 단순히 드래그드롭으로 또 다른씬에 추가할 수 있고, 재활용하거나 인스턴스를 Programmatic하게 생성할 수 있다.")]),t._v(" "),s("p",[t._v("노드를 추가하면 게임엔진에서 기본적으로 제공하는 노드들이 아주 많다. 필요한건 대부분 구현되어있다.")]),t._v(" "),s("p",[t._v("없는건 노드들끼리 조합해서 사용하면 된다.")]),t._v(" "),s("h2",{attrs:{id:"노드와-충돌처리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#노드와-충돌처리"}},[t._v("#")]),t._v(" 노드와 충돌처리")]),t._v(" "),s("p",[t._v("캐릭터를 만들고싶으면 "),s("code",[t._v("CharacterBody2D")]),t._v("노드를 사용하면 된다.")]),t._v(" "),s("p",[t._v("그리고 "),s("code",[t._v("CollisionShape2D")]),t._v("를 추가하여 충돌처리를 한다.")]),t._v(" "),s("p",[s("code",[t._v("CharacterBody2D")]),t._v("를 노드트리에서 선택하고, inspector를 보면")]),t._v(" "),s("p",[t._v("collision layer, mask도 설정할 수 있다.")]),t._v(" "),s("p",[t._v("collision layer는 해당 노드가 어떤 충돌 타입을 가지는지 지정하면 된다.")]),t._v(" "),s("p",[t._v("player 캐릭터라면, collision layer중에 하나를 선택하고 layer이름을 player라는것을 인지할수있게 이름을 변경하고 layer를 선택해준다.")]),t._v(" "),s("p",[t._v("그리고 지형과 충돌하게 만들려면, 지형에 해당하는 노드에 mask를 player로 설정하면 된다.")]),t._v(" "),s("p",[t._v("collision layer와 mask를 이용하면 까다롭고 복잡한 충돌 관계를 쉽게할 수 있다.")]),t._v(" "),s("h2",{attrs:{id:"signal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#signal"}},[t._v("#")]),t._v(" Signal")]),t._v(" "),s("p",[t._v("signal이라는 개념이 있다.")]),t._v(" "),s("p",[t._v("게임 ui에 버튼이 있고, 그것을 pressed했을때 signal이 발생하고,")]),t._v(" "),s("p",[t._v("signal에 연결된 함수를 호출하는 개념이다.")]),t._v(" "),s("p",[t._v("fe개발자라면 이벤트버스라고 생각해도 좋다.")]),t._v(" "),s("div",{staticClass:"language-gdscript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-gdscript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pressed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button pressed!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);