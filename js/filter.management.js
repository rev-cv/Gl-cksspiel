

const addedFilters = document.querySelector("#added-filters")
const btnClearFilter = addedFilters.querySelector("#clear-filters")

function deleteFilter(filter) {
    const name = filter.getAttribute("name")
    console.log(name)
    const checkbox = document.querySelector(`input[name="${name}"]`)
    checkbox.checked = false;
    filter.remove()
}


addedFilters.querySelectorAll(".filter > button").forEach( filter => {
    filter.addEventListener("click", e => deleteFilter (e.currentTarget.parentNode))
})

addedFilters.querySelector("#clear-filters").addEventListener("click", e => {
    addedFilters.querySelectorAll(".filter").forEach( filter => deleteFilter(filter))
}) 


document.querySelectorAll('form > input[type="checkbox"]').forEach( filter => {
    filter.addEventListener("change", e => {

        addedFilters.querySelectorAll(".filter").forEach( filter => {
            if (filter.getAttribute("name") === e.currentTarget.name)
                filter.remove()
        })

        if (e.currentTarget.checked) {
            // добавление фильтра

            btnClearFilter.insertAdjacentHTML('beforebegin', `
            <div class="filter" name="${e.currentTarget.name}">
                <span>${e.currentTarget.name}</span>
                <button><svg><use xlink:href="#ico-delete"/></svg></button>
            </div>
            `)

            addedFilters.querySelectorAll(".filter > button").forEach( filter => {
                filter.addEventListener("click", e => deleteFilter (e.currentTarget.parentNode))
            })
        }
    })
})
