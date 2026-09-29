export default function Home() {
  return (
    <main className="mx-auto w-full max-w-page px-4 py-section lg:px-6 lg:py-section-lg">
      <p className="text-label-md text-primary">Theme smoke test</p>
      <h1 className="text-heading-lg text-foreground lg:text-display-lg">
        ByteSpace
      </h1>
      <p className="text-body-lg text-muted">
        Every value on this page comes from the figma design system managed file.
      </p>
      <div className="mt-8 rounded-md bg-surface p-6 shadow-card">
        <h2 className="text-heading-md text-foreground lg:text-heading-lg">
          Card surface
        </h2>
        <p className="text-body-md text-muted">
          Radius, shadow and surface colour are theme-driven.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full bg-primary px-6 py-3 text-label-md text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Primary action
        </button>
      </div>
    </main>
  );
}
