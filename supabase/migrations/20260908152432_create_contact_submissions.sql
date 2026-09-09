/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's name
  - `email` (text, not null) — submitter's email
  - `subject` (text, not null, default 'general') — inquiry type: general, join, sponsor, media, collaboration
  - `message` (text, not null) — the message body
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated to INSERT (public contact form, no sign-in needed).
- No SELECT/UPDATE/DELETE for anon or authenticated — only service role can read submissions.

3. Notes
- This is a no-auth public website. The contact form is submitted anonymously by visitors.
- Submissions are read by the team using the service role key (server-side only).
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL DEFAULT 'general',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);
