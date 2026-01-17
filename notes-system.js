// ==================== NOTES SYSTEM ====================

let notesData = {
  notes: [],
  currentNote: null,
  tags: ['physics', 'chemistry', 'maths', 'tech', 'important', 'revision']
};

// Load notes from localStorage
function loadNotes() {
  const saved = localStorage.getItem('pcm_notes');
  if (saved) {
    notesData.notes = JSON.parse(saved);
  }
}

// Save notes to localStorage
function saveNotes() {
  localStorage.setItem('pcm_notes', JSON.stringify(notesData.notes));
}

// Create new note
function createNewNote() {
  const note = {
    id: Date.now(),
    title: 'Untitled Note',
    content: '',
    tags: [],
    subject: 'general',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  notesData.notes.unshift(note);
  notesData.currentNote = note;
  saveNotes();
  renderNotesPage();
  showNotification('📝 New note created', 'success');
}

// Edit note
function editNote(noteId) {
  const note = notesData.notes.find(n => n.id === noteId);
  if (note) {
    notesData.currentNote = note;
    renderNoteEditor(note);
  }
}

// Save current note
function saveCurrentNote() {
  if (!notesData.currentNote) return;
  
  const titleInput = document.getElementById('note-title');
  const contentInput = document.getElementById('note-content');
  const tagsInput = document.getElementById('note-tags');
  
  if (titleInput) notesData.currentNote.title = titleInput.value;
  if (contentInput) notesData.currentNote.content = contentInput.value;
  if (tagsInput) {
    const tags = tagsInput.value.split(',').map(t => t.trim()).filter(t => t);
    notesData.currentNote.tags = tags;
  }
  
  notesData.currentNote.updatedAt = new Date().toISOString();
  saveNotes();
  showNotification('💾 Note saved!', 'success');
}

// Delete note
function deleteNote(noteId) {
  if (!confirm('Delete this note?')) return;
  
  notesData.notes = notesData.notes.filter(n => n.id !== noteId);
  if (notesData.currentNote && notesData.currentNote.id === noteId) {
    notesData.currentNote = null;
  }
  saveNotes();
  renderNotesPage();
  showNotification('🗑️ Note deleted', 'info');
}

// Search notes
function searchNotes(query) {
  query = query.toLowerCase();
  return notesData.notes.filter(note => 
    note.title.toLowerCase().includes(query) ||
    note.content.toLowerCase().includes(query) ||
    note.tags.some(tag => tag.toLowerCase().includes(query))
  );
}

// Filter by tag
function filterByTag(tag) {
  return notesData.notes.filter(note => note.tags.includes(tag));
}

// Export note to text
function exportNote(noteId) {
  const note = notesData.notes.find(n => n.id === noteId);
  if (!note) return;
  
  const text = `${note.title}\n\n${note.content}\n\nTags: ${note.tags.join(', ')}\nCreated: ${new Date(note.createdAt).toLocaleString()}`;
  
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${note.title}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  
  showNotification('📥 Note exported!', 'success');
}

// Render notes page
function renderNotes() {
  loadNotes();
  
  return `
    <div class="notes-page">
      <div class="notes-header">
        <h1><i class="fas fa-sticky-note"></i> My Notes</h1>
        <button class="btn-primary" onclick="createNewNote()">
          <i class="fas fa-plus"></i> New Note
        </button>
      </div>

      <div class="notes-container">
        <!-- Sidebar with notes list -->
        <div class="notes-sidebar">
          <div class="notes-search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search notes..." onkeyup="handleNotesSearch(event)">
          </div>

          <div class="notes-tags">
            <h3>📌 Tags</h3>
            <div class="tags-list">
              ${notesData.tags.map(tag => `
                <button class="tag-btn" onclick="filterNotesByTag('${tag}')">
                  ${tag}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="notes-list">
            ${notesData.notes.length === 0 ? `
              <div class="empty-state">
                <i class="fas fa-sticky-note"></i>
                <p>No notes yet</p>
                <p class="small">Create your first note!</p>
              </div>
            ` : notesData.notes.map(note => `
              <div class="note-item ${notesData.currentNote && notesData.currentNote.id === note.id ? 'active' : ''}" 
                   onclick="editNote(${note.id})">
                <h3>${note.title}</h3>
                <p class="note-preview">${note.content.substring(0, 100)}${note.content.length > 100 ? '...' : ''}</p>
                <div class="note-meta">
                  <span class="note-date">${new Date(note.updatedAt).toLocaleDateString()}</span>
                  ${note.tags.length > 0 ? `
                    <div class="note-tags-mini">
                      ${note.tags.slice(0, 2).map(tag => `<span class="tag-mini">${tag}</span>`).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Note editor -->
        <div class="notes-editor">
          ${notesData.currentNote ? renderNoteEditor(notesData.currentNote) : `
            <div class="empty-editor">
              <i class="fas fa-edit"></i>
              <h2>Select a note to edit</h2>
              <p>Or create a new note to get started</p>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

// Render note editor
function renderNoteEditor(note) {
  return `
    <div class="editor-container">
      <div class="editor-toolbar">
        <button class="btn-small" onclick="saveCurrentNote()">
          <i class="fas fa-save"></i> Save
        </button>
        <button class="btn-small" onclick="exportNote(${note.id})">
          <i class="fas fa-download"></i> Export
        </button>
        <button class="btn-small" onclick="deleteNote(${note.id})">
          <i class="fas fa-trash"></i> Delete
        </button>
      </div>

      <div class="editor-content">
        <input type="text" id="note-title" class="note-title-input" 
               value="${note.title}" placeholder="Note title..."
               onchange="saveCurrentNote()">

        <textarea id="note-content" class="note-content-input" 
                  placeholder="Start writing your notes..."
                  onchange="saveCurrentNote()">${note.content}</textarea>

        <div class="editor-footer">
          <div class="tags-input-container">
            <label>Tags (comma separated):</label>
            <input type="text" id="note-tags" class="tags-input" 
                   value="${note.tags.join(', ')}" 
                   placeholder="physics, important, revision..."
                   onchange="saveCurrentNote()">
          </div>

          <div class="note-info">
            <span>Created: ${new Date(note.createdAt).toLocaleString()}</span>
            <span>Updated: ${new Date(note.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Handle notes search
function handleNotesSearch(event) {
  const query = event.target.value;
  if (query.length < 2) {
    renderNotesPage();
    return;
  }
  
  const results = searchNotes(query);
  // Update notes list with results
  showNotification(`Found ${results.length} notes`, 'info');
}

// Filter notes by tag
function filterNotesByTag(tag) {
  const filtered = filterByTag(tag);
  showNotification(`Showing ${filtered.length} notes with tag: ${tag}`, 'info');
  // Update display with filtered notes
}

// Auto-save functionality
let autoSaveTimeout = null;
function setupAutoSave() {
  const contentInput = document.getElementById('note-content');
  const titleInput = document.getElementById('note-title');
  
  if (contentInput) {
    contentInput.addEventListener('input', () => {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = setTimeout(() => {
        saveCurrentNote();
      }, 2000); // Auto-save after 2 seconds of no typing
    });
  }
  
  if (titleInput) {
    titleInput.addEventListener('input', () => {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = setTimeout(() => {
        saveCurrentNote();
      }, 2000);
    });
  }
}

// Initialize notes
loadNotes();
console.log('✅ Notes system loaded');
