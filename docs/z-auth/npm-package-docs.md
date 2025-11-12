---
sidebar_position: 2
---

# ZAuth SDK Integration

Easily integrate authentication into your app using the **@ziqx/auth** SDK. This package handles user authentication by redirecting users securely to ZIQX Auth.

---

## 📦 Installation

```bash
npm install @ziqx/auth
# or
pnpm add @ziqx/auth
# or
yarn add @ziqx/auth
```

---

## ⚙️ Setup

To use ZIQX Auth, you need an **Auth Key**. You can obtain it from your ZIQX Console:

1. Visit [https://ziqx.cc/console](https://ziqx.cc/console)
2. Navigate to **Apps → Select App → Auth**.
3. Copy your **Auth Key**

---

## 🚀 Usage Example

```typescript
import { ZAuthClient } from "@ziqx/auth";

// Initialize with your Auth Key
const auth = new ZAuthClient({
  authKey: "YOUR_AUTH_KEY_HERE",
});

// Trigger login flow
// Pass true for development mode (optional)
auth.login(true);
```

This will automatically redirect the user to the ZIQX Auth page.

---

## 🔐 Token Validation

In addition to login, you can validate tokens issued by ZIQX using the `ZAuthTokenService`.

```typescript
import { ZAuthTokenService } from "@ziqx/auth";

const tokenService = new ZAuthTokenService();
const isValid = await tokenService.validate("your-jwt-token");

if (isValid) {
  console.log("✅ Token is valid");
} else {
  console.log("❌ Invalid or expired token");
}
```

---

## 🧠 API Reference

### `class ZAuthClient`

#### **Constructor**

```typescript
new ZAuthClient({ authKey: string });
```

**Parameters:**

- `authKey` — Your authentication key obtained from ZIQX Console.

---

#### **Method: `login(isDev?: boolean)`**

Redirects the user to the ZIQX Auth login page.

**Parameters:**

- `isDev` _(optional)_ — When set to `true`, adds `?dev=true` to the URL for testing and local development.

**Example:**

```typescript
auth.login(); // For production
auth.login(true); // For development mode
```

---

### `class ZAuthTokenService`

#### **Method: `validate(token: string): Promise<boolean>`**

Validates a given authentication token with the ZIQX Auth API.

**Parameters:**

- `token` — The authentication token (JWT or similar) to validate.

**Example:**

```typescript
const tokenService = new ZAuthTokenService();
const isValid = await tokenService.validate("your-jwt-token");
console.log("Token valid:", isValid);
```

Returns `true` if valid, otherwise `false`.

---

## ⚡ Manual Integration (Alternative)

If you prefer to integrate manually without the SDK, see our [Manual Auth Implementation Guide](manual-api-docs).

However, using the **@ziqx/auth** package is strongly recommended for easier maintenance and future updates.

---

## 🧩 Notes

- Ensure your app's callback URL is configured in your ZIQX Console.
- Use `auth.login(true)` when developing locally or testing.
- Always keep your `authKey` private.
