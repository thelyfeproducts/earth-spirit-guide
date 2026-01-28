export type ConversationStep = 
  | "welcome"
  | "area"
  | "skin_preference"
  | "hair_goal"
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
  description: string;
  link: string;
  icon: string;
  isAddOn?: boolean;
}

export interface QuizAnswers {
  area?: "hair" | "skin" | "both";
  skinPreference?: "comforting" | "grounding";
  hairGoal?: "growth" | "both_not_sure";
}
