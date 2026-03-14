import Image from "next/image";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export default function CakeGallery({ data }) {
  function openLightbox(src) {
  if (typeof window !== "undefined") {
    basicLightbox
      .create(
        `<img src="${src}" style="max-width: 80vw; max-height: 80vh; border-radius:16px;" />`
      )
      .show();
  }
}

  return (
    <div className="gallery-grid">
      {data.map((item, index) => (
        <div
          key={index}
          className={`cake-item filter-item ${item.category}`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            onClick={() => openLightbox(item.src)}
            width={282}
            height={350}
          />
          <div className="caption">{item.caption}</div>
        </div>
      ))}
    </div>
  );
}