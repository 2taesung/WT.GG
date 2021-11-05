[toc]

# 0. 프로젝트 생성

- typescript환경의 react 앱 설치

  ```bash
  npx create-react-app frontend --template typescript
  ```

- redux 설치

  ```bash
  npm install @types/react-redux
  npm install typesafe-actions
  ```

  (참고) 자바스크립트 이용시 redux 설치

  ```bash
  npm i react-redux
  ```



# App.tsx

```tsx
<Switch>
    <Route path="/" component={Main} exact={true} />
    <Route path="/board" component={Board} />
    <Test />
</Switch>
```

- `Switch`의 역할

  - `Route` 컴포넌트가 중복으로 렌더링 될 컴포넌트를 하나만 렌더링 되도록 도와줌 

    👉 스위치 딸깍딸깍

- `Route`에서 `exact={true}`의 역할
  - `exact`는 `path`의 속성에 넣은 경로값이 정확히 URL의 경로값과 일치할 때만 렌더링 되도록 도움
  - 만약 `exact`를 하지 않으면, `path="/"`인 라우터는 `/eunji` 경로에서도 반응

