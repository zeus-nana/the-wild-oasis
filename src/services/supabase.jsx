import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tunqvhxkvywmceilwyga.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1bnF2aHhrdnl3bWNlaWx3eWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NDU3NDksImV4cCI6MjAzMjIyMTc0OX0.ztYC0VIG0UJLuf7O7WUF98e36CRTJPZO501W_98ebj0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
