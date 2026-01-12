import { useState } from "react";
import illust1 from "../assets/images/tise-illust-1.png";
import illust2 from "../assets/images/tise-illust-2.png";
import illust3 from "../assets/images/tise-illust-3.png";
import illust4 from "../assets/images/tise-illust-4.png";
import ImageModal from "./ImageModal";
import "./Showcase.css";

const Showcase = () => {
    const [selectedImage, setSelectedImage] = useState<{
        src: string;
        alt: string;
    } | null>(null);

    // 各イラストの特徴に合わせたレイアウト設定
    const works = [
        { id: 1, title: "La Pluma", src: illust1, type: "featured" }, // 横長、メイン作品
        { id: 2, title: "Mulberry", src: illust2, type: "sketch" }, // 縦長スケッチ
        { id: 4, title: "Character", src: illust4, type: "wip" }, // WIP作品
        { id: 3, title: "よいお年を", src: illust3, type: "calligraphy" }, // 書道作品
    ];

    const handleImageClick = (src: string, alt: string) => {
        setSelectedImage({ src, alt });
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <section className="showcase container">
                {works.map((work) => (
                    <div key={work.id} className={`art-piece ${work.type}`}>
                        <div
                            className="art-image-wrapper"
                            onClick={() =>
                                handleImageClick(work.src, work.title)
                            }
                        >
                            <img
                                src={work.src}
                                alt={work.title}
                                loading="lazy"
                            />
                        </div>
                        <span className="art-title">{work.title}</span>
                    </div>
                ))}
            </section>
            <ImageModal
                isOpen={selectedImage !== null}
                imageSrc={selectedImage?.src || ""}
                imageAlt={selectedImage?.alt || ""}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default Showcase;
