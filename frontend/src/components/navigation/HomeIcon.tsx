import { colors } from "../../styles/theme";

type IconProps = {
  active?: boolean;
};

export default function HomeIcon({
  active = false,
}: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={active ? colors.accent : "none"}
      stroke={active ? colors.accent : colors.textMuted}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  );
}