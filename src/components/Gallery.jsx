import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  LuArrowUpRight,
  LuChevronLeft,
  LuChevronRight,
  LuImageOff,
  LuX,
} from "react-icons/lu";
import {
  galleryCategories,
  galleryItems,
} from "../data/gallery";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  chip,
  chipActive,
  container,
  pageShell,
  pageTitle,
  sectionLabel,
} from "../lib/styles";

function GalleryCard({ item, onOpen }) {
  const [failed, setFailed] = useState(false);

  return (
    <button
      type="button"
      className="group overflow-hidden rounded-2xl border border-border bg-surface text-left transition-colors hover:border-border-strong"
      onClick={() => onOpen(item)}
      aria-label={`Open ${item.title}`}
    >
      <span className="relative block aspect-[4/3] overflow-hidden bg-bg-soft">
        {failed || !item.image ? (
          <span
            className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center text-dim"
            aria-hidden="true"
          >
            <LuImageOff size={26} />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] sm:text-sm">
              {item.title}
            </span>
          </span>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}

        <span className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="rounded-full border border-accent bg-accent px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink">
            View
          </span>
        </span>
      </span>

      <span className="flex items-center justify-between gap-3 border-t border-border p-4">
        <span className="flex min-w-0 flex-col gap-0.5">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-dim sm:text-sm">
            {item.category}
          </span>
          <span className="truncate text-base font-semibold text-ink sm:text-lg">
            {item.title}
          </span>
        </span>

        <span className="shrink-0 text-muted transition-colors group-hover:text-accent">
          <LuArrowUpRight aria-hidden="true" size={16} />
        </span>
      </span>
    </button>
  );
}

function LightboxImage({ item }) {
  const [failed, setFailed] = useState(false);

  if (failed || !item.image) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-dim">
        <LuImageOff aria-hidden="true" size={36} />
        <p className="text-base">Image coming soon.</p>
      </div>
    );
  }

  return (
    <img
      src={item.image}
      alt={item.title}
      onError={() => setFailed(true)}
      className="max-h-[60vh] w-auto max-w-full rounded-xl object-contain sm:max-h-[68vh]"
    />
  );
}

export default function Gallery() {
  usePageMeta({
    title: "Gallery",
    description:
      "Selected projects, designs, and certificates from Alain Fils Niyomucamanza.",
    path: "/gallery",
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(
            (item) => item.category === activeCategory,
          ),
    [activeCategory],
  );

  const isOpen = selected !== null;

  const showNext = useCallback(() => {
    setSelected((current) => {
      if (!current || filteredItems.length === 0) return current;
      const index = filteredItems.findIndex(
        (item) => item.id === current.id,
      );
      return filteredItems[(index + 1) % filteredItems.length];
    });
  }, [filteredItems]);

  const showPrevious = useCallback(() => {
    setSelected((current) => {
      if (!current || filteredItems.length === 0) return current;
      const index = filteredItems.findIndex(
        (item) => item.id === current.id,
      );
      return filteredItems[
        (index - 1 + filteredItems.length) % filteredItems.length
      ];
    });
  }, [filteredItems]);

  useEffect(() => {
    if (!isOpen) return undefined;

    lastFocusedRef.current = document.activeElement;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;

      if (lastFocusedRef.current instanceof HTMLElement) {
        lastFocusedRef.current.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
        return;
      }

      if (event.key === "Tab") {
        const container = dialogRef.current;
        if (!container) return;

        const focusable = container.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, showNext, showPrevious]);

  return (
    <>
      <section className={pageShell} id="gallery">
        <div className={container}>
          <div className="max-w-3xl">
            <p className={sectionLabel}>Selected Work</p>
            <h1 className={pageTitle}>
              A collection of projects, designs, and certificates.
            </h1>
          </div>

          <div
            className="mt-8 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter gallery by category"
          >
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${chip} ${
                  activeCategory === category ? chipActive : ""
                }`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onOpen={setSelected}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="mt-8 rounded-2xl border border-border bg-surface p-10 text-center">
              <p className="text-base leading-relaxed text-muted">
                No gallery items are available in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overscroll-contain bg-bg/85 p-3 backdrop-blur-sm sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} preview`}
          ref={dialogRef}
          onClick={() => setSelected(null)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-accent hover:text-accent sm:right-4 sm:top-4"
            aria-label="Close image preview"
            onClick={() => setSelected(null)}
          >
            <LuX aria-hidden="true" size={20} />
          </button>

          <button
            type="button"
            className="absolute left-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-accent hover:text-accent sm:left-4 md:left-6"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            <LuChevronLeft aria-hidden="true" size={20} />
          </button>

          <div
            className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-surface"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-[240px] flex-1 items-center justify-center overflow-hidden bg-bg-soft p-4 md:p-6">
              <LightboxImage key={selected.id} item={selected} />
            </div>

            <div className="border-t border-border p-4 sm:p-5">
              <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-dim sm:text-sm">
                {selected.category}
              </span>
              <h2 className="mt-1 text-lg font-semibold text-ink sm:text-xl">
                {selected.title}
              </h2>
              <p className="mt-1 text-base leading-relaxed text-muted">
                {selected.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="absolute right-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-accent hover:text-accent sm:right-4 md:right-6"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            <LuChevronRight aria-hidden="true" size={20} />
          </button>
        </div>
      )}
    </>
  );
}
