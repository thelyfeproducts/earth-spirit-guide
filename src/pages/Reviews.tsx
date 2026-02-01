import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send, CheckCircle } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const reviewSchema = z.object({
  customer_name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  customer_email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  product_name: z.string().trim().max(200, "Product name must be less than 200 characters").optional(),
  rating: z.number().min(1, "Please select a rating").max(5),
  review_text: z.string().trim().min(10, "Review must be at least 10 characters").max(1000, "Review must be less than 1000 characters"),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

interface Review {
  id: string;
  customer_name: string;
  product_name: string | null;
  rating: number;
  review_text: string;
  created_at: string;
}

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      customer_name: "",
      customer_email: "",
      product_name: "",
      rating: 0,
      review_text: "",
    },
  });

  // Fetch approved reviews
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["approved-reviews"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, customer_name, product_name, rating, review_text, created_at")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Review[];
    },
  });

  // Submit review mutation
  const submitReview = useMutation({
    mutationFn: async (data: ReviewFormData) => {
      const { error } = await supabase.from("reviews").insert({
        customer_name: data.customer_name,
        customer_email: data.customer_email,
        product_name: data.product_name || null,
        rating: data.rating,
        review_text: data.review_text,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
      setSelectedRating(0);
      queryClient.invalidateQueries({ queryKey: ["approved-reviews"] });
    },
    onError: () => {
      toast.error("Failed to submit review. Please try again.");
    },
  });

  const onSubmit = (data: ReviewFormData) => {
    submitReview.mutate(data);
  };

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
    form.setValue("rating", rating);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-lyfe max-w-4xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-terracotta/10 text-terracotta font-body font-semibold px-4 py-2 rounded-full text-sm mb-6">
              Share Your Experience
            </span>
            <h1 className="heading-section mb-4">
              Customer <span className="text-secondary">Reviews</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              We love hearing from our community! Share your experience with Lyfe Products 
              and help others discover the power of natural skincare.
            </p>
          </motion.div>

          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="font-display text-xl text-center">
                  Leave a Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                    <h3 className="font-display text-xl font-bold mb-2">
                      Thank You for Your Review!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Your review has been submitted and will appear after approval.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Review
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="customer_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="customer_email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="jane@example.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="product_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Reviewed (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Rosemary Hair Growth Oil" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="rating"
                        render={() => (
                          <FormItem>
                            <FormLabel>Rating *</FormLabel>
                            <FormControl>
                              <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <button
                                    key={star}
                                    type="button"
                                    onClick={() => handleRatingClick(star)}
                                    onMouseEnter={() => setHoveredRating(star)}
                                    onMouseLeave={() => setHoveredRating(0)}
                                    className="p-1 transition-transform hover:scale-110"
                                  >
                                    <Star
                                      className={`w-8 h-8 transition-colors ${
                                        star <= (hoveredRating || selectedRating)
                                          ? "text-accent fill-accent"
                                          : "text-muted-foreground"
                                      }`}
                                    />
                                  </button>
                                ))}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="review_text"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Review *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your experience with our products..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-secondary hover:bg-secondary/90"
                        disabled={submitReview.isPending}
                      >
                        {submitReview.isPending ? (
                          "Submitting..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Submit Review
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Approved Reviews Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              What Our Customers Say
            </h2>

            {isLoading ? (
              <div className="text-center py-8 text-muted-foreground">
                Loading reviews...
              </div>
            ) : reviews && reviews.length > 0 ? (
              <div className="grid gap-6">
                {reviews.map((review) => (
                  <Card key={review.id} className="border-border/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="font-display font-bold text-charcoal">
                            {review.customer_name}
                          </p>
                          {review.product_name && (
                            <p className="text-sm text-muted-foreground">
                              Reviewed: {review.product_name}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-accent fill-accent"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="font-body text-charcoal leading-relaxed">
                        "{review.review_text}"
                      </p>
                      <p className="text-xs text-muted-foreground mt-4">
                        {new Date(review.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <p>No reviews yet. Be the first to share your experience!</p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
