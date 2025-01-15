(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{490:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vscode-user-snippet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode-user-snippet"}},[t._v("#")]),t._v(" vscode user snippet")]),t._v(" "),a("h2",{attrs:{id:"개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),a("p",[t._v("역시나 맥 기준입니다")]),t._v(" "),a("p",[t._v("vscode에는 user snippet 기능이 있습니다")]),t._v(" "),a("p",[t._v("snippet은 대충 미리 코드뭉치를 만들어놓고 계속해서 생성해서 사용하는 개념이에요")]),t._v(" "),a("p",[t._v("react에서 매번 컴포넌트를 찍어낼때마다 공통적으로 반복해서 작성해야하는 코드들이 있죠.")]),t._v(" "),a("p",[t._v("예를 들어서")]),t._v(" "),a("p",[t._v("TopBottom.tsx 파일을 생성했다고 합시다.")]),t._v(" "),a("p",[t._v("그러면 파일 내부에 가장 먼저 작성하게되는 내용이")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("TopBottom")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("TopBottom"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" TopBottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("이런 모습이죠.")]),t._v(" "),a("p",[t._v("파일이름을 가지고 기본 컴포넌트의 내용을 만들어주는 user snippet 기능을 생성해봅시다.")]),t._v(" "),a("h2",{attrs:{id:"활용방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#활용방법"}},[t._v("#")]),t._v(" 활용방법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. command + shift + P\n2. snippet 타이핑\n3. Preferences: Configure User Snippets\n")])])]),a("p",[t._v("글로벌로 생성할지, 특정 프로젝트에만 생성할지 결정합시다. 저는 몇개 안써서 글로벌로 합니다.")]),t._v(" "),a("p",[t._v("특정 프로젝트에 생성하게되면, 프로젝트 내부에 .vscode 디렉토리에 스니펫이 저장됩니다.")]),t._v(" "),a("p",[t._v("이걸로 팀원들과 vscode snippet을 공유할수도 있겠죠.")]),t._v(" "),a("p",[t._v("아래처럼 내용을 수정합니다.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and ")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope ")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is ")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: ")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. ")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Placeholders with the same ids are connected.")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example:")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rcc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "scope": "javascript,typescript",')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prefix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rcc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"body"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"const $TM_FILENAME_BASE = () => {"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  return ("')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"    <div>$TM_FILENAME_BASE</div>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  );"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export default $TM_FILENAME_BASE;"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Create React Component"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("$TM_FILENAME_BASE")]),t._v("는 파일 이름을 뜻합니다. 작성하기가 좀 귀찮은 구조로 되어있지만.. 쉽죠?")]),t._v(" "),a("p",[t._v("이제 vscode에서 rcc를 타이핑하면, 자동완성기능이 스니펫을 사용할지 물어봐줍니다!")])])}),[],!1,null,null,null);s.default=n.exports}}]);