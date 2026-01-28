import { ButtonOption, ProductRecommendation, QuizAnswers } from "./types";

export const welcomeButtons: ButtonOption[] = [
  { label: "🌿 Find my remedy", value: "find_remedy", action: "area" },
  { label: "📦 Shipping & returns", value: "shipping", action: "shipping" },
  { label: "🌱 Ingredients & sensitivities", value: "ingredients", action: "ingredients" },
  { label: "💧 How to use", value: "how_to_use", action: "how_to_use" },
];

export const areaButtons: ButtonOption[] = [
  { label: "💆 Hair", value: "hair", action: "hair_goal" },
  { label: "✨ Skin", value: "skin", action: "skin_preference" },
  { label: "🌿 Both", value: "both", action: "recommendation" },
];

export const skinPreferenceButtons: ButtonOption[] = [
  { label: "🌼 Comforting", value: "comforting", action: "recommendation" },
  { label: "🌲 Grounding", value: "grounding", action: "recommendation" },
];

export const hairGoalButtons: ButtonOption[] = [
  { label: "🌱 Growth", value: "growth", action: "recommendation" },
  { label: "🤔 Both / Not sure", value: "both_not_sure", action: "recommendation" },
];

export const products: Record<string, ProductRecommendation> = {
  vanillaBodyButter: {
    name: "Vanilla Bean Body Butter",
    description: "This one is gentle, comforting, and perfect for everyday moisture.\n\nMost people love it for dry or sensitive skin, especially as a nighttime or self-care routine.\n\nIf you're new to Lyfe, this is a beautiful place to start 🌱",
    link: "#shop",
    icon: "🌼",
  },
  sandalwoodBodyButter: {
    name: "Sandalwood Body Butter",
    description: "This one is richer and more grounding.\n\nPeople love it for deep moisture and evening routines — especially if you enjoy warm, earthy scents.\n\nIt pairs really well with the hair serum for a full self-care ritual.",
    link: "#shop",
    icon: "🌲",
  },
  hairSerum: {
    name: "2oz Hair Growth Serum",
    description: "This serum is focused on scalp health and growth support.\n\nIt's best if you're dealing with dryness, thinning edges, or just want to support healthier hair over time.\n\nA little goes a long way — consistency matters more than quantity.",
    link: "#shop",
    icon: "🌿",
  },
};

export const botMessages = {
  welcome: "Hey there! 🌿 I'm Lyfe, your Earth guide. How can I help you today?",
  area: "What are you shopping for?",
  skin_preference: "Do you prefer something comforting or grounding?",
  hair_goal: "Is your main goal growth or scalp comfort?",
  shipping: `We ship within 3-5 business days. Returns are accepted within 30 days if unopened.

If something doesn't feel right, just reach out — we're here to help 🌿

Anything else I can help with?`,
  ingredients: `All our products are plant-based and made with organic ingredients.

We always recommend a small patch test, especially if your skin is sensitive.

Feel free to ask about any specific ingredient — I'm happy to help.

Want me to help you find a remedy?`,
  how_to_use: `Here's how most people use our products:

🌿 **Hair Serum**: Apply 2–3 times per week to scalp. Gentle consistency matters more than daily use.

🌼 **Body Butters**: Apply after bathing while skin is still slightly damp for best absorption.

A little goes a long way with all Lyfe products.

Would you like me to help you find the right remedy?`,
  fallback: "I'm here to help! Feel free to use the buttons above, or ask me about our products, ingredients, or how to use them 🌿",
};

export const faqResponses: Record<string, string> = {
  results: "Everyone's body is different, but most people notice improved moisture and scalp comfort first.\n\nGrowth support comes with consistent use over time.",
  sensitive: "Yes — we always recommend a small patch test, especially if your skin is sensitive.",
  frequency: "2–3 times per week is a great place to start for the hair serum.\n\nGentle consistency matters more than daily use.",
  forWho: "Yes — Lyfe products are for anyone seeking natural, grounded care.",
};

export function getRecommendation(answers: QuizAnswers): { primary: ProductRecommendation; addOn?: ProductRecommendation; addOnMessage?: string } {
  const { area, skinPreference } = answers;
  
  if (area === "skin") {
    if (skinPreference === "comforting") {
      return {
        primary: products.vanillaBodyButter,
        addOn: products.hairSerum,
        addOnMessage: "Some people pair this with our hair serum for a full routine 🌿",
      };
    } else {
      return {
        primary: products.sandalwoodBodyButter,
        addOn: products.hairSerum,
        addOnMessage: "Some people pair this with our hair serum for a full routine 🌿",
      };
    }
  }
  
  if (area === "hair") {
    return {
      primary: products.hairSerum,
      addOn: products.vanillaBodyButter,
      addOnMessage: "Many people also use a body butter to support overall skin moisture and self-care.",
    };
  }
  
  // Both
  return {
    primary: products.hairSerum,
    addOn: products.vanillaBodyButter,
    addOnMessage: "A lot of people start with a simple two-step ritual.\n\nIf you prefer something more grounding, Sandalwood is a great alternative.",
  };
}
