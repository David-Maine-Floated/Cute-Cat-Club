class Example {
    constructor(ele) {
        this.ele = ele;
        this.ele.innerHTML = "<h1>it's Alive</h1>";
        this.handleClick = this.handleClick.bind(this)
        this.addEventListener("click", this.handleClick)
        debugger
    }

    handleClick() {
        this.ele.children[0].innterText = "Ouch!";
    }

}




export default Example;