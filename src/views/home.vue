<template>
<div>
  <div id="jdh-heading">
    JOSHUA DANIEL HERSHFIELD
  </div>
  <div id="dragonfly-wrapper">
    <img 
      id="dragonfly-img"
      src="../assets/dragonfly_white.png" 
      alt="Hand drawn dragonfly outline">
  </div>
  <div class="social-wrapper">
    
    <div 
      v-for="social in socialIcons" 
      v-bind:key="`social-${social.name}`"
      class="social-icon">
      <a v-bind:href="social.link" target="_blank">
        <img
          v-bind:id="`social-icon-${social.name}`" 
          v-bind:src="social.imgSrc"
          v-bind:alt="`Clickable icon for social media platform: ${social.name}`"
          class="social-icon-img">
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data: function() {
    return {
      socialIcons: [
        {
          link: "https://www.instagram.com/joshuadanielhershfield/",
          name: "instagram",
          imgSrc: require("../assets/social/instagram-icon.png")
        },
        {
          link: "https://www.facebook.com/joshuahershfield/",
          name: "facebook",
          imgSrc: require("../assets/social/facebook-icon.png")
        },
        {
          link: "https://www.imdb.com/name/nm3943984/",
          name: "imdb",
          imgSrc: require("../assets/social/imdb-icon.png")
        },
        {
          link: "https://twitter.com/jdhershfield",
          name: "twitter",
          imgSrc: require("../assets/social/twitter-icon.png")
        },
        {
          link: "https://www.youtube.com/channel/UCiDPx2oCJzTqq7UrBhtE3ug",
          name: "youtube",
          imgSrc: require("../assets/social/youtube-icon.png")
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import "../style/variables";

#jdh-heading {
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: .5rem;
  text-align: center;
  width: 100%;
}

#dragonfly {
  &-wrapper {
    text-align:center;
    width: 100%;
  }

  &-img {
    width: 150px;
  }
}

.social {
  &-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    margin-bottom: 10px;
  }

  &-icon {
    flex: none;
    margin: 0.5rem;
  }

  &-icon-img {
    height: 18px;
  }
}
</style>
