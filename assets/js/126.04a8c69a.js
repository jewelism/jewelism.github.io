(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{478:function(e,t,a){"use strict";a.r(t);var s=a(25),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"letsencrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#letsencrypt"}},[e._v("#")]),e._v(" letsencrypt")]),e._v(" "),a("h2",{attrs:{id:"letsencrypt-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#letsencrypt-2"}},[e._v("#")]),e._v(" letsencrypt")]),e._v(" "),a("p",[e._v("letsencrypt 라는 서비스는,")]),e._v(" "),a("p",[e._v("https를 사용하기위한 인증서를 무료로 사용할 수 있게 해줍니다!")]),e._v(" "),a("p",[e._v("하지만 3개월마다 갱신을 해줘야하는데~ 쉘스크립트&크론탭을 사용하면 자동화시킬수있습니다.")]),e._v(" "),a("p",[e._v("ubuntu18 lts 기준으로 작성하였습니다~")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" letsencrypt\n")])])]),a("p",[e._v("혹시 80, 443 포트가 사용중이라면 안전한 ssl 세팅을 위해 잠시 중지해주세요.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" letsencrypt certonly --standalone -d 도메인\n")])])]),a("p",[e._v("끝")]),e._v(" "),a("p",[e._v("맥에서는 방법이 조금 다릅니다.")]),e._v(" "),a("p",[e._v("homebrew에 letsencrypt 모듈이 없고,")]),e._v(" "),a("p",[e._v("certbot을 대신 사용하면 됩니다.")]),e._v(" "),a("h2",{attrs:{id:"crontab을-이용한-auto-renew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crontab을-이용한-auto-renew"}},[e._v("#")]),e._v(" crontab을 이용한 auto renew")]),e._v(" "),a("p",[e._v("3개월마다 인증서를 갱신해야하는데, 매번하는건 귀찮기도하고 까먹을수도 있으므로")]),e._v(" "),a("p",[e._v("쉘스크립트와 크론탭을 사용하여 자동화시켜보겠다.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://dl.eff.org/certbot-auto "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" a+x certbot-auto "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" certbot-auto /etc/letsencrypt/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("crontab")]),e._v(" -e\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vi")]),e._v(" /etc/letsencrypt/renewal/"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${domain}")]),e._v(".conf\n")])])]),a("p",[e._v("아래 라인을 찾아서 앞에 #을 붙여서 주석처리해준다")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# standalone_supported_challenges = "tls-sni-01,http-01"\n')])])]),a("p",[e._v("에디터를 선택하고 열면, 아래 스크립트를 작성한다. nginx기준 일주일에 한번, 2:45 시간에 맞춰서 자동으로 스크립트가 동작할것이다.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("45 2 * * 6 sudo service nginx stop && /etc/letsencrypt/certbot-auto renew && sudo service nginx start\n")])])]),a("p",[e._v("ref: "),a("a",{attrs:{href:"https://www.onepagezen.com/letsencrypt-auto-renew-certbot-apache/#step1",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.onepagezen.com/letsencrypt-auto-renew-certbot-apache/#step1"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"트러블슈팅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#트러블슈팅"}},[e._v("#")]),e._v(" 트러블슈팅")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("To fix these errors, please make sure that your domain name was\n   entered correctly and the DNS A/AAAA record(s) for that domain\n   contain(s) the right IP address. Additionally, please check that\n   your computer has a publicly routable IP address and that no\n   firewalls are preventing the server from communicating with the\n   client. If you're using the webroot plugin, you should also verify\n   that you are serving files from the webroot path you provided.\n")])])]),a("p",[e._v("이런 에러메시지와 마주치게된다면..")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("certbot certonly -d 도메인 --manual --preferred-challenges dns\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NOTE: The IP of this machine will be publicly logged as having requested this\ncertificate. If you're running certbot in manual mode on a machine that is not\nyour server, please ensure you're okay with that.\n\nAre you OK with your IP being logged?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n(Y)es/(N)o: Y\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Please deploy a DNS TXT record under the name\n_acme-challenge.somedomain.com with the following value:\n\n여기에 나오는 키를 복사해두세요!!\nsadfadsf6a8s7df67a8sd6f78 <<요런거\n\nBefore continuing, verify the record is deployed.\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\nPress Enter to Continue\n")])])]),a("p",[e._v("DNS 서버에 TXT 레코드를 등록하는데, 호스트의 prefix로 _acme-challenge를 쓰는걸 빼먹지마세요!!")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("host => _acme-challenge.somedomain.com\n")])])]),a("p",[e._v("TXT의 value에 아까 복사한걸 붙여넣으시면 됩니다.")]),e._v(" "),a("p",[e._v("새로운 터미널에서 등록됐는지 먼저 확인한다음에")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("nslookup -q=TXT _acme-challenge.somedomain.com\n")])])]),a("p",[e._v("원래 진행하던 터미널에서 엔터누르고 발급하면 끝")]),e._v(" "),a("p",[e._v("트러블슈팅 reference: "),a("a",{attrs:{href:"https://www.lesstif.com/pages/viewpage.action?pageId=59343172",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.lesstif.com/pages/viewpage.action?pageId=59343172"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);