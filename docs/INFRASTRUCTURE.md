# Infrastructure content sources

The website describes architecture and deployment profiles, not real-time telemetry or unverified hardware capacity.

## Server cards

- Private Engine Server: Railway/Docker, Python 3.12/FastAPI, one API process/replica deployment profile, persistent volume, bounded job queue and readiness checks.
- Application & Gateway: Cloudflare Workers, Next.js/OpenNext for this website, HTTPS engine gateway, server-side credentials and project identity checks in the tool architecture.
- Storage Layer: persistent project/artifact storage plus the implemented S3-compatible R2 adapter. Automatic R2 mirroring is not advertised as enabled.

## Eight engine component cards

The cards group implemented processing modules into eight technical responsibilities: Core, AI Routing, Geometry, Segmentation, Reconstruction, Vectorization, Validation and Export. They are components inside project/tool backends, not a claim of eight independently hosted services.

Sources reviewed on 2026-10-08:

- ReVector engine README: https://github.com/nafiulnahid17/RevectorAI-Tool/blob/main/README.md
- Architecture: https://github.com/nafiulnahid17/RevectorAI-Tool/blob/main/docs/ARCHITECTURE.md
- Railway profile: https://github.com/nafiulnahid17/RevectorAI-Tool/blob/main/docs/RAILWAY.md
- Artboard AI engine README in the owner-accessible `Artboard-AI---Resolution-Independent-` repository: geometry, lighting cleanup, physical dimensions, CMYK and export checks.

No API credentials, private gateway URLs, unsupported CPU/RAM specifications, uptime figures or benchmark scores are published.

## Project route repair

The deployed `/projects/lexglobal-bd/` returned HTTP 404 while the homepage linked to it. The earlier dynamic route with `dynamicParams=false` depended on prerendered data; OpenNext was configured without a prerendered-route cache.

The repair uses four explicit route files, normal navigation links, the documented static-assets incremental cache and cache interception, plus clean Cloudflare build output.

Official configuration reference: https://opennext.js.org/cloudflare/caching#ssg-site
