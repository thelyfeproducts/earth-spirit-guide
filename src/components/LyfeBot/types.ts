export type ConversationStep = 
  | "welcome"
  | "find_remedy_area"
  | "find_remedy_goal"
  | "find_remedy_sensitivity"
  | "recommendation"
  | "shipping"
  | "ingredients"
  | "how_to_use"
  | "freeform";

export interface Message {
  id: string;
  sender: "bot" | "user";
  content: string;
  buttons?: ButtonOption[];
  products?: ProductRecommendation[];
}

export interface ButtonOption {
  label: string;
  value: string;
  action: ConversationStep | "close";
}

export interface ProductRecommendation {
  name: string;
  tagline: string;
  price: string;
  link: string;
  isAddOn?: boolean;
}

export interface QuizAnswers {
  area?: "hair" | "skin" | "both";
  goal?: "growth" | "moisture" | "calm" | "repair";
  sensitivity?: "yes" | "no" | "not_sure";
}
