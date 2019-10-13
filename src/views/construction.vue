<template>
<div id="construction-wrapper">
    <p class="construction-text-shadow">Under<br/>Construction</p>
    <p class="construction-wood-text">Under<br/>Construction</p>
</div>
</template>

<script>
export default {
    name: "construction"
}
</script>

<style lang="less">
@import "../style/variables";


#construction-wrapper {
    text-align: center;
    background-image: url("../assets/wood.jpg");
    background-position-x: center;
    background-repeat: repeat-x;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
}

.text-format() {
    font-size: 2rem;
    @media (min-width: @tablet-wide) {
        font-size: 4rem;
    }
    @media (min-width: @desktop-wide) {
        font-size: 6rem;
    }

    font-family: "Arial Black", sans-serif;
    text-transform: uppercase;
    position: absolute;
    margin: 6rem auto;
    width: 100%;
}

.construction {
    &-wood-text {
        .text-format();
        background-image: url("../assets/wood-light.jpg");
        background-position: center;
        background-clip: text;
        color: transparent;
    }

    &-text-shadow {
        .text-format();
        text-shadow: -0.33rem -0.75rem rgba(0, 0, 0, 0.75);
        color: transparent;
    }
}

</style>