<template>
  <div :class="`accrodion ${inputState === true ? 'active' : ''}`">
    <div class="accrodion-title" @click="inputState = !inputState">
      <h4>{{ title }}</h4>
    </div>
    <div v-if="inputState">
      <div class="accrodion-content animated fadeInUp">
        <div class="inner">
          <p>{{ content }}</p>
        </div>
        <!-- /.inner -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputState: this.activeState,
    };
  },
  props: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    activeState: {
      type: Boolean,
    },
  },
};
</script>
