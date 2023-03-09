<template>
<div class="container">
	<div class="row">
		<div class="col">
	<div class="align-items-center my-2">
        <p class="h3 fw-bold text-center">
            Notes
        </p>
      </div>
		</div>
	</div>
<AddEditNote
	v-model="newNote"
	ref="addEditNoteRef"
	placeholder="Add a new note">
	<template #buttons>
		<button :disabled="!newNote" @click.prevent="addNote" class="btn btn-success float-right">Add Note</button>
	</template>
</AddEditNote>
</div>
<Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
</template>

<script setup>

import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const newNote = ref('')
const addEditNoteRef = ref(null)
const storeNotes = useStoreNotes()


const addNote = () => {
	storeNotes.addNote(newNote.value)
		newNote.value = ''
		addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote)

</script>