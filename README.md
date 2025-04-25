# 🚀 javascript-expert--this-context

A minimal Node.js project that demonstrates how the `this` context behaves in JavaScript when class methods are used as callbacks — using `fs.watch` as a practical example.

## ✅ What You'll Learn

- How `this` can behave unexpectedly when a class method is passed as a callback.
- How to preserve the correct context using:
  - Arrow functions
  - `.bind()`
- The differences between `.call()`, `.apply()`, and `.bind()` in practice.


## 🧠 Key Concepts

- JavaScript's dynamic `this` binding
- Function context loss when methods are detached
- Manual binding of context using built-in methods

## 🧪 How to Run

```bash
node index.js
```

You'll see console output illustrating how the context (this) and arguments behave under different invocation patterns.

