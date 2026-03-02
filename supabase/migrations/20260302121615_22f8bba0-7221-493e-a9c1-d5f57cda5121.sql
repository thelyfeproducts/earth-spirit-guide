
-- Reviews table constraints
ALTER TABLE public.reviews
  ADD CONSTRAINT reviews_valid_email CHECK (customer_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT reviews_name_length CHECK (char_length(customer_name) >= 2 AND char_length(customer_name) <= 100),
  ADD CONSTRAINT reviews_email_length CHECK (char_length(customer_email) <= 255),
  ADD CONSTRAINT reviews_review_length CHECK (char_length(review_text) >= 10 AND char_length(review_text) <= 1000),
  ADD CONSTRAINT reviews_product_name_length CHECK (product_name IS NULL OR char_length(product_name) <= 200),
  ADD CONSTRAINT reviews_rating_range CHECK (rating >= 1 AND rating <= 5);

-- Pre-order signups constraints
ALTER TABLE public.preorder_signups
  ADD CONSTRAINT preorder_valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT preorder_email_length CHECK (char_length(email) <= 255);

-- Team applications constraints
ALTER TABLE public.team_applications
  ADD CONSTRAINT team_valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT team_name_length CHECK (char_length(name) >= 2 AND char_length(name) <= 100),
  ADD CONSTRAINT team_email_length CHECK (char_length(email) <= 255),
  ADD CONSTRAINT team_message_length CHECK (char_length(message) >= 10 AND char_length(message) <= 2000),
  ADD CONSTRAINT team_phone_length CHECK (phone IS NULL OR char_length(phone) <= 20);
