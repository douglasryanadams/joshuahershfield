<template>
<div id="navbar-wrapper">
    <!--
    home about news music  acting writing media live contact
    -->
    <div id="popout-artist" class="nav-artist">
        <p>Joshua Daniel Hershfield</p>
    </div>
    <ul id="nav-ul" class="nav-ul">
        <li class="nav-li">
            <router-link to="Home">Home</router-link>
        </li>
        <li class="nav-li">
            <router-link to="Music">Music</router-link>
        </li>
        <li class="nav-li">
            <router-link to="Acting">Acting</router-link>
        </li>
        <li class="nav-li">
            <router-link to="Writing">Writing</router-link>
        </li>
        <li id="nav-artist" class="nav-li nav-artist">Joshua Daniel Hershfield</li>
        <li class="nav-li">
            <router-link to="News">News</router-link>
        </li>
        <li class="nav-li">
            <router-link to="Media">Media</router-link>
        </li>
<!--        <li class="nav-li">-->
<!--            <router-link to="About">About</router-link>-->
<!--        </li>-->
        <li class="nav-li">
            <router-link to="Live">Live</router-link>
        </li>
        <li class="nav-li">
            <router-link to="Contact">Contact</router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped lang="less">
@import "../style/variables";

#navbar-wrapper {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /*border: 1px solid red;*/
    background-color: @bg-black;
}

#nav-ul {
    list-style: none;

    li {
        display: inline;
        padding: 0 0.25rem;
        font-size: 0.8em;
        text-transform: uppercase;

        @media (min-width: @tablet-wide){
            padding: 0 0.50rem;
        }

        @media (min-width: @desktop-wide){
            padding: 0 0.75rem;
        }
    }

    a {
        color: rgb(206, 206, 206);
        text-decoration: none;

        &:hover {
            color: rgb(246, 246, 246);
        }
    }
}

.nav-artist {
    color: rgb(228, 209, 189);
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 0.25rem;
}

#nav-artist {
    display: none !important;

    @media (min-width: @desktop-wide){
        display: inline !important;
    }
}

#popout-artist {
    @media (min-width: @desktop-wide){
        display: none;
    }
}

</style>