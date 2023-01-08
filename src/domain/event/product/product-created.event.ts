import EventInterface from '../@shared/event.interface'

export default class ProductCreatedEvent implements EventInterface {
  readonly dataTimeOccurred: Date
  readonly eventData: any

  constructor (eventData: any) {
    this.dataTimeOccurred = new Date()
    this.eventData = eventData
  }
}
