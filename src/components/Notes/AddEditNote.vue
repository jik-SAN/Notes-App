<template>
	<div class="card mb-3"
    :class="`bg-${bgColor}`">
  <div v-if="label" class="card-header h4 text-white">
    {{ label }}
  </div>
  <div class="card-body">
    <textarea
    :value="modelValue"
    :placeholder="placeholder"
    maxlength="100"
    v-autofocus
    ref="textareaRef"
    @input="$emit('update:modelValue', $event.target.value)"
    class="mb-4 form-control"
    rows="5"
    placeholder="Add a new note" />
    <div class="d-flex align-items-end justify-content-end">
    <slot name="buttons"/>
    </div>
  </div>
</div>

</template>
<script setup>
import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'

const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
  bgColor: {
    type: String,
  default: 'dark'
  },
  placeholder: {
    type: String,
  default: 'Type something here ...'
  },
  label: {
    type: String
  }
})
const textareaRef = ref(null)
const emit = defineEmits(['update:modelValue'])

const focusTextarea = () => {
  textareaRef.value.focus()
}

defineExpose({
  focusTextarea
})

</script>