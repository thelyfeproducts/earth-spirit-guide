import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, RotateCcw } from "lucide-react";
import { Message, ConversationStep, QuizAnswers, ButtonOption } from "./types";
import {
  welcomeButtons,
  areaButtons,
  skinPreferenceButtons,
  hairGoalButtons,
  botMessages,
  faqResponses,
  getRecommendation,
} from "./conversationData";

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow = ({ onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<ConversationStep>("welcome");
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({});
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial welcome message
    addBotMessage(botMessages.welcome, welcomeButtons);
  }, []);

  const addBotMessage = (content: string, buttons?: ButtonOption[], products?: Message["products"]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "bot",
      content,
      buttons,
      products,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleButtonClick = (button: ButtonOption) => {
    addUserMessage(button.label);

    // Store quiz answers based on current step
    if (currentStep === "area") {
      setQuizAnswers((prev) => ({ ...prev, area: button.value as QuizAnswers["area"] }));
      
      // If "both" is selected, go straight to recommendation
      if (button.value === "both") {
        const updatedAnswers = { ...quizAnswers, area: "both" as const };
        setTimeout(() => showRecommendation(updatedAnswers), 500);
        return;
      }
    } else if (currentStep === "skin_preference") {
      const updatedAnswers = { ...quizAnswers, skinPreference: button.value as QuizAnswers["skinPreference"] };
      setQuizAnswers(updatedAnswers);
      setTimeout(() => showRecommendation(updatedAnswers), 500);
      return;
    } else if (currentStep === "hair_goal") {
      const updatedAnswers = { ...quizAnswers, hairGoal: button.value as QuizAnswers["hairGoal"] };
      setQuizAnswers(updatedAnswers);
      setTimeout(() => showRecommendation(updatedAnswers), 500);
      return;
    }

    if (button.action === "close") {
      onClose();
      return;
    }

    // Handle next step
    setTimeout(() => {
      handleStep(button.action as ConversationStep);
    }, 500);
  };

  const showRecommendation = (answers: QuizAnswers) => {
    const { primary, addOn, addOnMessage } = getRecommendation(answers);
    
    // Show primary product
    addBotMessage(
      `${primary.icon} **${primary.name}**\n\n${primary.description}`,
      undefined,
      [primary]
    );

    // Show add-on after a delay
    if (addOn && addOnMessage) {
      setTimeout(() => {
        addBotMessage(
          `${addOnMessage}\n\n${addOn.icon} **${addOn.name}** might be a lovely addition.`,
          undefined,
          [{ ...addOn, isAddOn: true }]
        );
      }, 1000);
    }

    // Return to start after recommendations
    setTimeout(() => {
      addBotMessage("Is there anything else I can help you with? 🌿", [
        { label: "🌿 Find another remedy", value: "find_remedy", action: "area" },
        { label: "📦 Shipping & returns", value: "shipping", action: "shipping" },
        { label: "💧 How to use", value: "how_to_use", action: "how_to_use" },
      ]);
      setCurrentStep("welcome");
      setQuizAnswers({});
    }, 2500);
  };

  const handleStep = (step: ConversationStep) => {
    setCurrentStep(step);

    switch (step) {
      case "area":
        addBotMessage(botMessages.area, areaButtons);
        break;
      case "skin_preference":
        addBotMessage(botMessages.skin_preference, skinPreferenceButtons);
        break;
      case "hair_goal":
        addBotMessage(botMessages.hair_goal, hairGoalButtons);
        break;
      case "shipping":
        addBotMessage(botMessages.shipping, [
          { label: "🌿 Find my remedy", value: "find_remedy", action: "area" },
          { label: "Back to start", value: "back", action: "welcome" },
        ]);
        break;
      case "ingredients":
        addBotMessage(botMessages.ingredients, [
          { label: "🌿 Yes, help me find one", value: "find_remedy", action: "area" },
          { label: "Back to start", value: "back", action: "welcome" },
        ]);
        break;
      case "how_to_use":
        addBotMessage(botMessages.how_to_use, [
          { label: "🌿 Find my remedy", value: "find_remedy", action: "area" },
          { label: "Back to start", value: "back", action: "welcome" },
        ]);
        break;
      case "welcome":
        addBotMessage(botMessages.welcome, welcomeButtons);
        break;
      default:
        addBotMessage(botMessages.fallback, welcomeButtons);
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue.trim().toLowerCase();
    addUserMessage(inputValue);
    setInputValue("");
    
    // Simple keyword matching for common questions
    setTimeout(() => {
      if (userMessage.includes("result") || userMessage.includes("long") || userMessage.includes("work")) {
        addBotMessage(faqResponses.results, welcomeButtons);
      } else if (userMessage.includes("sensitive") || userMessage.includes("allerg")) {
        addBotMessage(faqResponses.sensitive, welcomeButtons);
      } else if (userMessage.includes("often") || userMessage.includes("frequent") || userMessage.includes("how many")) {
        addBotMessage(faqResponses.frequency, welcomeButtons);
      } else if (userMessage.includes("men") || userMessage.includes("women") || userMessage.includes("who")) {
        addBotMessage(faqResponses.forWho, welcomeButtons);
      } else if (userMessage.includes("ship") || userMessage.includes("return") || userMessage.includes("deliver")) {
        addBotMessage(botMessages.shipping, welcomeButtons);
      } else if (userMessage.includes("ingredient") || userMessage.includes("natural") || userMessage.includes("organic")) {
        addBotMessage(botMessages.ingredients, welcomeButtons);
      } else if (userMessage.includes("use") || userMessage.includes("apply") || userMessage.includes("how to")) {
        addBotMessage(botMessages.how_to_use, welcomeButtons);
      } else {
        addBotMessage(botMessages.fallback, welcomeButtons);
      }
    }, 500);
  };

  const handleReset = () => {
    setMessages([]);
    setQuizAnswers({});
    setCurrentStep("welcome");
    setTimeout(() => {
      addBotMessage(botMessages.welcome, welcomeButtons);
    }, 100);
  };

  // Render message content with bold text support
  const renderContent = (content: string) => {
    return content.split("**").map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-24 right-4 md:right-6 w-[calc(100vw-2rem)] md:w-96 max-h-[70vh] bg-card rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-border"
    >
      {/* Header */}
      <div className="bg-secondary text-secondary-foreground px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-secondary-foreground/20 rounded-full flex items-center justify-center">
            <span className="text-lg">🌿</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-sm">LyfeBot</h3>
            <p className="text-xs opacity-80">Your Earth Guide</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="p-2 hover:bg-secondary-foreground/10 rounded-full transition-colors"
            title="Start over"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary-foreground/10 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-secondary text-secondary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                }`}
              >
                <p className="font-body text-sm whitespace-pre-line leading-relaxed">
                  {renderContent(message.content)}
                </p>
                
                {/* Product Recommendations */}
                {message.products && message.products.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {message.products.map((product, idx) => (
                      <a
                        key={idx}
                        href={product.link}
                        className={`block p-3 rounded-xl transition-colors ${
                          product.isAddOn
                            ? "bg-accent/20 hover:bg-accent/30"
                            : "bg-secondary/10 hover:bg-secondary/20"
                        }`}
                      >
                        {product.isAddOn && (
                          <span className="text-xs font-body font-semibold text-accent-foreground/70 mb-1 block">
                            ✨ Lovely addition
                          </span>
                        )}
                        <p className="font-display font-bold text-sm text-charcoal">
                          {product.icon} {product.name}
                        </p>
                        <p className="font-body text-xs text-muted-foreground mt-1">
                          View product →
                        </p>
                      </a>
                    ))}
                  </div>
                )}

                {/* Button Options */}
                {message.buttons && message.buttons.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.buttons.map((button, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleButtonClick(button)}
                        className="px-3 py-2 bg-card border border-border rounded-full font-body text-xs font-medium text-charcoal hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-colors"
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-border bg-card">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 bg-background border border-border rounded-full font-body text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          <button
            type="submit"
            className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ChatWindow;
