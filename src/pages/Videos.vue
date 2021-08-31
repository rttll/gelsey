<template>
  <Layout :wide="true">
    <section>
      <Heading :display="true">Videos </Heading>
      <div
        class="flex flex-col items-start flex-initial w-full p-4 space-y-4 video-md:space-y-0 video-md:flex-row video-md:pt-20 video-md:space-x-10"
      >
        <div class="relative w-full space-y-4 video-md:w-4/6">
          <div id="player-container" class="w-full overflow-hidden bg-gwwwray-800 video-md:aspect-w-16 video-md:aspect-h-9">
            <transition name="fade" mode="out-in">
              <component
                v-bind:is="activePlayer"
                :video="activeVideo"
                :autoplay="autoplay"
                class="overflow-hidden video-md:aspect-w-16 video-md:aspect-h-9"
              >
                >
              </component>
            </transition>
          </div>
          <div v-if="activeVideo">
            <h1 class="pb-4 text-2xl">{{ activeVideo.title }}</h1>
            <BlockContent v-if="activeVideo._rawDescription" :blocks="activeVideo._rawDescription" />
          </div>
        </div>
        <nav class="flex-grow-0 w-full video-md:w-2/6">
          <ul class="space-y-3">
            <VideoListItem
              v-for="video in videos"
              :key="video.url"
              @clicked="
                () => {
                  thumbnailWasClicked(video)
                }
              "
              :video="video"
            />
          </ul>
        </nav>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    videos: allSanityVideo(sort: [{order: ASC}]) {
      edges {
        node {
          id
          title
          url
          order
          _rawDescription(resolveReferences: {maxDepth: 5})
        }
      }
    } 
  }
</page-query>

<script>
import VideoListItem from '~/components/VideoListItem.vue';
import YTPlayer from '~/components/YTPlayer.vue';
import VimeoPlayer from '~/components/VimeoPlayer.vue';
export default {
  components: { VimeoPlayer, YTPlayer, VideoListItem },
  name: 'Videos',
  data() {
    return {
      activePlayer: null,
      activeVideo: null,
      videos: [],
      autoplay: false,
    };
  },
  methods: {
    thumbnailWasClicked(video) {
      this.autoplay = true
      this.setVideo(video);
    },
    setVideo(video) {
      const yt = video.url.includes('youtube');
      if (yt) {
        this.activePlayer = YTPlayer;
      } else {
        this.activePlayer = VimeoPlayer;
      }
      this.activeVideo = video;
    },
  },
  mounted() {
    this.videos = this.$page.videos.edges
      .map((obj) => obj.node)
      .sort((a, b) => a.order - b.order) // Can't get query to sort correctly above, so just sort here.
    this.$nextTick(() => {
      this.setVideo(this.videos[0]);
    });
  },
  created() {
    this.autoplay = false
  },
};
</script>

<style>
  .fade-enter-active {
    transition: all 0.4s;
  }
  .fade-enter {
    opacity: 0;
    /* margin-left: 90px; */
  }
  .fade-leave-active {
    transition: all 0.4s;
    opacity: 0;
    /* margin-left: -100px; */
  }
</style>
