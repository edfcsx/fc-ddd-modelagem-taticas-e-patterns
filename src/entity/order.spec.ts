import Order from './order'
import OrderItem from './orderItem'

describe('Order unit test', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new Order('', '', [])
    }).toThrowError('Id is required')
  })

  it('should throw error when customerId is empty', () => {
    expect(() => {
      new Order('1', '', [])
    }).toThrowError('customerId is required')
  })

  it('should throw error when order items is empty', () => {
    expect(() => {
      new Order('1', '1', [])
    }).toThrowError('Item qtd must be greater than 0')
  })

  it('should calculate total', () => {
    const item = new OrderItem('1', 'item a', 12)
    const item2 = new OrderItem('2', 'item b', 25.69)
    const order = new Order('1', 'any_order', [item, item2])
    const total = order.total()

    expect(total).toBe(37.69)
  })
})
