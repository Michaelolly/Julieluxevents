export type Equipment = {
  id: string
  name: string
  description: string | null
  price: number
  category: string
  image_url: string | null
  created_at: string
}

export type Rental = {
  id: string
  user_id: string
  equipment_id: string
  start_date: string
  end_date: string
  total_amount: number
  status: 'pending' | 'active' | 'completed' | 'cancelled'
  created_at: string
}

export type Database = {
  public: {
    Tables: {
      equipment: {
        Row: Equipment
        Insert: Omit<Equipment, 'id' | 'created_at'>
        Update: Partial<Omit<Equipment, 'id' | 'created_at'>>
      }
      rentals: {
        Row: Rental
        Insert: Omit<Rental, 'id' | 'created_at'>
        Update: Partial<Omit<Rental, 'id' | 'created_at'>>
      }
    }
  }
}
