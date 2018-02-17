

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }
    insert(data) {
        var node = new Node(data);
        if (this._length) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = this.head;
        }
        this._length++;

        return node;
    }

    size() {
        return this._length;
    }

    at(index) {
        var current = this.head,
            i = 0;
        if (this.size() == 0 || index < 0 || index > this.size()) {
            return null;
        }
        while (i < index) {
            current = current.next;
            i++;
        }
        return current.data;
    }

    findNode(data) {
        var current = this.head;
        while (current != null) {
            if (current.data == data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    toArray() {
        var arr = new Array(this.size()),
            i = 0,
            current = this.head;
        while (i < this.size()) {
            arr[i] = current.data;
            current = current.next;
            i++;
        }
        return arr;
    }

    removeAt(index) {
        var current = this.head,
            i = 0;
        if (this._length == 0 || index < 0 || index >= this._length)
            return null;
        if (this._length == 1) {
            this.head = null;
            this.tail = null;
        } else {

            if (index == 0) {
                this.head = this.head.next;
                this.head.prev = null;
            } else {
                if (index == this._length - 1) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else {
                    while (i < index) {
                        current = current.next;
                        i++;
                    }
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }
        }
        this._length--;
    }



    moveToFront(node) {
        var tmp=node.data;
        while(node!=this.head){
            node.data=node.prev.data;
            node=node.prev;
        }
        this.head.data=tmp;
    }

    reorganize(data) {
        var current = this.head;
        while (current != null) {
            if (current.data == data) {
                this.moveToFront(current);
                return true;
            }
            current = current.next;
        }
        return false;

    }
}

module.exports = {
    SelfOrganizedList,
    Node
};