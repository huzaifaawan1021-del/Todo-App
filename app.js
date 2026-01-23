
        const input = document.querySelector('#input')
        const btn = document.querySelector('#btn')
        const list = document.querySelector('#list')

        function task() {
            if (input.value.trim() === "") {
                alert("please enter the task!")
                return
            }
            let Li = document.createElement("li")
            Li.innerHTML = `<span id='f'>${input.value} </span>   <span class="todobtn"><button onclick="edit(this)" >Edit</button> <button onclick="del(this)">Delete</button></span>`
            list.appendChild(Li)
            input.value = ""
        }

        btn.addEventListener("click", task)

        input.addEventListener("keydown", function (ent) {
            if (ent.key === "Enter") {
                task()
            }
        })

        function del(d) {
            d.parentElement.parentElement.remove()
        }
        function edit(a) {
            let old = a.parentElement.parentElement.firstChild.innerHTML
            let newTExt = prompt("Edit the Todo", old)
            if (newTExt !== "" && newTExt !== null) {
                a.parentElement.parentElement.firstChild.innerText = newTExt
            }
        }


