---
title: observer, pub/sub
parent: design-pattern
layout: ../../../layouts/BlogPost.astro
---

# observer, pub/sub

*추가&수정 예정인(아마도) 아티클입니다..*

## Observer 패턴의 주요 용어
### OBSERVER - 관찰자

Observable을 관찰하는 주체

### OBSERVABLE - 관찰 할 수 있는

Observer가 바라보고 있는 대상

Observable은 Subscribable의 구현체이다.

Observable을 extends한 구현체들

```
ConnectableObservable
GroupedObservable
Subject
BehaviorSubject
ReplaySubject
AsyncSubject
```
### SUBSCRIBE - 구독하다

Observer와 Observable을 이어주는

Observer가 Observable을 subscribe할때, Observable에서 이벤트가 발생하면, Observer가 알 수 있게 된다.

## 차이점

어떤 아티클이나 책에서는 observer, pub/sub가 같은것이라고 소개하지만 차이가 있다.

<img src="/images/ob-pubsub.png"/>

위 그림에서 볼 수 있듯이 이벤트 채널의 존재 여부가 있을 것이고,

observer에서 observer와 subject가 서로를 인지하고 있어야 하지만, pub/sub는 이벤트 채널만 바라보면 됩니다.

Observer는 단일 어플리케이션 도메인에서 구현되어야합니다.

pub/sub는 이벤트채널에만 접근할 수 있다면 크로스 어플리케이션에서도 구현가능합니다.

엄격하게 따지면 조금 다르지만, 거의 비슷하다고 볼 수 있습니다.

ref: https://hackernoon.com/observer-vs-pub-sub-pattern-50d3b27f838c