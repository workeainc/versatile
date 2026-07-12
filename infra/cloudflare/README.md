# Cloudflare R2 Setup

Account: `Work.eaincorps@gmail.com's Account`  
Bucket: `versatile-interior-media`  
Location: `APAC`  
Temporary public URL: `https://pub-a04264e3824f4e5abf5c1deed24d01b2.r2.dev`

## Current Status

- R2 bucket created.
- Public `r2.dev` access enabled for testing and early production.
- Health check uploaded and verified:

```text
https://pub-a04264e3824f4e5abf5c1deed24d01b2.r2.dev/system/health.txt
```

- CORS applied from:

```text
infra/cloudflare/r2-cors.json
```

Allowed origins:

- `https://versatileinterior.com.bd`
- `https://www.versatileinterior.com.bd`
- `http://localhost:3000`

## Future Production Domain

Preferred media domain:

```text
https://media.versatileinterior.com.bd
```

Cloudflare R2 custom domains require the domain/zone to exist in the same Cloudflare account as the bucket. The current Cloudflare account does not yet contain `versatileinterior.com.bd`; it only contains `eaincorp.com`.

To activate the preferred media domain later:

1. Add `versatileinterior.com.bd` to Cloudflare as a zone, or use Cloudflare partial/CNAME setup if available for the account.
2. Keep the website on Vercel.
3. Connect `media.versatileinterior.com.bd` to the `versatile-interior-media` R2 bucket.
4. Update `NEXT_PUBLIC_MEDIA_BASE_URL` to:

```text
https://media.versatileinterior.com.bd
```

Do not CNAME directly to the `r2.dev` URL. Cloudflare documents that `r2.dev` is for development and temporary public access, while custom domains are recommended for production.
