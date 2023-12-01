'use client'

import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useCart } from '@/hooks/use-cart'
import { Product } from '@/payload-types'

const AddToCartButton = ({
  product,
}: {
  product: Product
}) => {
  const { addItem } = useCart()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isSuccess])

  const handleAddToCart = () => {
    //Verify if the item is in the cart
    const isProductInCart = items.some((item) => item.product.id === product.id);

    if (!isProductInCart) {
      //If not, the item can be added. Also show a toast (I personally used Toast from Shadcn).
      addItem(product);
      setIsSuccess(true);
      toast({ variant: 'success', title: '¡Artículo añadido al carrito!' });
    } else {
      //If the item is already in the cart, then it won't be added. Also show a toast.
      toast({ variant: 'destructive', title: '¡Este artículo ya está en el carrito!' });
    }
  };

  return (
    <Button
      onClick={() => {
        addItem(product)
        setIsSuccess(true)
      }}
      size='lg'
      className='w-full'>
      {isSuccess ? 'Added!' : 'Add to cart'}
    </Button>
  )
}

export default AddToCartButton
