# Website validation

Validated before the GitHub commit:

- Next.js production build, TypeScript and build-time checks passed.
- OpenNext Cloudflare Worker build and packaging passed; existing Worker configuration preserved.
- Chromium checks passed at 320, 390, 768, 1100 and 1440 pixels wide.
- No horizontal overflow or browser JavaScript errors.
- All 17 image elements loaded successfully, including the new logo, supplied founder portrait and LexWork banner.
- Mobile navigation opens and closes after choosing a section.
- Every internal anchor resolves to an existing section.
- Contact form validates fields and opens the documented email-draft flow. The QA draft was not sent.
- New uploaded logo and founder portrait verified byte-for-byte against the original files. New logo is also configured as the website icon.

- Hero Since 2025 badge, LexWork Upcoming section, removal of ReVector AI, supplied portrait and LinkedIn profile link verified.
- Facebook link is pending an exact verified URL.

Visual previews: [Desktop](desktop-preview.jpg) · [Mobile](mobile-preview.jpg).

## Project detail pages

- Clean Next.js production and OpenNext Cloudflare build passed with all four project routes generated.
- Clicked every project card, checked the detail content and CTA destination, then returned through All Projects at 320, 390, 768 and 1440 pixels.
- Live LexGlobal BD Visit CTAs point to https://lexglobalbd.live/ and open a new tab. Upcoming/private projects use project-specific enquiry email links rather than an invented public URL.
- Individual canonical URLs and related-project links checked. Unknown project slugs return 404.
- No horizontal overflow or browser JavaScript errors on the project pages.
- Homepage navigation, image loading, internal anchors and contact-draft flow rechecked.

Project previews: [Desktop](project-preview.jpg) · [Mobile](project-mobile-preview.jpg).
