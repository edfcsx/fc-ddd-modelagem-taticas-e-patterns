import Address from './address'

export default class Customer {
  private _id: string
  private _name: string
  private _address!: Address
  private _active: boolean = true
  private _rewardPoints: number = 0

  constructor (id: string, name: string) {
    this._id = id
    this._name = name

    this.validate()
  }

  get id (): string {
    return this._id
  }

  get name (): string {
    return this._name
  }

  get rewardPoints (): number {
    return this._rewardPoints
  }

  changeName (name: string) {
    this._name = name
    this.validate()
  }

  validate () {
    if (this._name.length === 0) {
      throw new Error('Name is required')
    }

    if (this._id.length === 0) {
      throw new Error('Id is required')
    }
  }

  isActive (): boolean {
    return this._active
  }

  activate () {
    if (!this._address) {
      throw new Error('Address is mandatory to active a customer')
    }

    this._active = true
  }

  deactive () {
    this._active = false
  }

  // eslint-disable-next-line accessor-pairs
  set Address (address: Address) {
    this._address = address
  }

  addRewardPoints (points: number): void {
    this._rewardPoints += points
  }
}
