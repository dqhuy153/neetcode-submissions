class DynamicArray {
    _length;
    _capacity;
    data;

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this._capacity = capacity ?? 1;
        this._length = 0;
        this.data = {}
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.data[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        if(i < 0 || i > this._capacity - 1) throw new Error('Invalid index');

        this.data[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this._length >= this._capacity) {
            this.resize();
        }

        this.data[this._length] = n;
        this._length++;
        
        return this._length;
    }

    /**
     * @returns {number}
     */
    popback() {
        const lastItem = this.data[this._length - 1];
        
        delete this.data[this._length - 1];
        this._length--;

        return lastItem;
    }

    /**
     * @returns {void}
     */
    resize() {
        this._capacity *= 2;

        return this._capacity;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this._length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this._capacity
    }
}
