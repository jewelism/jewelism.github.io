(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{474:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"certbot-aws-https-setting-with-wildcard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#certbot-aws-https-setting-with-wildcard"}},[t._v("#")]),t._v(" Certbot, aws https setting with wildcard")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" certbot\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" certbot certonly --manual --preferred-challenges dns -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.{domain}"')]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{domain}"')]),t._v(" --server https://acme-v02.api.letsencrypt.org/directory\n")])])]),a("p",[t._v("과정들을 따라하다보면...")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Please deploy a DNS TXT record under the name\n_acme-challenge.{domain} with the following value:\n\n{요기 나오는 문자들!}\n\nBefore continuing, verify the record is deployed.\n")])])]),a("p",[t._v("요기나오는 문자들을 복사하여,")]),t._v(" "),a("p",[t._v("_acme-challenge 라는 이름으로 TXT레코드를 생성하고 붙여넣으면된다.")]),t._v(" "),a("p",[t._v("그리고나서 아래 명령어로 DNS TXT가 변경됐는지 확인")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nslookup")]),t._v(" -q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("TXT _acme-challenge."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("변경되고나면 아까 진행하던 커맨드라인에서 엔터를 누르면 된다.")]),t._v(" "),a("p",[t._v("이것이 DNS로 인증하는방법.")]),t._v(" "),a("p",[t._v("pem인코딩 내용들은 아래서 확인한다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/letsencrypt/live/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/privkey.pem\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/letsencrypt/live/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/cert.pem\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/letsencrypt/live/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/chain.pem\n")])])]),a("p",[t._v("aws NLB에서 사용했다.")]),t._v(" "),a("p",[t._v("로드밸런서를 구성할때 참 편-안한 방법인것같다")])])}),[],!1,null,null,null);s.default=e.exports}}]);