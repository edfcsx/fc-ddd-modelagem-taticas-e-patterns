import Address from './entity/address'
import Customer from './entity/customer'
import Order from './entity/order'
import OrderItem from './entity/order_item'

const customer = new Customer('123', 'edfcsx')
const address = new Address('Rua dois', '2A', '50800600', 'Recife')
customer.Address = address
customer.activate()

const item1 = new OrderItem('1', 'Item1', 10)
const item2 = new OrderItem('2', 'Item2', 15)
// eslint-disable-next-line
const order = new Order('1', '123', [item1, item2])
