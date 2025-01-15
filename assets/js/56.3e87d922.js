(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{421:function(a,t,s){"use strict";s.r(t);var e=s(25),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"react-native"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-native"}},[a._v("#")]),a._v(" react-native")]),a._v(" "),s("h2",{attrs:{id:"react-native-기본"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-native-기본"}},[a._v("#")]),a._v(" react-native 기본")]),a._v(" "),s("p",[a._v("react-native는 react기반으로 소스코드를 작성하고, 한번에 여러가지 모바일 플랫폼으로 빌드할 수 있다. 그래서 생산성이 엄청나다.")]),a._v(" "),s("p",[a._v("심지어 네이티브로 빌드된다. 웹뷰기반의 하이브리드앱보다는 당연히 성능이 좋다.")]),a._v(" "),s("p",[a._v("하지만 네이티브로 동작하기위해 브릿지를 사용하므로 네이티브보다는 앱 크기가 크고 더 느리다.")]),a._v(" "),s("p",[a._v("성능: native app > react-native app > webview 기반 hybrid app")]),a._v(" "),s("p",[a._v("생산성: 성능과 반대")]),a._v(" "),s("p",[a._v("한마디로 react-native를 사용하면 네이티브를 몰라도 가능하지만...")]),a._v(" "),s("p",[a._v("앱이 커지거나 복잡해져서 라이브러리에서 네이티브 기능을 커스터마이징 할 일이 생긴다면 결국은 네이티브를 알아야한다는 단점 또한 존재한다.")]),a._v(" "),s("p",[a._v("react native는 nodejs환경에서 간단한 명령어로 프로젝트를 생성할 수 있다.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g react-native-cli\nreact-native init 프로젝트이름\n")])])]),s("h3",{attrs:{id:"안드로이드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#안드로이드"}},[a._v("#")]),a._v(" 안드로이드")]),a._v(" "),s("p",[a._v("빌드하기전에..")]),a._v(" "),s("p",[a._v("안드로이드 sdk매니저를 통해 현 react-native에 맞는 sdk버전을 설치해줘야한다.")]),a._v(" "),s("h4",{attrs:{id:"실제-디바이스를-연결하는-경우"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실제-디바이스를-연결하는-경우"}},[a._v("#")]),a._v(" 실제 디바이스를 연결하는 경우")]),a._v(" "),s("ol",[s("li",[a._v("실제 디바이스를 개발pc에서 인식할수있도록 드라이버를 설치한다.")]),a._v(" "),s("li",[a._v("안드로이드 기기를 연결한다.")])]),a._v(" "),s("h4",{attrs:{id:"가상-디바이스로-연결하는-경우"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#가상-디바이스로-연결하는-경우"}},[a._v("#")]),a._v(" 가상 디바이스로 연결하는 경우")]),a._v(" "),s("ol",[s("li",[a._v("안드로이드의 avd를 통해 가상디바이스를 생성하고 실행한다.")])]),a._v(" "),s("p",[a._v("디바이스를 연결했다면 터미널 - 프로젝트가 있는곳")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("react-native run-android\n")])])]),s("p",[a._v("명령어를 실행하면 연결된 디바이스에서 앱이 자동으로 실행된다.")]),a._v(" "),s("h3",{attrs:{id:"ios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[a._v("#")]),a._v(" IOS")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("app store에서 xcode설치")])]),a._v(" "),s("li",[s("p",[a._v("ios 에뮬레이터 실행")])]),a._v(" "),s("li",[s("p",[a._v("명령어 실행")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("react-native run-ios\n")])])])])]),a._v(" "),s("h2",{attrs:{id:"apk-생성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apk-생성"}},[a._v("#")]),a._v(" APK 생성")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Debug 버전 빌드")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("react-native bundle --dev "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v(" --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" android "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" ./gradlew assembleDebug "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("Release버전 빌드 - android-app build.gradle에서 버전관리")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" android "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" ./gradlew assembleRelease "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n")])])]),s("p",[s("em",[s("strong",[a._v("run method")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("react-native run-android --variant"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("release\n")])])]),s("p",[a._v("Generated apk will be located at android/app/build/outputs/apk P.S. Another approach might be to modify gradle scripts.")]),a._v(" "),s("h2",{attrs:{id:"기본-사용방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기본-사용방법"}},[a._v("#")]),a._v(" 기본 사용방법")]),a._v(" "),s("p",[a._v("react-native(이하 RN)은 reactJS기반의 문법-JSX를 따른다.")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorldApp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Component")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Text"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("Hello world"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Text"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("react에서 사용하는 문법")]),a._v(" "),s("p",[a._v("마치 html, 혹은 xml태그와 비슷해보이는 JSX문법이다.")]),a._v(" "),s("p",[a._v("JSX는 ES6으로 작성된다.")]),a._v(" "),s("h3",{attrs:{id:"data-fetching"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-fetching"}},[a._v("#")]),a._v(" Data Fetching")]),a._v(" "),s("p",[a._v("서버에서 데이터를 가져와야할일이 생기면,")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/jewelism/boseok-note/tree/955b71efb6653d12b51fe12bb7c6883cc9155ab9/javascript/es6/fetch.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("fetch api"),s("OutboundLink")],1),a._v("를 사용하면 된다.")]),a._v(" "),s("p",[a._v("물론 axios같은 라이브러리도 가능하다.")]),a._v(" "),s("h3",{attrs:{id:"스타일적용하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스타일적용하기"}},[a._v("#")]),a._v(" 스타일적용하기")]),a._v(" "),s("p",[a._v("사실 버전업이 자주되어서 지금은 어떨지는 모르겠지만,")]),a._v(" "),s("p",[a._v("이 글을 작성하던 2017년 7월즈음에 사용하던 방법이다. (rn v0.4)")]),a._v(" "),s("h4",{attrs:{id:"스타일-2개-적용하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스타일-2개-적용하기"}},[a._v("#")]),a._v(" 스타일 2개 적용하기")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("styles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("styleOne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" styles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("styleTwo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("이런식으로 스타일에 배열을 끼워넣으면 된다.")]),a._v(" "),s("p",[a._v("이 경우의 우선순위가 배열에서 가장 뒤에있는 스타일이 적용된다.")]),a._v(" "),s("p",[a._v("버전업으로 동작하지않는다면..")]),a._v(" "),s("p",[a._v("Object.assign을 이용하면 될것같다.(추측)")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" styles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("styleOne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" styles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("styleTwo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"터치-제어-관련"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#터치-제어-관련"}},[a._v("#")]),a._v(" 터치 제어 관련")]),a._v(" "),s("p",[a._v("View 컴포넌트의 attr중에 pointerEvents='none'으로 설정해놓으면 그 뷰의 터치가 불가능해진다.")]),a._v(" "),s("p",[a._v("가능하게하고 싶으면 null로 지정하면된다.")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("pointerEvents"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("enable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  Enable"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("enable"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'none'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"image-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image-source"}},[a._v("#")]),a._v(" Image Source")]),a._v(" "),s("p",[a._v("네이티브와 마찬가지로 같은폴더내에 user.png user@2x.png user@3x.png가 있다면")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" userImg "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'경로/user.png'")]),a._v("\n")])])]),s("p",[a._v("해주면 해상도 크기에 맞는 이미지가 자동으로 삽입된다")]),a._v(" "),s("h3",{attrs:{id:"네이티브기능을-사용하는-라이브러리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#네이티브기능을-사용하는-라이브러리"}},[a._v("#")]),a._v(" 네이티브기능을 사용하는 라이브러리?")]),a._v(" "),s("p",[a._v("네이티브 기능을 사용하는 라이브러리라면,")]),a._v(" "),s("p",[a._v("ios는 cocoapods를 사용하면 되고, 안드로이드는 gradle을 사용하면 된다.")]),a._v(" "),s("p",[a._v("그 외에 라이브러리는 npm으로.")]),a._v(" "),s("h3",{attrs:{id:"유용한-라이브러리-15가지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#유용한-라이브러리-15가지"}},[a._v("#")]),a._v(" 유용한 라이브러리 15가지")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://codingislove.com/top-15-react-native-libraries/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://codingislove.com/top-15-react-native-libraries/"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);