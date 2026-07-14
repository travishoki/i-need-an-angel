export default function ReadMoreButton({
  expanded,
  onClick,
}: {
  expanded: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="flex cursor-pointer items-center gap-1 text-sm font-medium text-ocean-teal underline dark:text-sky-cyan"
      onClick={onClick}
    >
      {expanded ? 'Read Less' : 'Read More'}
      <svg
        className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
        fill="none"
        height="14"
        viewBox="0 0 24 24"
        width="14"
      >
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}
