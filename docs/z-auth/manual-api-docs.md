---
sidebar_position: 3
---

# ZAuth API Integration

This guide explains how to manually integrate **ZIQX Auth** into your web application **without using the npm package**.

If you prefer a faster and cleaner setup, it's recommended to use the official npm package:

👉 **[@ziqx/auth](https://www.npmjs.com/package/@ziqx/auth)**

---

## ⚙️ Step 1: Get Your Auth Key

1. Visit **[https://ziqx.cc/console](https://ziqx.cc/console)**.
2. Navigate to **Apps → Select App → Auth**.
3. Copy your **Auth Key** from there.

---

## 🧩 Step 2: Add the Script to Your Project

You can directly include the following JavaScript code in your project to handle authentication manually.

```html
<script>
  // Replace this with your Auth Key from the ZIQX Console
  const AUTH_KEY = "YOUR_AUTH_KEY_HERE";

  /**
   * Redirects user to ZIQX Auth login page.
   * @param {boolean} [isDev=false] - Set true for development environment.
   */
  function ziqxLogin(isDev = false) {
    const devQuery = isDev ? "&dev=true" : "";
    const loginUrl = `https://ziqx.cc/zauth?key=${AUTH_KEY}${devQuery}`;
    window.location.href = loginUrl;
  }

  // Example usage:
  // ziqxLogin();
  // ziqxLogin(true); // For development environment
</script>
```

---

## 🚀 Example Usage

### Login Button

```html
<button onclick="ziqxLogin()">Login with ZIQX</button>
```

### Login Button (Development Mode)

```html
<button onclick="ziqxLogin(true)">Login (Dev Mode)</button>
```

---

## 💡 Recommended: Use the NPM Package

For cleaner code, TypeScript support, and easier updates, use the official npm package:

### [See `@ziqx/auth` Docs](npm-package-docs)

---

## 🧠 Summary

- Get your **Auth Key** from the **ZIQX Console**.
- Use the script snippet above for manual implementation.
- For better maintainability, switch to **@ziqx/auth** npm package.
