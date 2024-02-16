import { onMounted, onUnmounted } from 'vue'

export function intersectionObserver(elementRef, callback) {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => callback(entry))
    })

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }

    onUnmounted(() => {
      if (elementRef.value) {
        observer.unobserve(elementRef.value)
      }
    })
  })
}
