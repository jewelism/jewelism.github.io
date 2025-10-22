---
title: connect-aws
parent: server-side
layout: ../../../layouts/BlogPost.astro
---
# Amazon Web Service

Amazon Web Service\(이하 AWS\)는 사용자에게 클라우드환경을 제공한다.

서버환경을 구축하려면 하드웨어를 포함한 다양한 인프라구축이 필요한데,

사용자마다 설정을 통해 원하는 하드웨어 스펙을 선택할수도있고, 서버인스턴스의 os까지 설정할 수 있다.

이런 부분을 설정에서 선택만 하면 자동으로 os까지 설치해주고, ssh를 통해 접속해서 사용하기만 하면 된다.

사용자 입장에서는 하드웨어와 다양한 low-level 네트워크\(라우터 등..\)를 설정하지않아도 되므로 신경쓸일이 거의 없다.

확장성에서도 훨씬 유리하다. 하드웨어를 갈아끼우듯이 서버를 일시정지시키고, 서버 스펙을 늘릴수도있다.

네트워크 대역이라던지.. 이런것은 말할필요도 없다.

한마디로 사이징\(sizing\)에서 너무나 유리하다.

사이즈를 크게 잡으면 비용낭비이다. 그렇다고 작게 잡으면 단기간에 늘리기 쉽지않다.

결정적으로 직접 서버환경을 구축하는 on-premise방식보다 결과적으로 금전적으로도 이득이라고 한다.

클라우드를 안 쓸 이유가 없다. \(게임서버 제외\)

## MAC\(OS X\)에서 EC2를 접속하기

터미널 프로그램 \(기본 터미널 : command + space -&gt; ter -&gt; 엔터\) EC2 키파일\(.pem\) 준비 되었다면 아래와 같이 세팅합니다.

키파일을 원하는 위치에 복사하고 퍼미션을 400으로 조정합니다. \(저는 ~/Desktop/key/로 정했습니다.\)

```bash
chmod 400 ~/Desktop/key/keyfile.pem
```

터미널에서 키파일 옵션을 추가한 명령으로 ssh 접속

```bash
ssh -i ~/Desktop/key/keyfile.pem ec2-user@[서버 아이피 또는 도메인]
```

아래는 참고 사항입니다.

```
pem 파일이 아닌 ppk를 키파일로 사용하는 경우 : SSH 키 비밀번호를 입력을 요구하면서 인증 에러 발생
ssh접속 시 도메인에 아이디를 붙이지 않는 경우 : Permission denied (publickey) 에러 발생
```

아무 이상이없는데 permission denied가 계속 뜬다?

그럼 아래의 known\_hosts 파일을 확인해보자

```
vi ~/.ssh/known_hosts
```

이 파일을 봐도 모르겠다면 그냥 내용을 싹다 날리고 저장하자. 그럼 접속이 잘 된다.

---

Reference

<http://blog.freezner.com/archives/1249>



