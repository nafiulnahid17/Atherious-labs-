# Atherious Labs

A responsive Next.js website based on the approved Intelligent Futures mockup. The dark navy and gold design uses separate generated artwork assets and editable HTML text, cards, navigation and forms.

## Run

```bash
npm ci
npm run dev
npm run build
```

## Cloudflare Worker

The existing OpenNext Worker configuration is preserved. Build and deploy with:

```bash
npm run cf:build
npm run cf:deploy
```

## Content and interactions

- Projects: LexGlobal BD, JerseyOS and SunShot AI.
- ReVector AI is a tool inside JerseyOS.
- Founder: Nahid Alom, Founder & Director.
- Board and team profiles remain explicitly unannounced; no fictional identities are presented as members.
- The founder artwork is an illustrative recreation of the supplied design, not a verified photograph.
- Contact and update requests open an email draft to contact@atheriouslabs.com. They do not claim a server-side submission or subscription.
- Generated backgrounds contain no typography; site text remains selectable and accessible.
- Mobile navigation, keyboard focus and reduced-motion preferences are supported.

Asset source and generation prompts: [ASSETS.md](ASSETS.md).

## Previous website

The previous static site and its configuration are preserved under `docs/previous-site/`. Existing artwork assets are retained. The Cloudflare Worker name remains `atherious-labs-website`.

The `npm run deploy` shortcut builds the OpenNext app before deploying. For connected Cloudflare builds, use `npm run cf:build` as the build command.
