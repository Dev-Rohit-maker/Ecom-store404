export interface Product {
  id: string
  category: string
  name: string
  price: number
  reviews: number
  returns: boolean
  quantity: number
  profit: number
}

export interface CartItem extends Product {
  quantity: number
}

