import Order from '../entity/order'
import OrderItem from '../entity/order_item'
import OrderService from './order.service'

describe('Order service unit tests', () => {
  it('Should get total of all orders', () => {
    const item1 = new OrderItem('i1', 'item 1', 100, 1, 'p1')
    const item2 = new OrderItem('i1', 'item 1', 200, 2, 'p1')

    const order1 = new Order('o1', 'c1', [item1])
    const order2 = new Order('o1', 'c1', [item2])

    const total = OrderService.total([order1, order2])
    expect(total).toBe(500)
  })
})
