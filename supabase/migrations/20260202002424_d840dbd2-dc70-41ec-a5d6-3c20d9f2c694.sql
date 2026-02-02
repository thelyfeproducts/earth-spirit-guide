-- Create table for team/job applications
CREATE TABLE public.team_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  role_interest TEXT NOT NULL,
  message TEXT NOT NULL,
  resume_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.team_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit an application (insert)
CREATE POLICY "Anyone can submit a team application"
ON public.team_applications
FOR INSERT
WITH CHECK (true);

-- Prevent public reads (admin only via service role)
CREATE POLICY "No public read access to applications"
ON public.team_applications
FOR SELECT
USING (false);