---
layout: ../../../layouts/BlogPost.astro
title: Animation
parent: godot
---
# Animation

애니메이션은 게임엔진의 주요 기능중 하나입니다.

godot에선 ```AnimaionPlayer```, ```AnimationTree```

이 두개의 강력한 노드의 조합으로 다양한 애니메이션을 커버할 수 있습니다.

### 단순한 애니메이션 구현

단순한 어떠한 동작을 실행하고싶다면 ```AnimatedSprite2D```노드만으로도 충분한 경우가 많습니다.

노드를 추가하고 해당 노드에 포커스하면 하단에 SpriteFrames 탭이 생기고, 스프라이트 애니메이션을 편집할 수 있습니다.

auto play, loop 등의 기능버튼이 있어서 상황에 따라 사용하기 편리합니다.

### AnimationPlayer

```AnimatedSprite2D```노드만으로 부족하다면 ```AnimaionPlayer```노드를 활용하세요

다른 노드 대부분의 프로퍼티를 조작할 수 있게 됩니다.

이 과정에서 ```AnimatedSprite2D```노드에서 생성해둔 애니메이션을 ```AnimaionPlayer```에서

활용하고 싶다면 ```Animated Sprite to Animation Player Converter``` 플러그인을 설치하고 사용하세요. 클릭 한번으로 AnimationPlayer노드에 애니메이션들을 추가할 수 있습니다.

### AnimationTree

보통 주인공 캐릭터는 idle, move, run, attack, ... 등등 여러 애니메이션을 사용해야하고,

애니메이션마다 우선순위, 애니메이션이 끝나고나서 실행되어야할 또 다른 애니메이션 등등

이렇게 복잡한 애니메이션을 구현할땐 AnimationPlayer, AnimationTree를 활용합니다.

AnimationTree에서 각 액션에 대해 BlendSpace를 생성하고, 관계를 생각하여 연결해줍니다.

각 애니메이션 관계에는 방향이 있고, 그 방향에서 ```Switch Mode```, ```Condition```등을 설정하여

어떤 상황에서 애니메이션이 스위칭될건지, 해당 애니메이션이 어떤 Condition을 가졌을때 동작하는지

이름(id)을 설정해줍니다. 여기에서 설정한 id는 아래스크립트처럼 어떤 상황에서 어떤 애니메이션을 실행해야하는지 결정합니다.

```gds
animation_tree["parameters/conditions/idle"] = true
animation_tree["parameters/conditions/walk"] = false
animation_tree["parameters/conditions/attack"] = false
```

#### AnimationTree를 사용했는데 애니메이션이 작동안할때

```BlendSpace```를 사용했다면 연필모양의 버튼을 클릭해서 Blend Path를 그렸는지 확인해주세요.

```BlendSpace2D```를 사용했다면 Blend Path가 (일반적으로는) 사각형 모양이 나와야합니다.