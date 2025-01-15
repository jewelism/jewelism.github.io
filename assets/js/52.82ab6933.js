(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{404:function(l,e,i){"use strict";i.r(e);var s=i(25),t=Object(s.a)({},(function(){var l=this,e=l.$createElement,i=l._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[i("h1",{attrs:{id:"pre-render"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pre-render"}},[l._v("#")]),l._v(" Pre-render")]),l._v(" "),i("p",[l._v("기존 SPA에서 발생하는 문제가 크게는 2가지로 나타난다.")]),l._v(" "),i("ol",[i("li",[l._v("초기로딩속도문제")])]),l._v(" "),i("p",[l._v("spa에서는 껍데기만 갖고있는 html파일과 스타일시트(css), 상대적으로 큰 js파일이 하나 존재하는데,")]),l._v(" "),i("p",[l._v("모든 페이지의 내용을 첫 로딩때 모두 불러오는것이다. (코드스플리팅이 안되어있다면)")]),l._v(" "),i("p",[l._v("미리 보여질 필요도 없는 내용을 미리 불러오는 것이기 때문에, 첫 로딩이 상대적으로 길게 느껴집니다.")]),l._v(" "),i("p",[l._v("극단적으로 앱이 너무 거대해져서 3초를 넘어가게되면 떠나가는 사용자들이 많이 생길텐데,")]),l._v(" "),i("p",[l._v("한명 한명이 미래의 수입이 될 사용자를 놓쳐선 안됩니다.")]),l._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[l._v("SEO")])]),l._v(" "),i("p",[l._v("서버에서 렌더링하는 방식과는 다르게, js가 로딩되고 난 후 js코드에 따라 dom이 생성됩니다.")]),l._v(" "),i("p",[l._v("js엔진이 없는 크롤러는 빈껍데기만있는 템플릿을 크롤링하기때문에, spa는 검색에서 불리한 위치입니다.")]),l._v(" "),i("p",[l._v("물론 구글같은 경우에는 크롤러에 js엔진이 내장되어있어서 문제없는데, 네이버는 js엔진이 없다고하네요.")]),l._v(" "),i("p",[l._v("우리나라 특성상 네이버검색을 포기하기에는 아직 조금 이르기때문에, 서버렌더링을 고려해야합니다.")]),l._v(" "),i("p",[l._v("위와 같은 문제를 해결하기 위해서는 pre-render, ssr이라는 두가지방법으로 해결할수있습니다.")]),l._v(" "),i("p",[l._v("여기서는 pre-render를 먼저 소개하겠습니다.")]),l._v(" "),i("p",[l._v("말 그대로 미리 렌더링하는 방식인데, 첫 페이지와 검색해서 나와야하는 페이지에 적용시키게되면, 앞선 2가지 문제를 해결할 수 있습니다.")]),l._v(" "),i("p",[l._v("그리고 ssr보다 구현이 상대적으로 간편합니다.")]),l._v(" "),i("p",[l._v("spa로 구현된 웹을 ssr방식으로 전환하려면, 굉장히 까다롭습니다.")]),l._v(" "),i("p",[l._v("직접 ssr을 구현할수있겠지만, 개발자가 충분하지않다면 결국 또 다른 프레임워크를 도입해야하거든요.")]),l._v(" "),i("p",[l._v("또 다른 프레임워크를 도입하면, 그 프레임워크의 api를 봐야하고..")]),l._v(" "),i("p",[l._v("안정성있는지 확인하고 테스트해봐야하고.. 겉으로는 별로 바뀌는게 없어보이는데 시간이 꽤 소요되죠.")]),l._v(" "),i("p",[l._v("그리고 정적파일 호스팅만 하면 되는 spa와는 달리 조금 더 복잡하고 귀찮은 서버환경도 필요하게 되죠.")]),l._v(" "),i("p",[l._v("그리고 렌더링하는 서버측의 부하도 무시할 수 없습니다.")]),l._v(" "),i("p",[l._v("요즘은 클라우드 서비스를 많이 사용하기때문에, 서버측 부하는 결국 돈으로 이어집니다.")]),l._v(" "),i("p",[l._v("pre-render는 그냥 웹팩에 플러그인을 추가하는 수준이라고 생각하시면 됩니다.")]),l._v(" "),i("p",[l._v("그리고 아래는 실제로 웹팩에 플러그인을 적용하는 방법입니다.")]),l._v(" "),i("p",[l._v("추천하는 사전렌더링 플러그인 prerender-spa-plugin")]),l._v(" "),i("p",[l._v("아래는 커맨드")]),l._v(" "),i("blockquote",[i("p",[l._v("npm i -D prerender-spa-plugin")])]),l._v(" "),i("p",[l._v("troubleshooting (ubuntu 18 lts)")]),l._v(" "),i("blockquote",[i("p",[l._v("sudo npm install puppeteer --unsafe-perm=true --allow-root")])]),l._v(" "),i("blockquote",[i("p",[l._v("sudo apt-get install libpangocairo-1.0-0 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 libxi6 libxtst6 libnss3 libcups2 libxss1 libxrandr2 libgconf2-4 libasound2 libatk1.0-0 libgtk-3-0")])]),l._v(" "),i("blockquote",[i("p",[l._v("sudo wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb")])]),l._v(" "),i("blockquote",[i("p",[l._v("sudo dpkg -i ./google-chrome-stable_current_amd64.deb")])]),l._v(" "),i("blockquote",[i("p",[l._v("sudo apt install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget")])]),l._v(" "),i("blockquote",[i("p",[l._v("sudo apt update")])]),l._v(" "),i("blockquote",[i("p",[l._v("sudo apt --fix-broken install")])])])}),[],!1,null,null,null);e.default=t.exports}}]);