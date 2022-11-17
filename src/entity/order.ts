import OrderItem from './orderItem'

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

    return true
  }

  total (): number {
    return this._items.reduce((acc, item) => acc + item.price, 0)
  }
}
