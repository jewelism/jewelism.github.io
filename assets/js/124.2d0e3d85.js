(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{476:function(e,s,a){"use strict";a.r(s);var t=a(25),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"amazon-web-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amazon-web-service"}},[e._v("#")]),e._v(" Amazon Web Service")]),e._v(" "),a("p",[e._v("Amazon Web Service(이하 AWS)는 사용자에게 클라우드환경을 제공한다.")]),e._v(" "),a("p",[e._v("서버환경을 구축하려면 하드웨어를 포함한 다양한 인프라구축이 필요한데,")]),e._v(" "),a("p",[e._v("사용자마다 설정을 통해 원하는 하드웨어 스펙을 선택할수도있고, 서버인스턴스의 os까지 설정할 수 있다.")]),e._v(" "),a("p",[e._v("이런 부분을 설정에서 선택만 하면 자동으로 os까지 설치해주고, ssh를 통해 접속해서 사용하기만 하면 된다.")]),e._v(" "),a("p",[e._v("사용자 입장에서는 하드웨어와 다양한 low-level 네트워크(라우터 등..)를 설정하지않아도 되므로 신경쓸일이 거의 없다.")]),e._v(" "),a("p",[e._v("확장성에서도 훨씬 유리하다. 하드웨어를 갈아끼우듯이 서버를 일시정지시키고, 서버 스펙을 늘릴수도있다.")]),e._v(" "),a("p",[e._v("네트워크 대역이라던지.. 이런것은 말할필요도 없다.")]),e._v(" "),a("p",[e._v("한마디로 사이징(sizing)에서 너무나 유리하다.")]),e._v(" "),a("p",[e._v("사이즈를 크게 잡으면 비용낭비이다. 그렇다고 작게 잡으면 단기간에 늘리기 쉽지않다.")]),e._v(" "),a("p",[e._v("결정적으로 직접 서버환경을 구축하는 on-premise방식보다 결과적으로 금전적으로도 이득이라고 한다.")]),e._v(" "),a("p",[e._v("클라우드를 안 쓸 이유가 없다. (게임서버 제외)")]),e._v(" "),a("h2",{attrs:{id:"mac-os-x-에서-ec2를-접속하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-os-x-에서-ec2를-접속하기"}},[e._v("#")]),e._v(" MAC(OS X)에서 EC2를 접속하기")]),e._v(" "),a("p",[e._v("터미널 프로그램 (기본 터미널 : command + space -> ter -> 엔터) EC2 키파일(.pem) 준비 되었다면 아래와 같이 세팅합니다.")]),e._v(" "),a("p",[e._v("키파일을 원하는 위치에 복사하고 퍼미션을 400으로 조정합니다. (저는 ~/Desktop/key/로 정했습니다.)")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("400")]),e._v(" ~/Desktop/key/keyfile.pem\n")])])]),a("p",[e._v("터미널에서 키파일 옵션을 추가한 명령으로 ssh 접속")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" -i ~/Desktop/key/keyfile.pem ec2-user@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("서버 아이피 또는 도메인"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[e._v("아래는 참고 사항입니다.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pem 파일이 아닌 ppk를 키파일로 사용하는 경우 : SSH 키 비밀번호를 입력을 요구하면서 인증 에러 발생\nssh접속 시 도메인에 아이디를 붙이지 않는 경우 : Permission denied (publickey) 에러 발생\n")])])]),a("p",[e._v("아무 이상이없는데 permission denied가 계속 뜬다?")]),e._v(" "),a("p",[e._v("그럼 아래의 known_hosts 파일을 확인해보자")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vi ~/.ssh/known_hosts\n")])])]),a("p",[e._v("이 파일을 봐도 모르겠다면 그냥 내용을 싹다 날리고 저장하자. 그럼 접속이 잘 된다.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Reference")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://blog.freezner.com/archives/1249",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://blog.freezner.com/archives/1249"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);