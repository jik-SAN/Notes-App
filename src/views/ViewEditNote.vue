<template>
	<div class="container">
	<div class="row my-5">
	<AddEditNote
	ref="addEditNoteRef"
	v-model="noteContent"
	placeholder="Edit note here"
	label="Edit Note"
	bgColor="success">
	<template #buttons>
		<button @click="$router.back()"  class="btn btn-light border-dark float-right mx-3">Cancel</button>
		<button @click="handleSaveClicked" :disabled="!noteContent" class="btn btn-warning border-dark float-right">Save Note</button>
	</template>
</AddEditNote>
</div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import {useStoreNotes} from '@/stores/storeNotes'


const noteContent = ref('')
const route = useRoute()
const router = useRouter()
const storeNotes = useStoreNotes()

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => {
	storeNotes.updateNote(route.params.id, noteContent.value)
	router.push('/')
}
</script>