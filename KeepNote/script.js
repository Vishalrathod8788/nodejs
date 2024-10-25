document.addEventListener("DOMContentLoaded", () => {
  const notesGrid = document.getElementById("notes-grid");
  const addNoteBtn = document.getElementById("addNoteBtn");

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function renderNotes() {
    notesGrid.innerHTML = "";
    notes.forEach((note) => {
      const noteElement = document.createElement("div");
      noteElement.classList.add(
        "bg-white",
        "rounded-lg",
        "shadow-md",
        "p-4",
        "transition-transform",
        "hover:scale-105"
      );

      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.value = note.title;
      titleInput.classList.add("w-full", "mb-2", "font-bold");
      titleInput.placeholder = "Title";
      titleInput.readOnly = !note.isEditing;
      titleInput.addEventListener("input", (e) => {
        note.title = e.target.value;
        saveNotes();
      });

      const contentTextarea = document.createElement("textarea");
      contentTextarea.value = note.content;
      contentTextarea.classList.add("w-full", "min-h-[100px]", "mb-2");
      contentTextarea.placeholder = "Take a note...";
      contentTextarea.readOnly = !note.isEditing;
      contentTextarea.addEventListener("input", (e) => {
        note.content = e.target.value;
        saveNotes();
      });

      const actionsDiv = document.createElement("div");
      actionsDiv.classList.add("flex", "justify-end", "space-x-2");

      const editSaveBtn = document.createElement("button");
      editSaveBtn.textContent = note.isEditing ? "Save" : "Edit";
      editSaveBtn.classList.add("bg-transparent", "border-none");
      editSaveBtn.addEventListener("click", () => {
        note.isEditing = !note.isEditing;
        renderNotes();
        saveNotes();
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("bg-transparent", "border-none");
      deleteBtn.addEventListener("click", () => {
        notes = notes.filter((n) => n.id !== note.id);
        renderNotes();
        saveNotes();
      });

      actionsDiv.appendChild(editSaveBtn);
      actionsDiv.appendChild(deleteBtn);

      noteElement.appendChild(titleInput);
      noteElement.appendChild(contentTextarea);
      noteElement.appendChild(actionsDiv);

      notesGrid.appendChild(noteElement);
    });
  }

  function addNewNote() {
    const newNote = {
      id: Date.now().toString(),
      title: "",
      content: "",
      isEditing: true,
    };
    notes.unshift(newNote);
    renderNotes();
    saveNotes();
  }

  addNoteBtn.addEventListener("click", addNewNote);

  renderNotes();
});
