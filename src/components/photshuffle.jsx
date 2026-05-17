import { useEffect, useState } from 'react';
import dsc0097 from '../data/DSC_0097.JPEG';
import img1015 from '../data/IMG_1015.jpg';
import img2080 from '../data/IMG_2080.JPG';
import img2106 from '../data/IMG_2106.jpg';
import img3991 from '../data/IMG_3991.jpg';
import img4240 from '../data/IMG_4240.jpg';
import img4494 from '../data/IMG_4494.jpg';
import img7604 from '../data/IMG_7604.jpg';

/** Shown in the carousel and dots — IMG_7604 is easter-egg back only, not listed here. */
export const photos = [
  { id: 'dsc0097', src: dsc0097, alt: 'Photo DSC_0097' },
  { id: 'img1015', src: img1015, alt: 'Photo IMG_1015' },
  { id: 'img2080', src: img2080, alt: 'Photo IMG_2080' },
  { id: 'img2106', src: img2106, alt: 'Photo IMG_2106' },
  { id: 'img4240', src: img4240, alt: 'Photo IMG_4240' },
  { id: 'img4494', src: img4494, alt: 'Photo IMG_4494' },
];

const IMG_2106_ID = 'img2106';
const easterEggBack = { id: 'img7604', src: img7604, alt: 'Photo IMG_7604' };
const SHUFFLE_MS = 3500;

export default function PhotoShuffle() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [timerReset, setTimerReset] = useState(0);
  const current = photos[index];
  const img2106Photo = photos.find((p) => p.id === IMG_2106_ID);
  const is2106Pair = current.id === IMG_2106_ID;

  const resetShuffleTimer = () => {
    setTimerReset((n) => n + 1);
  };

  useEffect(() => {
    if (photos.length === 0) return undefined;

    const id = window.setInterval(() => {
      setFlipped(false);
      setIndex((i) => (i + 1) % photos.length);
    }, SHUFFLE_MS);

    return () => window.clearInterval(id);
  }, [timerReset]);

  const handleDotClick = (i) => {
    setIndex(i);
    setFlipped(false);
    resetShuffleTimer();
  };

  const handlePhotoClick = () => {
    if (is2106Pair) {
      setFlipped((f) => !f);
      resetShuffleTimer();
    }
  };

  return (
    <div className="photo-shuffle ">
      <div
        className={`whoami-photo shadow-[3px_3px_0px_grey] ${is2106Pair ? 'whoami-photo-flip cursor-pointer' : ''}`}
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
            <div className="whoami-photo-face whoami-photo-face-back ">
              <img
                src={easterEggBack.src}
                alt={easterEggBack.alt}
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        ) : (
          <img
            src={current.src}
            alt={current.alt}
            className="block h-full w-full object-cover "
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
                ? 'Show IMG_2106 (click photo to flip)'
                : `Show ${photo.alt}`
            }
            aria-selected={i === index}
            className={`photo-shuffle-dot ${i === index ? 'photo-shuffle-dot-active' : ''}`}
          />
        ))}
      </div>
      <div className="photo-shuffle-found-slot" aria-live="polite">
        <p
          className={`photo-shuffle-found ${is2106Pair && flipped ? 'photo-shuffle-found-visible' : ''}`}
        >
          you found my easter egg!
        </p>
      </div>
    </div>
  );
}
