let allNotes = document.querySelector('#list-all');
let list = new List();
let clickCount = 0
let textarea = document.querySelector('#stupidnote')


showNotes = () => {
  let i = list.showNotes().length;
  allNotes.innerHTML += `<a href=#${i}>` + list.newestNote() + "</a> <br>";
}



document.getElementById('submit-button').addEventListener("click", () => {
  list.createNote(document.getElementById('stupidnote').value)
  textarea.value = '';
  showNotes()

})
