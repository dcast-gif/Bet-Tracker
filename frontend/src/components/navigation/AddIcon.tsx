import { colors } from "../../styles/theme";

type IconProps = {
  active?: boolean;
};

export default function AddIcon({
  active = false,
}: IconProps) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "#ffffff" : colors.textMuted}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}