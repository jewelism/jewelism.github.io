---
layout: ../../../layouts/BlogPost.astro
---
# Git

git이 설치되어있지않다면, mac 환경이라면 우선 homebrew를 이용하여 git을 설치하자.

```bash
brew install git
```

git flow를 사용한다면

```bash
brew install git-flow
```

```bash
git config --global user.name "jewelism"
git config --global user.email "boseokjung@gmail.com"
```

## pr을 통해 코드 리뷰하는 절차

1. 원본의 remote repository를 자신의 repository로 fork
2. 자신의 git repository clone
3. git remote add upstream 원본 원격 저장소의 주소
4. 소스수정..
5. git add 수정한파일 \(git add . 은 모두\)
6. git commit -m "커밋메시지"
7. git pull upstream 브랜치이름\(3번에서 추가한 upstream이라는 이름과 일치해야함\)
8. git push origin 브랜치이름
9. 원격저장소 웹에서 pull request 작성

혹은

1. remote repository clone
2. 소스수정..
3. git add 수정한파일 \(git add . 은 모두\)
4. git commit -m "커밋메시지"
5. git pull origin 브랜치
8. git push origin 브랜치이름
9. 원격저장소 웹에서 pull request 작성


## 대소문자 구분을 안하는 git

git은 대소문자 구분을 하지않아서, 파일이나 디렉토리 이름을 변경할때

단순 대소문자만 변경하는 경우 (common => Common 이런식) 변경으로 구분하지 않는다.

```bash
git mv common tmp && git mv tmp Common
```

```bash
git mv {파일이름} tmp && git mv tmp {변경하고싶은이름}
```

이런식으로 꼼수써서 변경할 수 있다.