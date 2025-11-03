import { Modal, Button, Badge, Alert, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ImageLightbox from "./ImageLightbox";
import mammoth from "mammoth";
import * as XLSX from "xlsx";

// CSS styles for document content
const documentStyles = `
  .document-content {
    font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  .docx-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .document-content h1, .document-content h2, .document-content h3, 
  .document-content h4, .document-content h5, .document-content h6 {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #2c3e50;
  }
  
  .document-content h1 { font-size: 2rem; }
  .document-content h2 { font-size: 1.5rem; }
  .document-content h3 { font-size: 1.25rem; }
  .document-content h4 { font-size: 1.1rem; }
  
  .document-content p {
    margin-bottom: 1rem;
    text-align: justify;
  }
  
  .document-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    font-size: 0.9rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  
  .document-content table td, .document-content table th {
    border: 1px solid #ddd;
    padding: 0.75rem 0.5rem;
    text-align: left;
    vertical-align: top;
  }
  
  .document-content table th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: #495057;
  }
  
  .document-content table tr:nth-child(even) {
    background-color: #f8f9fa;
  }
  
  .document-content table tr:hover {
    background-color: #e9ecef;
  }
  
  .sheet-container {
    margin-bottom: 2rem;
    border-radius: 0.375rem;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .sheet-title {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #495057;
  }
  
  .xlsx-viewer table {
    font-size: 0.85rem;
    margin-bottom: 0;
  }
  
  .xlsx-viewer .table-responsive {
    max-height: 400px;
    overflow: auto;
  }
  
  .document-content img {
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
    border-radius: 0.25rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .document-content ul, .document-content ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }
  
  .document-content li {
    margin-bottom: 0.25rem;
  }
  
  .document-content blockquote {
    border-left: 4px solid #007bff;
    padding-left: 1rem;
    margin: 1rem 0;
    font-style: italic;
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 0.25rem;
  }
  
  .document-content strong, .document-content b {
    font-weight: 600;
  }
  
  .document-content em, .document-content i {
    font-style: italic;
  }
  
  .document-content code {
    background-color: #f1f3f4;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: "Courier New", monospace;
    font-size: 0.9em;
  }
  
  .document-content pre {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 0.375rem;
    overflow-x: auto;
    border: 1px solid #e9ecef;
  }
`;

// Inject styles into head if not already present
if (
  typeof document !== "undefined" &&
  !document.getElementById("document-viewer-styles")
) {
  const styleElement = document.createElement("style");
  styleElement.id = "document-viewer-styles";
  styleElement.textContent = documentStyles;
  document.head.appendChild(styleElement);
}

// Document Card Component for consistent styling
export function DocumentCard({
  title,
  description,
  documentPath,
  documentType,
  className = "",
}) {
  const [showViewer, setShowViewer] = useState(false);
  const [showImageLightbox, setShowImageLightbox] = useState(false);
  const [currentDocument, setCurrentDocument] = useState({
    url: "",
    title: "",
    type: "",
  });
  const [documentContent, setDocumentContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const [viewMode, setViewMode] = useState("office"); // "office" or "native"

  // Function to get Microsoft Office Online viewer URL
  const getOfficeViewerUrl = (documentPath, docType) => {
    const baseUrl = window.location.origin;
    const fullUrl = `${baseUrl}${documentPath}`;

    if (docType === "powerpoint") {
      return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        fullUrl
      )}`;
    } else if (docType === "word") {
      return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        fullUrl
      )}`;
    } else if (docType === "excel") {
      return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        fullUrl
      )}`;
    }
    return fullUrl;
  };

  // Function to load and parse DOCX files using mammoth
  const loadDocxFile = async (filePath) => {
    try {
      setIsLoading(true);
      setLoadError(null);

      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to fetch document: ${response.statusText}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const result = await mammoth.convertToHtml({
        arrayBuffer,
        convertImage: mammoth.images.imgElement(function (image) {
          // Convert images to base64 data URLs for inline display
          return image.read("base64").then(function (imageBuffer) {
            return {
              src: "data:" + image.contentType + ";base64," + imageBuffer,
            };
          });
        }),
      });

      if (result.messages.length > 0) {
        console.warn("Mammoth warnings:", result.messages);
      }

      // Wrap content in a container for better styling
      const wrappedContent = `<div class="docx-content">${result.value}</div>`;
      setDocumentContent(wrappedContent);
      setViewMode("native");
    } catch (error) {
      console.error("Error loading DOCX:", error);
      setLoadError(
        `Unable to load Word document: ${error.message}. This might be due to file access restrictions or an unsupported document format.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Function to load and parse XLSX files
  const loadXlsxFile = async (filePath) => {
    try {
      setIsLoading(true);
      setLoadError(null);

      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to fetch document: ${response.statusText}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });

      // Convert all sheets to HTML with better formatting
      let htmlContent = '<div class="xlsx-viewer">';

      workbook.SheetNames.forEach((sheetName, index) => {
        const worksheet = workbook.Sheets[sheetName];

        // Convert to JSON first for better control
        const jsonData = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
          defval: "",
        });

        if (jsonData.length === 0) {
          htmlContent += `<div class="sheet-container mb-4">
            <h5 class="sheet-title bg-light p-2 border">${sheetName}</h5>
            <p class="p-3 text-muted">This sheet appears to be empty.</p>
          </div>`;
          return;
        }

        // Create HTML table manually for better styling
        let tableHtml = '<table class="table table-sm table-bordered">';

        jsonData.forEach((row, rowIndex) => {
          const isHeader = rowIndex === 0;
          const tagName = isHeader ? "th" : "td";
          const rowClass = isHeader ? "table-secondary" : "";

          tableHtml += `<tr class="${rowClass}">`;

          // Ensure consistent column count
          const maxCols = Math.max(...jsonData.map((r) => r.length));
          for (let colIndex = 0; colIndex < maxCols; colIndex++) {
            const cellValue = row[colIndex] || "";
            const displayValue = cellValue.toString().trim() || "&nbsp;";
            tableHtml += `<${tagName} class="text-nowrap">${displayValue}</${tagName}>`;
          }

          tableHtml += "</tr>";
        });

        tableHtml += "</table>";

        htmlContent += `<div class="sheet-container mb-4">
          <h5 class="sheet-title bg-light p-2 border border-bottom-0 mb-0">${sheetName}</h5>
          <div class="table-responsive border">${tableHtml}</div>
        </div>`;
      });

      htmlContent += "</div>";
      setDocumentContent(htmlContent);
      setViewMode("native");
    } catch (error) {
      console.error("Error loading XLSX:", error);
      setLoadError(
        `Unable to load Excel file: ${error.message}. This might be due to file access restrictions or an unsupported Excel format.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Function to open document viewer with intelligent mode selection
  const openDocumentViewer = (documentPath, title, type) => {
    if (type === "image") {
      // Set current document for ImageLightbox
      setCurrentDocument({
        url: documentPath,
        title: title,
        type: type,
      });
      // Use the new ImageLightbox for images
      setShowImageLightbox(true);
      return;
    }

    // Reset state
    setDocumentContent("");
    setLoadError(null);
    setIsLoading(false);

    // Intelligent mode selection based on file type
    let preferredMode = "office"; // Default to Office Online

    // For DOCX and XLSX, prefer native view for better performance and offline capability
    if (type === "word" || type === "excel") {
      preferredMode = "native";
    }

    // For PowerPoint, always use Office Online (no native support)
    if (type === "powerpoint") {
      preferredMode = "office";
    }

    setViewMode(preferredMode);

    let viewerUrl;

    if (type === "pdf") {
      viewerUrl = documentPath; // Direct PDF viewing
      setCurrentDocument({ url: viewerUrl, title, type });
      setShowViewer(true);
    } else if (type === "word" && preferredMode === "native") {
      // Use mammoth for DOCX files
      setCurrentDocument({ url: documentPath, title, type });
      setShowViewer(true);
      loadDocxFile(documentPath);
    } else if (type === "excel" && preferredMode === "native") {
      // Use xlsx for Excel files
      setCurrentDocument({ url: documentPath, title, type });
      setShowViewer(true);
      loadXlsxFile(documentPath);
    } else {
      // Use Office Online for PowerPoint or as fallback
      viewerUrl = getOfficeViewerUrl(documentPath, type);
      setCurrentDocument({ url: viewerUrl, title, type });
      setViewMode("office");
      setShowViewer(true);
    }
  };

  const getDocumentType = (path) => {
    const extension = path.split(".").pop().toLowerCase();
    switch (extension) {
      case "pdf":
        return "pdf";
      case "docx":
      case "doc":
        return "word";
      case "pptx":
      case "ppt":
        return "powerpoint";
      case "xlsx":
      case "xls":
        return "excel";
      case "mpp":
        return "msproject";
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
        return "image";
      default:
        return "download";
    }
  };

  const getFileTypeDisplay = (docType, path) => {
    const extension = path.split(".").pop().toUpperCase();
    switch (docType) {
      case "pdf":
        return `PDF (${extension})`;
      case "word":
        return `Word Document (${extension})`;
      case "powerpoint":
        return `PowerPoint (${extension})`;
      case "excel":
        return `Excel Spreadsheet (${extension})`;
      case "msproject":
        return `MS Project File (${extension})`;
      case "image":
        return `Image (${extension})`;
      default:
        return `File (${extension})`;
    }
  };

  const getSpecialNote = (docType) => {
    switch (docType) {
      case "msproject":
        return "Note: MS Project files require Microsoft Project to view";
      case "word":
        return "Click 'View' for optimised document preview";
      case "powerpoint":
        return "Click 'View' to preview presentation online";
      case "excel":
        return "Click 'View' for interactive spreadsheet preview";
      case "image":
        return "Click to view in full size";
      default:
        return null;
    }
  };

  const docType = documentType || getDocumentType(documentPath);
  const canViewInline = [
    "pdf",
    "image",
    "word",
    "powerpoint",
    "excel",
  ].includes(docType);
  const hasNativeSupport = ["word", "excel"].includes(docType); // PowerPoint not supported for native view yet
  const fileTypeDisplay = getFileTypeDisplay(docType, documentPath);
  const specialNote = getSpecialNote(docType);

  // Enhanced Document viewer modal component
  const ViewerModal = () => (
    <Modal
      show={showViewer}
      onHide={() => setShowViewer(false)}
      size="xl"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{currentDocument.title}</Modal.Title>
        {hasNativeSupport && (
          <div className="ms-auto me-3">
            <small className="text-muted me-2">
              {viewMode === "native" ? "📊 Optimised View" : "🌐 Online View"}
            </small>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => {
                if (viewMode === "native") {
                  // Switch to Office Online
                  setViewMode("office");
                  setDocumentContent("");
                } else {
                  // Switch to Native
                  if (currentDocument.type === "word") {
                    loadDocxFile(currentDocument.url);
                  } else if (currentDocument.type === "excel") {
                    loadXlsxFile(currentDocument.url);
                  }
                }
              }}
            >
              {viewMode === "native"
                ? "Switch to Online"
                : "Switch to Optimised"}
            </Button>
          </div>
        )}
      </Modal.Header>
      <Modal.Body style={{ padding: 0, height: "80vh" }}>
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-center">
              <Spinner animation="border" role="status" className="mb-3">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p>Loading document...</p>
            </div>
          </div>
        ) : loadError ? (
          <div className="p-4">
            <Alert variant="danger">
              <Alert.Heading>Error Loading Document</Alert.Heading>
              <p>{loadError}</p>
              <Button
                variant="outline-danger"
                onClick={() => {
                  setViewMode("office");
                  setDocumentContent("");
                  setLoadError(null);
                }}
              >
                Try Online View
              </Button>
            </Alert>
          </div>
        ) : viewMode === "native" && documentContent ? (
          <div
            className="p-4 document-content"
            style={{
              height: "100%",
              overflow: "auto",
              backgroundColor: "#fff",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: documentContent }} />
          </div>
        ) : (
          <iframe
            src={currentDocument.url}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title={currentDocument.title}
            onError={() => {
              setLoadError("Failed to load document in online viewer");
            }}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowViewer(false)}>
          Close
        </Button>
        <Button
          variant="primary"
          href={
            viewMode === "native" || currentDocument.type === "pdf"
              ? currentDocument.url
              : currentDocument.url.split("src=")[1]
              ? decodeURIComponent(currentDocument.url.split("src=")[1])
              : currentDocument.url
          }
          target="_blank"
        >
          Download
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <div className={`card h-100 ${className}`} style={{ minHeight: "250px" }}>
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">{title}</h5>
            <Badge bg="secondary" className="ms-2 flex-shrink-0">
              {fileTypeDisplay}
            </Badge>
          </div>
          <div className="flex-grow-1">
            <p className="card-text">{description}</p>

            {/* Image preview for image files */}
            {docType === "image" && (
              <div className="text-center mt-3 mb-3">
                <img
                  src={documentPath}
                  alt={title}
                  className="img-fluid rounded shadow-sm"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    objectFit: "contain",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  onClick={() =>
                    openDocumentViewer(documentPath, title, docType)
                  }
                />
              </div>
            )}
          </div>
          <div className="mt-auto">
            {/* Special note positioned consistently at the bottom */}
            {specialNote && (
              <div className="mb-2">
                <small className="text-muted">{specialNote}</small>
              </div>
            )}
            <div className="d-flex gap-2 align-items-center flex-wrap">
              {canViewInline && (
                <Button
                  variant="primary"
                  onClick={() =>
                    openDocumentViewer(documentPath, title, docType)
                  }
                  className="flex-shrink-0"
                >
                  View
                </Button>
              )}
              <Button
                variant={canViewInline ? "outline-primary" : "primary"}
                href={documentPath}
                target="_blank"
                download={!canViewInline}
                className="flex-shrink-0"
              >
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ViewerModal />

      {/* ImageLightbox component for images - positioned for full screen overlay */}
      {showImageLightbox &&
        ReactDOM.createPortal(
          <ImageLightbox
            isOpen={showImageLightbox}
            onClose={() => setShowImageLightbox(false)}
            imageUrl={currentDocument.url}
            altText={currentDocument.title}
          />,
          document.body
        )}
    </>
  );
}

export default DocumentCard;
