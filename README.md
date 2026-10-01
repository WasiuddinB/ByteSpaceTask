# ByteSpace

A multi-page site built from a Figma design, as a frontend assessment.

**🔗 Live:** https://byte-space-task-wasi.vercel.app/
**📦 Repo:** https://github.com/WasiuddinB/ByteSpaceTask

Built with Next.js 16, React 19, TypeScript and Tailwind CSS v4.
No UI library, no form library, no state management library.

## Running it

The project lives in the `bytespace/` subdirectory.

```bash
cd bytespace
npm install
npm run dev
```

```bash
npm run build
npm run lint
npm run format
```

## Things worth looking at

#Server Components are the default. A few are client components because they hold states such as these modules -

`MobileMenu` · `CourseFilters` · `CourseTabs` · `LoginForm` · `SignupForm` · `PasswordInput` · `ScrollToTop`

#Components are reused, not copy-pasted

`CourseCard` · `CourseFilters` - All copy and data lives in
`src/lib/constants.ts` and is mapped over.
