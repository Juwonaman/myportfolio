import { useState } from 'react';
import dsc0097 from '../data/DSC_0097.JPEG';
import img1015 from '../data/IMG_1015.jpg';
import img2080 from '../data/IMG_2080.JPG';
import img2106 from '../data/IMG_2106.jpg';
import img3991 from '../data/IMG_3991.jpg';
import img4240 from '../data/IMG_4240.jpg';
import img4494 from '../data/IMG_4494.jpg';
import img7604 from '../data/IMG_7604.jpg';

export const photos = [
  { id: 'dsc0097', src: dsc0097, alt: 'Photo DSC_0097' },
  { id: 'img1015', src: img1015, alt: 'Photo IMG_1015' },
  { id: 'img2080', src: img2080, alt: 'Photo IMG_2080' },
  { id: 'img2106', src: img2106, alt: 'Photo IMG_2106' },
  { id: 'img4240', src: img4240, alt: 'Photo IMG_4240' },
  { id: 'img4494', src: img4494, alt: 'Photo IMG_4494' },
  { id: 'img7604', src: img7604, alt: 'Photo IMG_7604' },
];

const IMG_2106_ID = 'img2106';

export default function PhotoShuffle() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const current = photos[index];
  const img2106Photo = photos.find((p) => p.id === IMG_2106_ID);
  const img7604Photo = photos.find((p) => p.id === 'img7604');
  const is2106Pair = current.id === IMG_2106_ID;

  const handleDotClick = (i) => {
    const photo = photos[i];
    if (photo.id === IMG_2106_ID) {
      setIndex(i);
      setFlipped(true);
      return;
    }
    setIndex(i);
    setFlipped(false);
  };

  const handlePhotoClick = () => {
    if (is2106Pair) {
      setFlipped((f) => !f);
    }
  };

  return (
    <div className="photo-shuffle">
      <div
        className={`whoami-photo ${is2106Pair ? 'whoami-photo-flip cursor-pointer' : ''}`}
        onClick={is2106Pair ? handlePhotoClick : undefined}
        onKeyDown={
          is2106Pair
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handlePhotoClick();
                }
              }
            : undefined
        }
        role={is2106Pair ? 'button' : undefined}
        tabIndex={is2106Pair ? 0 : undefined}
        aria-label={is2106Pair ? 'Flip photo' : undefined}
      >
        {is2106Pair ? (
          <div className={`whoami-photo-inner ${flipped ? 'is-flipped' : ''}`}>
            <div className="whoami-photo-face">
              <img
                src={img2106Photo.src}
                alt={img2106Photo.alt}
                className="block h-full w-full object-cover"
              />
            </div>
            <div className="whoami-photo-face whoami-photo-face-back">
              <img
                src={img7604Photo.src}
                alt={img7604Photo.alt}
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        ) : (
          <img
            src={current.src}
            alt={current.alt}
            className="block h-full w-full object-cover"
          />
        )}
      </div>
      <div className="photo-shuffle-dots" role="tablist" aria-label="Choose photo">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            role="tab"
            onClick={() => handleDotClick(i)}
            aria-label={
              photo.id === IMG_2106_ID
                ? 'Show IMG_2106, flip to IMG_7604'
                : `Show ${photo.alt}`
            }
            aria-selected={i === index}
            className={`photo-shuffle-dot ${i === index ? 'photo-shuffle-dot-active' : ''}`}
          />
        ))}
      </div>
      {is2106Pair && flipped && <p className="photo-shuffle-found">you found my easter egg</p>}
    </div>
  );
}
