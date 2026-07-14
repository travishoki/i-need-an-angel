export default function ReadMoreButton({
  expanded,
  onClick,
}: {
  expanded: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center gap-1 text-sm font-medium text-ocean-teal underline dark:text-sky-cyan"
    >
      {expanded ? "Read Less" : "Read More"}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        className={`transition-transform ${expanded ? "rotate-180" : ""}`}
      >
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
