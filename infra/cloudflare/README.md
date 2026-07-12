# Cloudflare R2 Setup

Account: `Work.eaincorps@gmail.com's Account`  
Bucket: `versatile-interior-media`  
Location: `APAC`  
Temporary public URL: `https://pub-a04264e3824f4e5abf5c1deed24d01b2.r2.dev`

Cloudflare zone: `versatileinterior.com.bd`  
Zone ID: `eb1e76cc8b16316636aafd6f80bb805b`  
Zone status: `pending` until registrar nameservers are changed.

Assigned Cloudflare nameservers:

```text
veronica.ns.cloudflare.com
woz.ns.cloudflare.com
```

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

Cloudflare R2 custom domains require the domain/zone to exist and be active in the same Cloudflare account as the bucket. The zone has been added, but it is still pending nameserver activation.

To activate the preferred media domain later:

1. Change nameservers at the registrar/DNS provider from Hostinger parking nameservers to Cloudflare:

```text
veronica.ns.cloudflare.com
woz.ns.cloudflare.com
```

2. Keep the website on Vercel.
3. Wait for Cloudflare zone status to become active.
4. Connect `media.versatileinterior.com.bd` to the `versatile-interior-media` R2 bucket.
5. Update `NEXT_PUBLIC_MEDIA_BASE_URL` to:

```text
https://media.versatileinterior.com.bd
```

Do not CNAME directly to the `r2.dev` URL. Cloudflare documents that `r2.dev` is for development and temporary public access, while custom domains are recommended for production.

## Hostinger API Status

The available Hostinger API token can read the DNS zone for `versatileinterior.com.bd`, including MX, SPF, DMARC, DKIM, Google verification, Vercel, and Hostinger mail records.

However, the Hostinger domain portfolio endpoint does not include `versatileinterior.com.bd`, and the official nameserver update endpoint returns:

```text
[Domains:2006] Domain info is not found.
```

That means this token can manage DNS records but cannot change the registrar-level nameserver delegation for this domain. The nameserver change must be completed in the Hostinger account that owns the domain portfolio entry, or with a Hostinger API token from that owner account.
