import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'

interface EquipmentCardProps {
  equipment: {
    id: string
    name: string
    description: string
    price: number
    imageUrl: string
    category: string
  }
  onRent: (id: string) => void
}

export function EquipmentCard({ equipment, onRent }: EquipmentCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <img
          src={equipment.imageUrl}
          alt={equipment.name}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{equipment.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {equipment.description}
        </p>
        <p className="mt-2 font-semibold">
          {formatCurrency(equipment.price)} / day
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => onRent(equipment.id)}>
          Rent Now
        </Button>
      </CardFooter>
    </Card>
  )
}
