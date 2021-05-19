<template>
  <Layout>
    <section>
      <Heading>Videos </Heading>
      <div
        class="flex flex-col items-start flex-initial p-4 space-y-4 video-md:space-y-0 video-md:flex-row video-md:pt-20 video-md:space-x-10"
      >
        <div class="relative w-full space-y-4 video-md:w-4/6">
          <div class="overflow-hidden bg-gray-800 aspect-w-16 aspect-h-9">
            <transition name="fade" mode="out-in">
              <component
                v-bind:is="activePlayer"
                :video="activeVideo"
                class="overflow-hidden bg-gray-800 aspect-w-16 aspect-h-9"
              >
                >
              </component>
            </transition>
          </div>
          <div v-if="activeVideo">
            <h1 class="text-2xl">{{ activeVideo.title }}</h1>
            <BlockContent :blocks="activeVideo._rawDescription" />
          </div>
        </div>
        <nav class="flex-grow-0 w-full video-md:w-2/6">
          <ul class="space-y-3">
            <VideoListItem
              v-for="video in videos"
              :key="video.url"
              @clicked="
                () => {
                  setVideo(video);
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
    };
  },
  methods: {
    setVideo(video) {
      // console.log('set vid', video);
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
    this.videos = this.$page.videos.edges.map((obj) => obj.node);
    this.$nextTick(() => {
      this.setVideo(this.videos[0]);
    });
  },
  created() {},
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
