import OrderItem from './order_item'

export default class Order {
  private _id: string
  private _customerId: string
  private _items: OrderItem[] = []

  constructor (id: string, customerId: string, items: OrderItem[]) {
    this._id = id
    this._customerId = customerId
    this._items = items

    this.validate()
  }

  get id (): string {
    return this._id
  }

  get customerId (): string {
    return this._customerId
  }

  get items (): OrderItem[] {
    return this._items
  }

  validate (): boolean {
    if (!this._id.length) {
      throw new Error('Id is required')
    }

    if (!this._customerId.length) {
      throw new Error('customerId is required')
    }

    if (!this._items.length) {
      throw new Error('Item qtd must be greater than 0')
    }

    if (this._items.some(item => item.quantity <= 0)) {
      throw new Error('Quantity must be greater than 0')
    }

    return true
  }

  total (): number {
    return this._items.reduce((acc, item) => acc + item.orderItemTotal(), 0)
  }
}
