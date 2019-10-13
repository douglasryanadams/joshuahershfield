<template>
<div id="navbar-wrapper">
    <div id="mobile-menu-toggle" @click="toggleMobileMenu" ref="mobileMenuToggle">
        <svg id="mobile-menu" width="30" height="20">
            <line x1="0" x2="30" y1="2" y2="2" stroke="white" stroke-width="3"/>
            <line x1="0" x2="30" y1="8" y2="8" stroke="white" stroke-width="2"/>
            <line x1="0" x2="30" y1="14" y2="14" stroke="white" stroke-width="3"/>
        </svg>
    </div>
    <div id="popout-artist" class="nav-artist">
        <span>Joshua Daniel Hershfield</span>
    </div>
    <ul id="nav-ul"
        :class="{
            'nav-ul': true,
            'show-mobile-menu' : showMobileMenu,
            'hide-mobile-menu': !showMobileMenu
        }">
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
    name: "Navbar",
    data: function () {
        return {
            showMobileMenu: false
        }
    },
    methods: {
        toggleMobileMenu: function () {
            this.showMobileMenu = !this.showMobileMenu
        }
    }
}
</script>

<style scoped lang="less">
@import "../style/variables";


#navbar-wrapper {
    /*border: 1px solid red;*/
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 1.4rem;
    background-color: @bg-black;
}

#mobile-menu {

    &-toggle {
        position: absolute;
        left: 1rem;

        @media (min-width: @tablet-wide) {
            display: none;
        }
    }
}

.show-mobile-menu {
    display: list-item;
}

.hide-mobile-menu {
    display: none;
    @media (min-width: @tablet-wide) {
        display: list-item;
    }
}

#nav-ul {
    /*border: 1px solid greenyellow;*/
    padding-inline-start: 0;

    @media (min-width: @tablet-wide) {
        text-align: center;
    }

    li {
        display: list-item;
        padding: 1rem 0;
        text-transform: uppercase;

        @media (min-width: @tablet-wide) {
            display: inline;
            font-size: 0.8em;
            padding: 0 0.50rem;
        }

        @media (min-width: @desktop-wide) {
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
    letter-spacing: 0.25rem;
}

#nav-artist {
    display: none !important;
    font-size: 1.05rem !important;

    @media (min-width: @desktop-wide) {
        display: inline !important;
    }
}

#popout-artist {
    /*border: 1px solid yellow;*/
    text-align: right;
    padding-right: 1rem;
    font-size: 0.8rem;

    @media (min-width: @tablet-wide) {
        text-align: center;
        font-size: 1.2rem;
    }
    @media (min-width: @desktop-wide) {
        display: none;
    }
}

</style>