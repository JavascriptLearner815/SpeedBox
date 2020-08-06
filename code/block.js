export default class Block {
    constructor(id) {
        try {
            if (globalThis.blocks.length === 5) throw "Cannot exceed block limit";
            this.id = id;
            if (this.id === 1) this.type = "grass";
            console.log(`Created block of type ${this.type}`);
        } catch (error) {
            console.error(error);
        }
    }
}
