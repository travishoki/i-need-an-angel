export default function SliderArrow({
  direction,
  disabled,
  onClick,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={`Scroll ${direction}`}
      className={`absolute ${isLeft ? "left-1" : "right-1"} top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-ink-brown/80 p-2 text-blush-cream opacity-0 transition-opacity group-hover/slider:opacity-100 sm:flex ${
        disabled
          ? "cursor-not-allowed group-hover/slider:opacity-60"
          : "cursor-pointer"
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d={isLeft ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
