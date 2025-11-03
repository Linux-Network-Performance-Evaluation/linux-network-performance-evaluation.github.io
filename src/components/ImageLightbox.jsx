import { useEffect } from "react";

/**
 * ImageLightbox Component
 * 
 * A reusable lightbox component for displaying images in full size.
 * 
 * Props:
 * - isOpen: boolean to control visibility
 * - onClose: function to call when closing
 * - imageUrl: URL/path to the image
 * - altText: alt text for the image
 * 
 * Features:
 * - Closes on overlay click
 * - Closes on Escape key press
 * - Prevents scrolling when open
 * - Click on image doesn't close the lightbox
 */
function ImageLightbox({ isOpen, onClose, imageUrl, altText }) {
    // Step 1: Handle Escape key press to close lightbox
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            // Prevent body scroll when lightbox is open
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Step 2: Don't render anything if not open
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
                cursor: "pointer",
            }}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
        >
            {/* Close button */}
            <button
                style={{
                    position: "absolute",
                    top: "20px",
                    right: "30px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                    fontSize: "40px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    zIndex: 10000,
                    padding: "0 10px",
                    lineHeight: "1",
                }}
                onClick={onClose}
                aria-label="Close lightbox"
                onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
                &times;
            </button>

            {/* Full-size image */}
            <img
                src={imageUrl}
                alt={altText}
                style={{
                    maxWidth: "95%",
                    maxHeight: "95%",
                    objectFit: "contain",
                    cursor: "default",
                }}
                onClick={(e) => e.stopPropagation()}
            />

            {/* Instruction text */}
            <div
                style={{
                    position: "absolute",
                    bottom: "20px",
                    color: "white",
                    fontSize: "14px",
                    opacity: 0.7,
                }}
            >
                Click outside image or press Escape to close
            </div>
        </div>
    );
}

export default ImageLightbox;