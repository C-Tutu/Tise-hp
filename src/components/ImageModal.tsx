import { useState, useEffect, useCallback } from "react";
import "./ImageModal.css";

interface ImageModalProps {
    isOpen: boolean;
    imageSrc: string;
    imageAlt: string;
    onClose: () => void;
}

const ImageModal = ({
    isOpen,
    imageSrc,
    imageAlt,
    onClose,
}: ImageModalProps) => {
    const [isClosing, setIsClosing] = useState(false);

    // 閉じる処理
    const handleClose = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 200);
    }, [onClose]);

    // Escキーでモーダルを閉じる
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden"; // スクロール無効化
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, handleClose]);

    if (!isOpen) return null;

    return (
        <div
            className={`image-modal-overlay ${isClosing ? "closing" : ""}`}
            onClick={handleClose}
        >
            <button
                className="modal-close-btn"
                onClick={handleClose}
                aria-label="閉じる"
            >
                ×
            </button>
            <div
                className="image-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <img src={imageSrc} alt={imageAlt} />
            </div>
        </div>
    );
};

export default ImageModal;
