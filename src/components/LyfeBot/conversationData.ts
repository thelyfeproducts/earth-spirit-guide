import { ButtonOption, ProductRecommendation, QuizAnswers } from "./types";

export const welcomeButtons: ButtonOption[] = [
  { label: "🌿 Find my remedy", value: "find_remedy", action: "find_remedy_area" },
  { label: "✨ Help me choose", value: "help_choose", action: "find_remedy_area" },
  { label: "📦 Shipping & returns", value: "shipping", action: "shipping" },
  { label: "🌱 Ingredients & sensitivities", value: "ingredients", action: "ingredients" },
  { label: "💧 How to use", value: "how_to_use", action: "how_to_use" },
];

export const areaButtons: ButtonOption[] = [
  { label: "Hair", value: "hair", action: "find_remedy_goal" },
  { label: "Skin", value: "skin", action: "find_remedy_goal" },
  { label: "Both", value: "both", action: "find_remedy_goal" },
];

export const goalButtons: ButtonOption[] = [
  { label: "Growth & strength", value: "growth", action: "find_remedy_sensitivity" },
  { label: "Deep moisture", value: "moisture", action: "find_remedy_sensitivity" },
  { label: "Calm & soothe", value: "calm", action: "find_remedy_sensitivity" },
  { label: "Repair & restore", value: "repair", action: "find_remedy_sensitivity" },
];

export const sensitivityButtons: ButtonOption[] = [
  { label: "Yes, I have sensitivities", value: "yes", action: "recommendation" },
  { label: "No sensitivities", value: "no", action: "recommendation" },
  { label: "Not sure", value: "not_sure", action: "recommendation" },
];

export const botMessages = {
  welcome: "Hey there! 🌿 I'm Lyfe, your Earth guide. How can I help you today?",
  find_remedy_area: "Let's find your perfect remedy. What area would you like to focus on?",
  find_remedy_goal: "Beautiful. And what's your main goal?",
  find_remedy_sensitivity: "Last one — do you have any skin or scalp sensitivities?",
  shipping: `📦 **Shipping & Returns**

We ship within 2-3 business days. Free shipping on orders over $50.

Returns are easy — if a remedy doesn't feel right within 30 days, we'll make it right. No questions, just care.

Anything else I can help with?`,
  ingredients: `🌱 **Ingredients & Sensitivities**

Every Lyfe remedy is made with organic, plant-based ingredients. No parabens, sulfates, or synthetic fragrances.

If you have specific allergies, each product page lists full ingredients. We're also happy to help you find what works for your body.

Want me to help you find a gentle option?`,
  how_to_use: `💧 **How to Use**

Each remedy comes with simple instructions, but here's the heart of it:

• **Oils**: Warm a small amount in your hands, massage gently, leave for 20+ mins or overnight
• **Butters**: Apply to damp skin for best absorption
• **Serums**: A few drops go a long way — less is more

The Earth works gently. Give it time. 🌿

Need help with a specific product?`,
  recommendation_intro: "Based on what you shared, here's what I'd suggest:",
  fallback: "I'm here to help! Feel free to ask about our remedies, ingredients, or how to use them. 🌿",
};

export function getRecommendations(answers: QuizAnswers): ProductRecommendation[] {
  const { area, goal, sensitivity } = answers;
  
  // Primary recommendations based on area + goal
  const recommendations: ProductRecommendation[] = [];
  
  if (area === "hair" || area === "both") {
    if (goal === "growth") {
      recommendations.push({
        name: "Rosemary Hair Growth Oil",
        tagline: "Supports healthy, nourished hair with rosemary and botanical oils",
        price: "$28",
        link: "#remedies",
      });
    } else if (goal === "moisture") {
      recommendations.push({
        name: "Lavender Body Butter",
        tagline: "Deep, lasting moisture with calming lavender",
        price: "$32",
        link: "#remedies",
      });
    } else if (goal === "calm" || goal === "repair") {
      recommendations.push({
        name: "Chamomile Healing Balm",
        tagline: "Gentle relief and restoration for sensitive areas",
        price: "$24",
        link: "#remedies",
      });
    }
  }
  
  if (area === "skin" || area === "both") {
    if (goal === "growth" || goal === "repair") {
      recommendations.push({
        name: "Turmeric Glow Serum",
        tagline: "Radiance and repair from Earth's golden treasure",
        price: "$38",
        link: "#remedies",
      });
    } else if (goal === "moisture") {
      recommendations.push({
        name: "Aloe Hydration Mist",
        tagline: "Refreshing burst of plant-powered hydration",
        price: "$22",
        link: "#remedies",
      });
    } else if (goal === "calm") {
      recommendations.push({
        name: "Chamomile Healing Balm",
        tagline: "Soothes and calms irritated skin naturally",
        price: "$24",
        link: "#remedies",
      });
    }
  }
  
  // Add complementary product as add-on
  if (recommendations.length > 0) {
    const addOn = getAddOn(recommendations[0].name, sensitivity);
    if (addOn) {
      recommendations.push({ ...addOn, isAddOn: true });
    }
  }
  
  // Fallback if no specific match
  if (recommendations.length === 0) {
    recommendations.push({
      name: "Rosemary Hair Growth Oil",
      tagline: "Our bestseller — nourishing care for hair and scalp",
      price: "$28",
      link: "#remedies",
    });
  }
  
  return recommendations;
}

function getAddOn(primaryProduct: string, sensitivity?: string): ProductRecommendation | null {
  // Suggest gentle options for sensitive users
  if (sensitivity === "yes") {
    return {
      name: "Chamomile Healing Balm",
      tagline: "Extra gentle for sensitive skin",
      price: "$24",
      link: "#remedies",
    };
  }
  
  // Complementary products
  const addOns: Record<string, ProductRecommendation> = {
    "Rosemary Hair Growth Oil": {
      name: "Lavender Body Butter",
      tagline: "Pairs beautifully for full-body care",
      price: "$32",
      link: "#remedies",
    },
    "Turmeric Glow Serum": {
      name: "Aloe Hydration Mist",
      tagline: "Lock in the glow with hydration",
      price: "$22",
      link: "#remedies",
    },
    "Lavender Body Butter": {
      name: "Aloe Hydration Mist",
      tagline: "Prep your skin before moisturizing",
      price: "$22",
      link: "#remedies",
    },
    "Chamomile Healing Balm": {
      name: "Aloe Hydration Mist",
      tagline: "Gentle hydration before healing",
      price: "$22",
      link: "#remedies",
    },
    "Aloe Hydration Mist": {
      name: "Lavender Body Butter",
      tagline: "Seal in moisture for lasting care",
      price: "$32",
      link: "#remedies",
    },
  };
  
  return addOns[primaryProduct] || null;
}
