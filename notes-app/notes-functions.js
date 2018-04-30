//Read existing notes from localStorage

const getSavedNotes = function(){
    const notesJSON = localStorage.getItem('notes') //this is going to read the data.We will get null back if there is no note

    if (notesJSON!==null) {
    return JSON.parse(notesJSON)
 } else
 return []
}

const saveNotes = function(notes){
    localStorage.setItem('notes',JSON.stringify(notes))
}

const removeNote = function(id){
    const noteIndex = notes.findIndex(function(note){
        return note.id === id //0 if true,-1 if false
    })

    if(noteIndex > -1){
        notes.splice(noteIndex,1)
    }
}


//Generate DOM structure for a  note
const generateNoteDom = function(note){
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
    

    //setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click',function(){
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes,filters)
    })

    //setup the note title text
    if(note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'unnamed note'
    }

    textEl.setAttribute('href','/edit.html')
    //alink.textContent = 'Edit note'
   noteEl.appendChild(textEl)
   //noteEl.appendChild(alink)

    return noteEl
}

        

//Displaying notes on screen

const renderNotes = function(notes,filters){
    const filteredNotes = notes.filter(function(note){
      return  note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    //console.log(filteredNotes)
    document.querySelector('#notes').innerHTML='' //also working with textContent

    //document.querySelector('#notes').textContent = ''

    filteredNotes.forEach(function(note){
        const noteEl = generateNoteDom(note)
        
        document.querySelector('#notes').appendChild(noteEl)
    })
}
