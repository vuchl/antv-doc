<template>
  <v-tabs v-model="activeIndex" :tabBarExtraContent="tabBarExtraContent">
    <v-tab-pane tab="Tab 1" index="1">Content of Tab Pane 1</v-tab-pane>
    <v-tab-pane tab="Tab 2" index="2">Content of Tab Pane 2</v-tab-pane>
    <v-tab-pane tab="Tab 3" index="3">Content of Tab Pane 3</v-tab-pane>
  </v-tabs>
</template>
<script type="text/babel">
  export default {
    data() {
      // todo: 支持jsx
      var h = this.$createElement
      return {
        activeIndex: '1',
        tabBarExtraContent: h(
          'v-button',
          ['Extra Action']
        )
      }
    }
  }
</script>