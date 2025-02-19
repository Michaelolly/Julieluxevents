import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
import { createPaymentIntent } from '@/lib/payment'
import { CheckoutForm } from '@/components/checkout/CheckoutForm'
import { StripeProvider } from '@/components/providers/StripeProvider'
import { Card } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { useToast } from '@/components/ui/use-toast'

export default function CheckoutPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { toast } = useToast()
  const [clientSecret, setClientSecret] = useState('')

  const { data: equipment, isLoading } = useQuery({
    queryKey: ['equipment', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('equipment')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      return data
    },
  })

  useEffect(() => {
    if (equipment) {
      createPaymentIntent(equipment.price, equipment.id)
        .then((data) => setClientSecret(data.clientSecret))
        .catch((error) => {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: error.message,
          })
        })
    }
  }, [equipment, toast])

  const handleSuccess = async () => {
    try {
      const { error } = await supabase.from('rentals').insert({
        equipment_id: equipment?.id,
        total_amount: equipment?.price,
        status: 'paid',
        start_date: new Date().toISOString(),
        end_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      })

      if (error) throw error

      toast({
        title: 'Success',
        description: 'Your rental has been confirmed',
      })
      navigate('/rentals')
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to create rental record',
      })
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!equipment) {
    return <div>Equipment not found</div>
  }

  return (
    <div className="container max-w-2xl py-10">
      <Card className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">{equipment.name}</h1>
          <p className="text-muted-foreground mb-4">{equipment.description}</p>
          <p className="text-xl font-semibold">
            Total: {formatCurrency(equipment.price)}
          </p>
        </div>

        {clientSecret && (
          <StripeProvider clientSecret={clientSecret}>
            <CheckoutForm
              amount={equipment.price}
              onSuccess={handleSuccess}
            />
          </StripeProvider>
        )}
      </Card>
    </div>
  )
}
