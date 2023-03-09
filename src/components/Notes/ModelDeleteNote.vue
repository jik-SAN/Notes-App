<template>
  <div class="modal fade" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="close"></button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue'
import { Modal } from 'bootstrap'

const props = defineProps({
  modelValue: Boolean,
  title: String
})

const emit = defineEmits([
  'update:modelValue', 'modelValue'
])

const modalRef = ref(HTMLElement | null)
let modal = Modal
onMounted(() => {
  if (modalRef.value) {
    modal = new Modal(modalRef.value)
  }
})

watch(() => props.modelValue, (modelValue) => {
  if (modelValue) {
    modal.show()
  } else {
    modal.hide()
  }
})

function close() {
  emit('update:modelValue', false)
}
</script>