"use strict";
/*
  Isso é uma entidade anêmica, pois apenas armazena
  dados
*/
class Customer {
    constructor(id, name, address) {
        this._id = id;
        this._name = name;
        this._address = address;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
}
