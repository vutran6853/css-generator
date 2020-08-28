<template>
  <p>ID: {{ propertyInfoData.id }}</p>
</template>
<script>
export default defineComponent({
  props: {
    propertyInfoData: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    console.log({props})
    console.log('props', props.propertyInfoData)
    return {
      props
    }
  }
})
</script>