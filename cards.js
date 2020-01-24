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
                    <button id="delete--${num}" onClick="reply_click(this.id)">Delete This Card</button>
                </div>
            </article>
            `;
        })
    }
};

cardFactory.addClickEventListener();

const reply_click = (clicked_id) => {
    // console.log(clicked_id.split("--")[1]);
    const delCard = document.getElementById(`card--${clicked_id.split("--")[1]}`);
    output.removeChild(delCard);
}