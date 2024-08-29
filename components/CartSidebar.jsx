"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, } from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"
import { ScrollArea } from "./ui/scroll-area";
import CartItem from "./CartItem";
import CheckoutBtn from "./CheckoutBtn";


const CartSidebar = () => {
    const {
        cartCount,
        cartDetails,
        shouldDisplayCart,
        handleCartClick,
        totalPrice,

    } = useShoppingCart();

    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-left mb-12">
                        ショッピングカート({cartCount})
                    </SheetTitle>
                </SheetHeader>
                <>
                    {cartCount === 0 ? (
                        <div className="flex flex-col items-center justify-center w-full h-[760px]">
                            <h5 className="text-black/50">カートは空です</h5>
                        </div>
                    ) : (
                        <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4" >
                            {cartDetails && Object.entries(cartDetails).map(([key, item]) => {
                                return <CartItem item={item} key={key} />;
                            })}
                        </ScrollArea>
                    )}
                </>
                {cartCount > 0 && (
                    <div>
                        <div className="flex justify-between font-semibold">
                            <div className="uppercase mb-5">合計</div>
                            <div>¥{totalPrice}</div>
                        </div>
                        <CheckoutBtn />
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}

export default CartSidebar