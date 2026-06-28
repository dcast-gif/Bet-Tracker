type IconProps = {
  active?: boolean;
};

export default function AddIcon({
  active = false,
}: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "#ffffff" : "#ffffff"}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}