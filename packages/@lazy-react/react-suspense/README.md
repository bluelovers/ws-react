# README.md

    lazy react suspense

## install

```bash
yarn add @lazy-react/react-suspense
yarn-tool add @lazy-react/react-suspense
yt add @lazy-react/react-suspense
```

## demo

```tsx
<ReactSuspense fallback={<Loading />}>
    <ShowLotto />
</ReactSuspense>
```

same as

```tsx
{(typeof window !== 'undefined') ? (<Suspense fallback={<Loading />}>
    <ShowLotto />
</Suspense>) : <Loading />}
```
