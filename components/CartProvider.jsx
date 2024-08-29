"use client"

import { CartProvider as CProvider } from "use-shopping-cart"


const CartProvider = ({ children }) => {
    return (
        <CProvider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
            successUrl="http://localhost:3000/stripe/success"
            cancelUrl="http://localhost:3000/stripe/error"
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