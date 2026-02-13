-- Create reviews table for customer submissions
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  product_name TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a review (insert)
CREATE POLICY "Anyone can submit a review" 
ON public.reviews 
FOR INSERT 
WITH CHECK (true);

-- Only approved reviews are publicly visible
CREATE POLICY "Only approved reviews are visible" 
ON public.reviews 
FOR SELECT 
USING (is_approved = true);