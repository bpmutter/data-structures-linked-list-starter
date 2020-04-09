// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value) {
        this.value = value,
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null,
        this.tail = null,
        this.length = 0

    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;    
        } else{
            const currentTail = this.tail;
            currentTail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(this.length === 0) return undefined;
        
        let oldTail;
        if(this.length === 1){
            oldTail = [...[this.tail]][0];
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = this.head;
            let beforeTail; 
            while(this.tail.next !== null){
                beforeTail = this.tail;
                this.tail = this.tail.next;
            }
            oldTail = [...[this.tail]][0]; 
            this.tail = beforeTail;
            this.tail.next = null;  
        }
        this.length--;
        return oldTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentHead = this.head;
            newNode.next = currentHead;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    // TODO: Implement the removeHead method here
    removeHead() {
        let oldHead;
        if(this.length === 0) return undefined;
        else if(this.head.next === null){ 
            oldHead = [...[this.head]][0];
            this.head = null;
            this.tail = null;
        } else{
            oldHead = [...[this.head]][0];
            this.head = this.head.next;
        }
        this.length--;
        return oldHead;

    }

    // TODO: Implement the contains method here
    contains(target) {
        let iterator = this.head;
        for(let i = 0; i<this.length; i++){
            if(iterator.value === target){
                return true;
            }
            iterator = iterator.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if(index > this.length) return null;
        let iterator = this.head;
        for (let i = 0; i <= index; i++) {
            if (i === index){
                return iterator;
            }
            iterator = iterator.next;
        }
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index >= this.length) return false;
        let newNode = new Node(val);
        let currentValue = this.head;
        for (let i = 0; i < this.length; i++) { 
            if (i === index) {
                currentValue.value = newNode.value;
                return true;
            }
            currentValue = currentValue.next;

        }
    }

    
    // TODO: Implement the insert method here
    insert(index, val) {
        if(index >= this.length || index<0) return false;
        if(index === 0) {
            this.addToHead(val)
            return true;
        }
        let newNode = new Node(val);
        let previousNode = this.head;
        let targetNode = this.head.next; 
        for(let i = 1; i <= index; i++){
            if(i === index){
                const before = previousNode;
                const after = targetNode;
                before.next = newNode;
                newNode.next = after;
                this.length++;
                return true;
            }
            previousNode = targetNode;
            targetNode = targetNode.next;            
        }

    
    }

    // TODO: Implement the remove method here
    remove(index) {
        if(index >= this.length || index<0) return undefined;
        if(index === 0){
           return this.removeHead();
        }
        if(index === this.length - 1){
            return this.removeTail();
        }
        let previousNode = this.head;
        let targetNode = this.head.next; 
        for(let i = 1; i <= index; i++){
            if(i === index){
                const before = previousNode;
                const after = targetNode.next;
                before.next = after;
                this.length--;
                return targetNode;
            }
            previousNode = targetNode;
            targetNode = targetNode.next;
        }
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}


exports.Node = Node;
exports.LinkedList = LinkedList;
