import { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { formatCurrency } from '@/lib/utils'

interface CheckoutFormProps {
  amount: number
  onSuccess: () => void
}

export function CheckoutForm({ amount, onSuccess }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
        redirect: 'if_required',
      })

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Payment failed',
          description: error.message || 'An error occurred during payment',
        })
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        toast({
          title: 'Payment successful',
          description: 'Your rental has been confirmed',
        })
        onSuccess()
      }
    } catch (err) {
      console.error('Payment error:', err)
      toast({
        variant: 'destructive',
        title: 'Payment failed',
        description: 'An unexpected error occurred',
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button
        type="submit"
        disabled={isProcessing || !stripe || !elements}
        className="w-full"
      >
        {isProcessing ? 'Processing...' : `Pay ${formatCurrency(amount)}`}
      </Button>
    </form>
  )
}
