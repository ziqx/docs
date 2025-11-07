---
sidebar_position: 2
---

# NPM SDK Integration

> Learn how to integrate Ziqx Drive into your project using the official `@ziqx/drive` SDK for both Node.js (server) and browser (client) environments.

---

## Overview

The `@ziqx/drive` SDK provides a **simple, secure way** to generate signed URLs and upload files without manually handling the HTTP API. It is written in **TypeScript** and fully typed, supporting modern JavaScript frameworks like **Node.js**, **Next.js**, and **React**.

The SDK exposes two main classes:

1. **ZDrive** — Server-side class to generate signed upload URLs.
2. **ZDriveClient** — Browser-side class to upload files using signed URLs.

---

## Installation

```bash
# Using npm
npm install @ziqx/drive

# Using yarn
yarn add @ziqx/drive
```

---

## 1. Server-side: Generate Signed URLs (`ZDrive`)

The `ZDrive` class is used **server-side** to securely generate signed URLs for clients to upload files.

### Example

```ts
import { ZDrive } from "@ziqx/drive";

async function generateSignedUrl() {
  const drive = new ZDrive("your-drive-key", "your-drive-secret");

  const signed = await drive.generatePutUrl("example.jpg");

  if (signed.success && signed.url) {
    console.log("✅ Signed URL:", signed.url);
  } else {
    console.error("❌ Error generating URL:", signed.message);
  }
}

generateSignedUrl();
```

**Notes:**

- `driveSecret` should never be exposed on the client.
- This signed URL is short-lived and secure.
- Always include the file extension (e.g., .jpg, .png, .pdf). Omitting it may cause the uploaded file to appear broken. The easiest way is to use the name from the file selected by the user, for example: `red-apple.jpg`.

---

## 2. Client-side: Upload Files (`ZDriveClient`)

The `ZDriveClient` class is used **in the browser** to upload files using signed URLs obtained from the server.

### Example

```ts
import { ZDriveClient } from "@ziqx/drive";

async function handleUpload(file: File, signedUrl: string) {
  const client = new ZDriveClient();
  const response = await client.uploadFile(signedUrl, file);

  if (response.success) {
    console.log("✅ File uploaded:", response.filename);
  } else {
    console.error("❌ Upload failed:", response.message);
  }
}

// File input example
const fileInput = document.getElementById("fileInput") as HTMLInputElement;
fileInput.addEventListener("change", async () => {
  if (fileInput.files?.length) {
    const signedUrl = await fetch("/api/drive/sign-url")
      .then((res) => res.json())
      .then((r) => r.url);

    await handleUpload(fileInput.files[0], signedUrl);
  }
});
```

**Notes:**

- Always use signed URLs from your server.
- Supports `<input type="file">`, drag-drop, or any browser `File` object.

---

## API Reference

### ZDrive (Server-side)

| Method                             | Description                       | Parameters             | Returns                    |
| ---------------------------------- | --------------------------------- | ---------------------- | -------------------------- |
| `generatePutUrl(fileName: string)` | Generates a signed URL for a file | `fileName` — File name | `Promise<SignUrlResponse>` |

### ZDriveClient (Client-side)

| Method                                      | Description                  | Parameters                                                | Returns                   |
| ------------------------------------------- | ---------------------------- | --------------------------------------------------------- | ------------------------- |
| `uploadFile(uploadUrl: string, file: File)` | Uploads a file to Ziqx Drive | `uploadUrl` — Signed URL<br/>`file` — Browser File object | `Promise<UploadResponse>` |

---

## Response Types

### SignUrlResponse

```ts
interface SignUrlResponse {
  success: boolean;
  message: string;
  url?: string;
}
```

### UploadResponse

```ts
interface UploadResponse {
  success: boolean;
  message: string;
  filename?: string;
  driveid?: string;
}
```

---

## Best Practices

- Keep `driveSecret` **server-side only**.
- Validate file names and types before uploading.
- Always check `success` before using the returned URL or file name.

---

## License

MIT © [ZIQX](https://ziqx.cc)
