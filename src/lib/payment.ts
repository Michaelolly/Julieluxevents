export async function createPaymentIntent(amount: number, equipment_id: string) {
  const response = await fetch(
    'https://xytgzwjouuajxiufmmtm.supabase.co/functions/v1/create-payment-intent',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, equipment_id }),
    }
  )

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to create payment intent')
  }

  return response.json()
}
