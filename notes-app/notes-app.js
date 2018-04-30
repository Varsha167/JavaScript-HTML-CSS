const notes = getSavedNotes()



// const p = document.querySelector('p')
// console.log(p)


//adding a new element

// const newParagraph = document.createElement('p')
// newParagraph.textContent = "This is from JS fie"
// document.querySelector('body').appendChild(newParagraph)


const filters = {
    searchText:'' //by default empty value. This value will change over time.
}


renderNotes(notes,filters) //for the notes to appear on the screen the first time



document.querySelector('button').addEventListener('click', function(e){

const id = uuidv4()
notes.push({
    id: id,
    title:'',
    body:''
})

saveNotes(notes)
renderNotes(notes,filters)
location.assign('/edit.html')
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value) 
 })



// const notes = getSavedNotes()

// const filters = {
//     searchText: ''
// }

// renderNotes(notes, filters)

// document.querySelector('#create-note').addEventListener('click', function (e) {
//     const id = uuidv4()

//     notes.push({
//         id: id,
//         title: '',
//         body: ''
//     })
//     saveNotes(notes)
//     location.assign(`/edit.html#${id}`)
// })

// document.querySelector('#search-text').addEventListener('input', function (e) {
//     filters.searchText = e.target.value
//     renderNotes(notes, filters)
// })

// document.querySelector('#filter-by').addEventListener('change', function (e) {
//     console.log(e.target.value)
// })