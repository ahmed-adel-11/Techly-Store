import Link from "next/link";
import { Icon } from "@iconify/react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-6 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-border bg-surface">
        <Icon icon="solar:ghost-outline" width="52" className="text-brand" />
      </div>

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
        Error 404
      </p>

      <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-5xl">
        Page not found
      </h1>

      <p className="mb-8 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
        Sorry, we couldn't find the page you're looking for. It may have been
        moved, deleted, or the URL might be incorrect.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
        >
          <Icon icon="solar:home-2-outline" width="20" />
          Back to home
        </Link>

        <Link
          href="/shop"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand"
        >
          <Icon icon="solar:shop-2-outline" width="20" />
          Explore products
        </Link>
      </div>
    </main>
  );
}
