import { FC } from "react"

import { StyledAddToCartButton } from "./styled"

export const AddToCartButton: FC = () => (
  <StyledAddToCartButton
    data-test-id="button-add-to-cart"
    label="Add to cart"
    redirectToHostedCart
  />
)