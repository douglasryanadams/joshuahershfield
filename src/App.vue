<template>
<div id="app">
    <router-view/>
</div>
</template>

<style lang="less">
@import "style/variables";

body {
    background-color: @bg-black;
    color: white;
}

#app {
    font-family: "Helvetica Neue", Arial, sans-serif;
}
</style>

<script>

export default {}
</script>
