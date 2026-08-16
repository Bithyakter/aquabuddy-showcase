import Image from "next/image";

// Reuses the actual split assets from AquaBuddy's own "still there?" nudge
// (waving-body.png + waving-hand.png, see AquaBuddy/scripts/prepare-sprites.js)
// and the same wrist-pivot crop math, so the hand genuinely swings instead
// of the whole sprite rocking back and forth.
const NATIVE = { width: 447, height: 558 };
const HAND_CROP = { x: 85, y: 0, w: 88, h: 210 };

export default function WavingCharacter({ className = "" }: { className?: string }) {
    return (
        <div className={`relative aspect-[447/558] ${className}`}>
            <Image
                src="/images/character/waving-body.png"
                alt="AquaBuddy waving hello"
                fill
                sizes="400px"
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            />
            <div
                className="absolute animate-hand-wave"
                style={{
                    left: `${(HAND_CROP.x / NATIVE.width) * 100}%`,
                    top: `${(HAND_CROP.y / NATIVE.height) * 100}%`,
                    width: `${(HAND_CROP.w / NATIVE.width) * 100}%`,
                    height: `${(HAND_CROP.h / NATIVE.height) * 100}%`,
                    transformOrigin: "74% 93%"
                }}
            >
                <Image src="/images/character/waving-hand.png" alt="" fill sizes="100px" className="object-contain" />
            </div>
        </div>
    );
}