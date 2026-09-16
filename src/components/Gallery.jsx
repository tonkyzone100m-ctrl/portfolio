import { useEffect, useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "CV Maker",
    category: "Projects",
    image: "/gallery/cv-maker.jpg",
    description: "Professional CV creation platform.",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Projects",
    image: "/gallery/portfolio.jpg",
    description: "Personal developer portfolio website.",
  },
  {
    id: 3,
    title: "Football Graphic",
    category: "Designs",
    image: "/gallery/football.jpg",
    description: "Football match promotional design.",
  },
  {
    id: 4,
    title: "UI Design",
    category: "Designs",
    image: "/gallery/ui-design.jpg",
    description: "Modern interface design concept.",
  },
  {
    id: 5,
    title: "Certificate",
    category: "Certificates",
    image: "/gallery/certificate.jpg",
    description: "Professional achievement certificate.",
  },
  {
    id: 6,
    title: "Web Application",
    category: "Projects",
    image: "/gallery/web-app.jpg",
    description: "Full-stack web application project.",
  },
];

const categories = [
  "All",
  "Projects",
  "Designs",
  "Certificates",
  "Other",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  const currentIndex = selectedImage
    ? filteredItems.findIndex(
        (item) => item.id === selectedImage.id
      )
    : -1;

  const showNext = () => {
    if (!selectedImage || filteredItems.length === 0) return;

    const nextIndex =
      (currentIndex + 1) % filteredItems.length;

    setSelectedImage(filteredItems[nextIndex]);
  };

  const showPrevious = () => {
    if (!selectedImage || filteredItems.length === 0) return;

    const previousIndex =
      (currentIndex - 1 + filteredItems.length) %
      filteredItems.length;

    setSelectedImage(filteredItems[previousIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentIndex, filteredItems]);

  return (
    <>
      <section className="gallery-section" id="gallery">
        <div className="section-heading">
          <p>Selected Work</p>

          <h2>
            A collection of my work, projects and designs.
          </h2>
        </div>

        <div className="gallery-container">
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "gallery-filter active"
                    : "gallery-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <article
                className="gallery-card"
                key={item.id}
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="gallery-overlay">
                    <span>View Project</span>
                  </div>
                </div>

                <div className="gallery-info">
                  <div>
                    <span className="gallery-category">
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>
                  </div>

                  <span className="gallery-arrow">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="gallery-empty">
              <p>No gallery items available in this category.</p>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close image preview"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox-prev"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            ←
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="lightbox-info">
              <span>{selectedImage.category}</span>

              <h3>{selectedImage.title}</h3>

              <p>{selectedImage.description}</p>
            </div>
          </div>

          <button
            type="button"
            className="lightbox-next"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            →
          </button>
        </div>
      )}
    </>
  );
}