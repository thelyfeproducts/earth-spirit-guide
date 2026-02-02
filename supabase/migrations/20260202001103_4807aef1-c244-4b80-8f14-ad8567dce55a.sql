-- Create table for pre-order email signups
CREATE TABLE public.preorder_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  product_handle TEXT,
  collection_slug TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.preorder_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to sign up for notifications (insert)
CREATE POLICY "Anyone can sign up for preorder notifications"
ON public.preorder_signups
FOR INSERT
WITH CHECK (true);

-- Prevent public reads of email list (admin only via service role)
CREATE POLICY "No public read access"
ON public.preorder_signups
FOR SELECT
USING (false);