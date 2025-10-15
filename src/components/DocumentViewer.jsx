import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

// Document Card Component for consistent styling
export function DocumentCard({
  title,
  description,
  documentPath,
  documentType,
  className = "",
}) {
  const [showViewer, setShowViewer] = useState(false);
  const [currentDocument, setCurrentDocument] = useState({
    url: "",
    title: "",
    type: "",
  });

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

  // Function to open document viewer
  const openDocumentViewer = (documentPath, title, type) => {
    let viewerUrl;

    if (type === "pdf") {
      viewerUrl = documentPath; // Direct PDF viewing
    } else if (type === "image") {
      viewerUrl = documentPath; // Direct image viewing
    } else {
      viewerUrl = getOfficeViewerUrl(documentPath, type);
    }

    setCurrentDocument({ url: viewerUrl, title, type });
    setShowViewer(true);
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
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
        return "image";
      default:
        return "download";
    }
  };

  const docType = documentType || getDocumentType(documentPath);
  const canViewInline = docType === "pdf"; // Only PDFs can be viewed inline

  // Document viewer modal component
  const ViewerModal = () => (
    <Modal
      show={showViewer}
      onHide={() => setShowViewer(false)}
      size="xl"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{currentDocument.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: 0, height: "80vh" }}>
        {currentDocument.type === "pdf" || currentDocument.type === "image" ? (
          <iframe
            src={currentDocument.url}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title={currentDocument.title}
          />
        ) : (
          <iframe
            src={currentDocument.url}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title={currentDocument.title}
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
            currentDocument.type === "pdf" || currentDocument.type === "image"
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
      <div className={`card h-100 ${className}`}>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <div className="mt-auto">
            <div className="d-flex gap-2 align-items-center">
              {canViewInline && (
                <Button
                  variant="primary"
                  onClick={() =>
                    openDocumentViewer(documentPath, title, docType)
                  }
                  className="flex-shrink-0"
                >
                  View Inline
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
            {!canViewInline && docType !== "image" && (
              <small className="text-muted d-block mt-2">
                This file type requires download to view
              </small>
            )}
          </div>
        </div>
      </div>
      <ViewerModal />
    </>
  );
}

export default DocumentCard;
