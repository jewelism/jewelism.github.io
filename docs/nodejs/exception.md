# 예외처리

```js
process.on("uncaughtException", error => {
  console.log("Oh my god, something terrible happend: ", error);
  process.exit(1); // exit application
});
```

```js
process.on("unhandledRejection", (error, promise) => {
  console.log(
    " Oh Lord! We forgot to handle a promise rejection here: ",
    promise
  );
  console.log(" The error was: ", error);
});
```

---

reference

https://softwareontheroad.com/nodejs-crash-exception-handler/
