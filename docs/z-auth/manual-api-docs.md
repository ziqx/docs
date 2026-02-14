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
   */
  function ziqxLogin() {
    const loginUrl = `https://ziqx.cc/zauth?key=${AUTH_KEY}`;
    window.location.href = loginUrl;
  }

  // Example usage:
  // ziqxLogin();
</script>
```

---

## 🚀 Example Usage

### Login Button

```html
<button onclick="ziqxLogin()">Login with ZIQX</button>
```

---

## 🔐 Token Validation (Manual Implementation)

If you need to validate tokens manually without using the npm package, you can use the following function to verify tokens directly via the ZIQX API.

```html
<script>
  /**
   * Validates a ZIQX authentication token.
   * @param {string} token - The token to validate.
   * @returns {Promise<boolean>} - True if valid, false otherwise.
   */
  async function validateZiqxToken(token) {
    if (!token) {
      console.error("ZIQX Token Validation: Token is required.");
      return false;
    }

    try {
      const response = await fetch("https://ziqx.cc/zauth/validate/", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (response.status !== 200) return false;

      const data = await response.json();
      return data.success === true;
    } catch (error) {
      console.error("ZIQX Token Validation failed:", error);
      return false;
    }
  }

  // Example usage:
  // const token = cookies().get("ziqx_token");
  // const isValid = await validateZiqxToken(token);
  // console.log("Token valid:", isValid);
</script>
```

---

## 💡 Recommended: Use the NPM Package

For cleaner code, TypeScript support, and easier updates, use the official npm package:

### [See `@ziqx/auth` Docs](npm-package-docs)

---

## 🧠 Summary

- Get your **Auth Key** from the **ZIQX Console**.
- Use `ziqxLogin()` to start authentication.
- Use `validateZiqxToken()` to validate tokens manually.
- For better maintainability and TypeScript support, switch to **@ziqx/auth** npm package.
