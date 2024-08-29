"use client"

import { CartProvider as CProvider } from "use-shopping-cart"


const CartProvider = ({ children }) => {
    return (
        <CProvider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
            successUrl="https://ecommerce-halstore.vercel.app/stripe/success"
            cancelUrl="https://ecommerce-halstore.vercel.app/stripe/error"
            language="ja-JP"
            currency="JPY"
            billingAddressCollection={true}
            shouldPersist={false}
        >
            {children}
        </CProvider>
    )
}

export default CartProvider