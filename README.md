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

- Each homepage project card and footer project link opens a dedicated detail page: `/projects/lexglobal-bd/`, `/projects/jerseyos/`, `/projects/sunshot-ai/`, `/projects/lexwork/`.
- Detail pages include overview, intended audience, capabilities, workflow and availability. Live LexGlobal BD has an external Visit CTA; projects without a published URL have a project-specific enquiry email CTA.
- Project content is maintained in `app/data/projects.ts`; add `visitUrl` there when an upcoming project launches.
- Project routes are statically generated with individual metadata/canonical URLs. Unknown project slugs return 404.
- LexWork is an upcoming intelligent legal workspace.
- Founder: Nahid Alom, Founder & Director.
- Board and team profiles remain explicitly unannounced; no fictional identities are presented as members.
- The logo and Nahid Alom portrait are the supplied PNG files, preserved unchanged. The founder section links to his verified LinkedIn profile. A Facebook URL is pending confirmation.
- Contact and update requests open an email draft to contact@atheriouslabs.com. They do not claim a server-side submission or subscription.
- Generated backgrounds contain no typography; site text remains selectable and accessible.
- Mobile navigation, keyboard focus and reduced-motion preferences are supported.

Asset source and generation prompts: [ASSETS.md](ASSETS.md).

## Previous website

The previous static site and its configuration are preserved under `docs/previous-site/`. Existing artwork assets are retained. The connected Cloudflare Worker name is `atherious-labs`.

The `npm run deploy` shortcut builds the OpenNext app before deploying. For connected Cloudflare builds, use `npm run cf:build` as the build command.
