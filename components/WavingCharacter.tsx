import Image from "next/image";

// Reuses the actual split assets from AquaBuddy's own character engines
// (waving-body.png + waving-hand.png, see AquaBuddy/src/renderer/character.ts)
// and the same wrist-pivot crop math for each skin.
const SKIN_CONFIGS = {
    "default": {
        aspect: "aspect-[447/558]",
        native: { width: 447, height: 558 },
        handCrop: { x: 85, y: 0, w: 88, h: 210 },
        transformOrigin: "74% 93%",
        body: "/images/character/waving-body.png",
        hand: "/images/character/waving-hand.png"
    },
    "character-2": {
        aspect: "aspect-[389/924]",
        native: { width: 389, height: 924 },
        handCrop: { x: 280, y: 155, w: 115, h: 130 },
        transformOrigin: "45.2% 84.6%",
        body: "/images/character-2/waving-body.png",
        hand: "/images/character-2/waving-hand.png"
    }
} as const;

export type CharacterSkin = keyof typeof SKIN_CONFIGS;

export default function WavingCharacter({
    className = "",
    skin = "default"
}: {
    className?: string;
    skin?: CharacterSkin;
}) {
    const config = SKIN_CONFIGS[skin] ?? SKIN_CONFIGS.default;

    return (
        <div className={`relative ${config.aspect} ${className}`}>
            <Image
                src={config.body}
                alt="AquaBuddy waving hello"
                fill
                sizes="400px"
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            />
            <div
                className="absolute animate-hand-wave"
                style={{
                    left: `${(config.handCrop.x / config.native.width) * 100}%`,
                    top: `${(config.handCrop.y / config.native.height) * 100}%`,
                    width: `${(config.handCrop.w / config.native.width) * 100}%`,
                    height: `${(config.handCrop.h / config.native.height) * 100}%`,
                    transformOrigin: config.transformOrigin
                }}
            >
                <Image src={config.hand} alt="" fill sizes="100px" className="object-contain" />
            </div>
        </div>
    );
}
