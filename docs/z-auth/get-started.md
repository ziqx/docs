# ZAuth

ZAuth is a complete authentication system integrated into our platform.  
It allows you to easily add secure, modern authentication to any App you create — without building your own auth backend.

Once you create an App, you can enable ZAuth for it directly from the dashboard.

---

### Key Highlights

- 🔐 **OAuth-based authentication** — industry-standard, secure, and reliable.
- ⚙️ **Easy integration** — just one SDK call to add login to your app.
- 🌍 **Environment-aware redirects** — separate Dev and Prod redirect URLs.
- 👥 **User management dashboard** — view and manage your users effortlessly.
- 🚀 **Multiple login methods** — Google, Email + OTP, Email + Password, WhatsApp, and more.
- 🧩 **App-linked system** — enable ZAuth per app and manage access independently.

## 1. What Is ZAuth?

ZAuth works as an OAuth-based authentication system similar to other identity providers (e.g., Google OAuth).  
It handles user authentication, session management, and user data securely on your behalf.

By enabling ZAuth, your app can support multiple sign-in methods instantly — with just one integration.

---

## 2. Enable ZAuth for Your App

1. Go to your **App** in the dashboard.
2. Open the **ZAuth** section.
3. Click **Enable ZAuth**.
4. You’ll get a **Key** for authentication requests.
5. Set your **Development URL** and **Production URL**.

ZAuth will use these URLs to redirect users back to your app after successful authentication, based on the environment you’re running.

---

## 3. How It Works

1. In your app, call the provided **ZAuth SDK function** (e.g., `zauth.signIn()`).
2. The user will be redirected to the **ZAuth authentication page**.
3. After successful authentication, ZAuth will redirect the user back to your configured **Dev** or **Prod** URL.
4. The redirect will include an **authorization token**, which can be used to verify and fetch user details from your backend.

This keeps your app secure while minimizing development time.

---

## 4. Manage Users

You can view and manage all users of your App directly in the dashboard under the **Users** section.  
ZAuth handles user creation, verification, and authentication automatically.

---

## 5. Supported Authentication Methods

ZAuth supports multiple sign-in methods out of the box:

- **Google Sign-In**
- **Email + OTP**
- **Email + Password**
- **WhatsApp Login** (Coming Soon)
- _(More methods will be added over time.)_

This flexibility allows you to provide your users with a seamless login experience suited to your app’s audience.

---

## 6. Why Use ZAuth?

- No need to build or maintain your own authentication system.
- Unified login experience across all your apps.
- Secure token-based authentication.
- Scalable for production and sandbox environments.
- Easy to integrate — one SDK function is all it takes.

---

## 7. Summary

- ZAuth is your app’s built-in OAuth system.
- Enable it from your App settings.
- Configure Dev and Prod URLs for redirects.
- Integrate with one simple SDK call.
- Manage your users directly from the dashboard.
- Supports multiple modern authentication methods.

With ZAuth, authentication becomes a plug-and-play experience for your apps.
