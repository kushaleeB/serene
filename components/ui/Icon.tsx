import {
  Bed,
  Eye,
  Mountain,
  Trees,
  Umbrella,
  User,
  Waves,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bed,
  Eye,
  Mountain,
  Trees,
  Umbrella,
  User,
  Waves,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, size = 14, className, strokeWidth = 1.5 }: IconProps) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} strokeWidth={strokeWidth} />;
}
