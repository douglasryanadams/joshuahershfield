<template>
<div id="app">
    <navbar></navbar>
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
import Navbar from "./components/navbar"

export default {
    components: {Navbar}
}
</script>