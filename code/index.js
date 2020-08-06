try {
    import Block from "./block";
    globalThis.blocks = [];
    var createBlockButton = document.getElementById("createBlock");
    createBlockButton.addEventListener("click", () => {
        const newBlock = new Block(1);
        blocks.push(newBlock);
    });
} catch (error) {
    console.error(error);
}
