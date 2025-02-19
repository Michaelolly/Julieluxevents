import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { EquipmentCard } from '@/components/equipment/EquipmentCard'
import { supabase } from '@/lib/supabase'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Equipment {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  created_at: string;
  available: boolean;
}

export default function EquipmentPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const { data: equipment, isLoading } = useQuery<Equipment[]>({
    queryKey: ['equipment', search, category],
    queryFn: async () => {
      let query = supabase
        .from('equipment')
        .select('*')
        .order('created_at', { ascending: false })

      if (search) {
        query = query.ilike('name', `%${search}%`)
      }

      if (category !== 'all') {
        query = query.eq('category', category)
      }

      const { data, error } = await query

      if (error) throw error
      return data
    },
  })

  const handleRent = (id: string) => {
    // TODO: Implement rental logic
    console.log('Renting equipment:', id)
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Search equipment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="md:max-w-xs"
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="md:max-w-xs">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="sound">Sound Equipment</SelectItem>
            <SelectItem value="lighting">Lighting</SelectItem>
            <SelectItem value="furniture">Furniture</SelectItem>
            <SelectItem value="decoration">Decoration</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-[400px] bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equipment?.map((item) => (
            <EquipmentCard
              key={item.id}
              equipment={item}
              onRent={handleRent}
            />
          ))}
        </div>
      )}
    </div>
  )
}
