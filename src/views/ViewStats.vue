<template>
	<div class="container">
		<div class="row">
			<div class="col mt-5">
				<table class="table table-bordered table-hover border-warning table-striped">
					<thead>
						<tr class="text-center">
							<th scope="col">Stat</th>
							<th scope="col">Value</th>
						</tr>
					</thead>
					<tbody class="text-center">
						<tr class="table-primary">
							<td>No of Notes</td>
							<td>{{ storeNotes.totalNotesCount }}</td>
						</tr>
						<tr class="table-primary">
							<td>No of Characters(all notes)</td>
							<td>{{ storeNotes.totalCharacterLength }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<input v-model="loveNotes" v-autofocus type="text" class="form-control" placeholder="Do you love Note App">
			</div>
		</div>
	</div>

</template>
<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const storeNotes = useStoreNotes()
const loveNotes = ref('')
useWatchCharacters(loveNotes, 50)

</script>
<style scoped>
</style>