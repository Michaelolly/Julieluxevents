-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Equipment table
create table if not exists equipment (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  price integer not null,
  category text not null,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Rentals table
create table if not exists rentals (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  equipment_id uuid references equipment not null,
  start_date timestamp with time zone not null,
  end_date timestamp with time zone not null,
  total_amount integer not null,
  status text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add RLS (Row Level Security) policies
alter table equipment enable row level security;
alter table rentals enable row level security;

-- Equipment policies
create policy "Anyone can view equipment"
  on equipment for select
  using (true);

create policy "Only admins can insert equipment"
  on equipment for insert
  using (auth.uid() in (select auth.uid() from auth.users where auth.email() like '%@admin.com'));

create policy "Only admins can update equipment"
  on equipment for update
  using (auth.uid() in (select auth.uid() from auth.users where auth.email() like '%@admin.com'));

-- Rentals policies
create policy "Users can view their own rentals"
  on rentals for select
  using (auth.uid() = user_id);

create policy "Users can create their own rentals"
  on rentals for insert
  with check (auth.uid() = user_id);

-- Insert some sample equipment data
insert into equipment (name, description, price, category, image_url) values
  ('Professional DJ Set', 'Complete DJ setup including mixer, turntables, and speakers', 50000, 'sound', 'https://example.com/dj-set.jpg'),
  ('Party Tent 20x20', 'Large party tent perfect for outdoor events', 30000, 'furniture', 'https://example.com/tent.jpg'),
  ('LED Light Package', 'Professional LED lighting setup with controllers', 25000, 'lighting', 'https://example.com/led-lights.jpg'),
  ('Sound System', 'High-quality speakers and amplifier system', 40000, 'sound', 'https://example.com/sound-system.jpg'),
  ('Decoration Package', 'Complete party decoration set including balloons and banners', 15000, 'decoration', 'https://example.com/decorations.jpg');
