let num = 0;
const output = document.querySelector("#dataOutput");

const cardFactory = {
    addClickEventListener() {
        const button = document.getElementById("create-btn");
        button.addEventListener("click", () => {
            const input = document.getElementById("textAreaID");
            const data = input.value;
            num++;
            output.innerHTML += `
            <article class="card" id="card--${num}">
                <div>${data}</div>
                <div>
                    <button id="delete--${num}">Delete This Card</button>
                </div>
            </article>
            `;
        })
    }
};

cardFactory.addClickEventListener();

// REMOVED FROM HTML SECTION ---> onClick="reply_click(this.id)"

const reply_click = (event) => {
    // console.log(event.target.id);
    const delCard = document.getElementById(`card--${event.target.id.split("--")[1]}`);
    output.removeChild(delCard);
}

output.addEventListener("click", reply_click);