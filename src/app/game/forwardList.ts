export class ForwardList<T> {
    public head?: Node<T> = undefined
    constructor() {

    }

    push(value: T) {
        if (!this.head) {
            this.head = new Node(value, undefined);
        } else {
            let node = new Node(value, this.head);
            this.head = node;
        }
    }

    iterator(): Iterator<T> {
        return new Iterator(this);
    }

    toString(): string {
        let result = '[ ';

        const it = new Iterator(this);
        while(!it.isDone()) {
            result += it.next() + ', ';
        }

        return result + ']'
    }
}

export class Node<T> {
    constructor(public value?: T, public next?: Node<T>) { }
}

export class Iterator<T> {
    private previous?: Node<T> = undefined;
    private current?: Node<T> = undefined;

    constructor(private list: ForwardList<T>) { 
        this.current = list.head;
    }

    public isDone(): boolean {
        return this.current == undefined;
    }

    public peek(): T | undefined {
        if (this.isDone()) {
            throw "empty";
        }

        return this.current!.value;
    }
 
    public next(): T | undefined {
        if (this.isDone()) {
            throw "empty";
        }

        this.previous = this.current;
        this.current = this.current!.next;
        return this.previous!.value;
    }

    public splice(): T | undefined {
        if (this.isDone()) {
            throw "empty";
        }

        

        if (this.current === this.list.head) {
            let tmp = this.list.head!.value;
            this.list.head = this.current!.next;
            this.previous = this.current;
            this.current = this.current!.next;
            return tmp;
            
        } else {
            let tmp = this.current!.value;
            this.previous!.next = this.current!.next;
            this.current = this.current!.next;
            return tmp;
        }
    
   
        
    }
 }

   