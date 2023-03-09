import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [{
                    id: 'id1',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
                },
                {
                    id: 'id2',
                    content: 'This is a shorter note!!',
                },
            ]
        }
    },
    actions: {
    	addNote (newNoteContent) {
    	let currentDate = new Date().getTime(),
			id = currentDate.toString()

		let note = {
			id,
			content: newNoteContent
		}
		this.notes.unshift(note)
    	},
    	deleteNote (noteId) {
    		this.notes = this.notes.filter(note => {return note.id !== noteId})
    	},
        updateNote (id, content) {
            console.log(id, content)
            let index = this.notes.findIndex(note => note.id === id)
            this.notes[index].content = content
        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(note => {return note.id === id})[0].content
            }
        },
        totalNotesCount: (state) => {
            return state.notes.length
        },
        totalCharacterLength: (state) => {
            let count = 0
            state.notes.forEach(note => {
                 count += note.content.length
            })
            return count
        }
    }
})