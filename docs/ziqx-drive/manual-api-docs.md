---
sidebar_position: 3
---

# Direct API Integration

To securely upload files to your Drive, you first need to generate a signed URL. This page explains the process.

## 1. Generate Signed URL

Send a **GET** request to:

```
https://ziqx.cc/api/drive/sign-url?filename=[filename.jpg]
```

### Required Headers

- `x-drive-key`: Your Drive ID
- `x-drive-secret`: Your secret

### Required Query Params

- `filename`: Filename with extension.

⚠️ Note: Always include the file extension (e.g., .jpg, .png, .pdf). Omitting it may cause the uploaded file to appear broken. The easiest way is to use the name from the file selected by the user, for example: `red-apple.jpg`.

> **Tip:** You can generate the secret in your dashboard. For security, periodically regenerate your secret.

### Response

A successful request will return:

```json
{
  "success": true,
  "message": "Success",
  "url": "https://upload.drive.ziqx.net/?key=encrypted_upload_key"
}
```

The `url` provided is the signed URL to which your file will be uploaded.

## 2. Upload File

1. Send a **POST** request to the `upload_url` obtained above.
2. Use **multipart/form-data** as the request body.

### Response

Upon successful upload, the response will return the file name. This file name can then be saved in your database for reference.

```json
{
  "success": true,
  "message": "File uploaded successfully",
  "filename": "filename.jpg",
  "driveid": "your-drive-id"
}
```

## 3. Summary

- Generate a signed URL using your Drive key and secret.
- Upload files securely via POST request to the signed URL.
- Save the returned file name for future use.

Following this process ensures secure and efficient file uploads to your Drive.
