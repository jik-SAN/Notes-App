<template>
	<div class="container">
	<div class="row">
		<div class="col">
			<div class="card border-warning mb-3">
  <div class="card-body text-dark">
    <p class="card-text">{{ note.content }}</p>
  </div>
  <div class="d-flex align-items-end justify-content-end">
  	<small class="p-3 text-muted">
  		{{ characterLength }}
  	</small>
  </div>
  <div class="row">
  	<div class="col text-center">
  		<div class="card-footer bg-transparent border-success">
  			<RouterLink :to="`/editNote/${note.id}`" class="btn btn-outline-success w-100">Edit</RouterLink>
  		</div>

  	</div>
  	<div class="col text-center">
  		<div class="card-footer bg-transparent border-success">
  			<a href="#" class="btn btn-outline-danger w-100" @click="showModal">Delete</a>
  		</div>

  	</div>
  		<ModelDeleteNote v-model="modelVisible" title="Delete Note?" :noteId="note.id">
  			<div class="row">
  				<div class="col-20 mb-2">
  					<p class="h6">Are you sure you want to delete this note?</p>
  				</div>
  			</div>
  	<div class="row">
  			<div class="col-7 mx-3">
  		<div class="border-success">
  			<button @click="hideModal" class="btn btn-success">Cancel</button>
 		</div>
  	</div>
  			<div class="col-2 ">
  		<div class="border-success">
  			<button class="btn btn-danger" data-bs-dismiss="modal" @click="handleDelete(note.id)">Delete</button>
  		</div>
  	</div>
  </div>
  		</ModelDeleteNote>
  </div>
</div>
		</div>
	</div>
</div>
</template>

<script setup>
import { computed, reactive, ref, onMounted, onUnmounted } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import ModelDeleteNote from '@/components/Notes/ModelDeleteNote.vue'
import { useRouter } from 'vue-router'

const storeNotes = useStoreNotes()

	const props = defineProps({
		note: {
			type: Object,
			required: true,
		}
	})

	const characterLength = computed(() => {
		let length = props.note.content.length
		let description = length > 1 ? 'characters'
			: 'character'
		return `${length} ${description}`
	})

const modelVisible = ref(false)

function showModal() {
  modelVisible.value = true
}
function hideModal() {
  modelVisible.value = false
}

const handleKeyboard = e => {
	if(e.key === 'Escape') hideModal()
}
onMounted(() => {
	document.addEventListener('keyup', handleKeyboard)
} )
onUnmounted(() => {
	document.removeEventListener('keyup', handleKeyboard)
} )

const handleDelete = (id) => {
	storeNotes.deleteNote(id)
	modelVisible.value = false
}

</script>




