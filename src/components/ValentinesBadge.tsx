import { Heart, Sparkles, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

export type ValentineBadgeType = "for-her" | "for-him" | "couples" | "self-love" | "bestseller";

interface ValentinesBadgeProps {
  type: ValentineBadgeType;
  className?: string;
}

const badgeConfig: Record<ValentineBadgeType, { label: string; icon: typeof Heart; colors: string }> = {
  "for-her": {
    label: "Perfect for Her",
    icon: Heart,
    colors: "bg-primary text-primary-foreground",
  },
  "for-him": {
    label: "Great for Him",
    icon: Sparkles,
    colors: "bg-secondary text-secondary-foreground",
  },
  "couples": {
    label: "Couples Favorite",
    icon: Heart,
    colors: "bg-accent text-accent-foreground",
  },
  "self-love": {
    label: "Self-Love Pick",
    icon: Gift,
    colors: "bg-terracotta text-terracotta-foreground",
  },
  "bestseller": {
    label: "Valentine's Bestseller",
    icon: Heart,
    colors: "bg-primary text-primary-foreground",
  },
};

// Helper function to determine badge type based on product title
export function getValentineBadgeType(productTitle: string): ValentineBadgeType | null {
  const title = productTitle.toLowerCase();
  
  // For Her - romantic, floral, feminine scents
  if (
    title.includes("velvet kiss") ||
    title.includes("lavender") ||
    title.includes("rose") ||
    title.includes("vanilla bean") ||
    title.includes("coconut")
  ) {
    return "for-her";
  }
  
  // For Him - masculine products
  if (
    title.includes("masculine") ||
    title.includes("black butter") ||
    title.includes("sandalwood") ||
    title.includes("unscented")
  ) {
    return "for-him";
  }
  
  // Couples - bundles and sets
  if (
    title.includes("bundle") ||
    title.includes("duo") ||
    title.includes("trio") ||
    title.includes("collection") ||
    title.includes("set")
  ) {
    return "couples";
  }
  
  // Self-love - sensual or indulgent products
  if (
    title.includes("midnight jazz") ||
    title.includes("slow burn") ||
    title.includes("cinnamon") ||
    title.includes("pumpkin spice")
  ) {
    return "self-love";
  }
  
  return null;
}

const ValentinesBadge = ({ type, className }: ValentinesBadgeProps) => {
  const config = badgeConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-bold shadow-sm",
        config.colors,
        className
      )}
    >
      <Icon className="w-3 h-3" fill="currentColor" />
      {config.label}
    </div>
  );
};

export default ValentinesBadge;
