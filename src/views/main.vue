<template>

<!--
Background image
Covered with Dragonfly logo (white)
Dark background

// Favicon of dragonfly
// Black and White

// "Music" - play music and links to bandcamp
// -- Also Song Collaborations
// -- Also Music for Theater

// Hide the real site at a manually typed domain
// Google Analytics

-->
<div>
    <navbar></navbar>
    <div id="home-body">
        <p id="home-title">Shine</p>
        <div id="home-listen">
            <p>Listen</p>
        </div>
        <div id="home-bandcamp">
            <p>Buy on Bandcamp</p>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from "../components/navbar";

export default {
    name: 'Main',
    components: {Navbar}
}
</script>

<style scoped lang="less">
@import "../style/variables";

#home {
    &-body {
        /*border: 1px solid greenyellow;*/
        text-align: center;
        margin: 10rem auto;

        @media (min-width: @tablet-wide) {
            margin: 15rem auto;
        }
        @media (min-width: @desktop-wide) {
            margin: 20rem auto;
        }
    }

    &-title {
        font-size: 2rem;
        text-transform: uppercase;
        @media (min-width: @tablet-wide) {
            font-size: 4rem;
        }
    }

    &-listen {
        @p: 2rem;
        text-transform: uppercase;
        display: inline-block;
        padding-right: @p;
        padding-left: @p;
        border: 2px solid rgba(235, 235, 235, 0.8);
    }

    &-bandcamp {
        padding-top: 2rem;
    }
}
</style>
