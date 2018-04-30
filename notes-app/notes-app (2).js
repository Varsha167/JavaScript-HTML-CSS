let notes = []



// const p = document.querySelector('p')
// console.log(p)


//adding a new element

// const newParagraph = document.createElement('p')
// newParagraph.textContent = "This is from JS fie"
// document.querySelector('body').appendChild(newParagraph)


const filters = {
    searchText:'' //by default empty value. This value will change over time.
}


const notesJSON = localStorage.getItem('notes') //this is going to read the data.We will get null back if there is no note

if (notesJSON!==null) {
   notes= JSON.parse(notesJSON)
}

const renderNotes = function(notes,filters){
    const filteredNotes = notes.filter(function(note){
      return  note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    //console.log(filteredNotes)
    document.querySelector('#notes').innerHTML='' //also working with textContent

    //document.querySelector('#notes').textContent = ''

    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        if(note.title.length > 0){
            noteEl.textContent = note.title
        } else
        noteEl.textContent = 'unnamed note'
        
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes,filters) //for the notes to appear on the screen the first time

//localStorage.setItem('location','Melbourne')

console.log(localStorage.getItem('location'))

document.querySelector('button').addEventListener('click', function(e){
//e.target.textContent = 'The button was clicked'
notes.push({
    title:'',
    text:''
})

localStorage.setItem('notes',JSON.stringify(notes))
renderNotes(notes,filters)
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

document.querySelector('#new-form').addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e.target.elements.firstName.value) //elements is special property for form dom elements. It allows us to accss all of the fields we set up.
    e.target.elements.firstName.value='' //remove the name from the form
})