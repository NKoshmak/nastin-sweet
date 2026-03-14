/** @format */

import Image from "next/image";

export default function MenuCard({ item, activeCategory, onFillingsClick }) {
  // console.log(item);

  return (
    <div className="item">
      {item.image ? (
        <Image
          src={item.image}
          alt={item.title || item.name}
          width={220}
          height={220}
        />
      ) : (
        <div style={{ width: 220, height: 220, background: "#eee" }}>
          No image
        </div>
      )}

      <div className="item-info">
        <h4>{item.title || item.name || item.type}</h4>

        {!item.fillings &&
          ["cakes", "mousse-cakes"].includes(activeCategory) && (
            <p className="see-fillings-link">
              <button onClick={onFillingsClick} className="link-button">
                See available fillings →
              </button>
            </p>
          )}

        {item.description && <p>{item.description}</p>}
        {item.details && <p className="price">{item.details}</p>}
        {item.note && (
          <p>
            <i>{item.note}</i>
          </p>
        )}
        {item.price && (
          <p className="price">
            <strong>{item.price}</strong>
          </p>
        )}

        {/* For sizes */}
        {item.sizes && (
          <div className="sizes">
            {item.sizes.map((s, idx) => (
              <p key={idx}>
                {s.size} — {s.serves} — <strong>{s.price}</strong>
              </p>
            ))}
          </div>
        )}

        {/* For decorations */}
        {item.decorations && (
          <div className="decorations">
            <p>
              <strong>Decorations:</strong>
            </p>
            {item.decorations.map((d, idx) => (
              <p key={idx}>
                {d.type} — {d.price}
              </p>
            ))}
          </div>
        )}

        {/* For flavors */}
        {item.flavors && (
          <div className="flavors">
            <p>
              <strong>Flavors:</strong> {item.flavors.join(", ")}
            </p>
          </div>
        )}

        {/* For fillings */}
        {item.fillings && (
          <div className="fillings">
            <p>
              <strong>Fillings:</strong>
            </p>
            {item.fillings.map((f, idx) => (
              <p key={idx}>
                {f.name ? (
                  <>
                    <strong>{f.name}:</strong> {f.description}
                  </>
                ) : (
                  f
                )}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
