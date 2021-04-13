<template>
  <Layout>
    <h1>video</h1>
    <div class="flex items-start flex-initial p-4 space-x-4">
      <div class="relative w-4/6">
        <component
          v-bind:is="activePlayer"
          :video="activeVideo"
          class="overflow-hidden aspect-w-16 aspect-h-9">
          >
        </component>
      </div>
      <nav class="flex-grow-0 w-2/6">
        <ul class="space-y-2">
          <VideoListItem
            v-for="video in videos"
            :key="video.url"
            @clicked="() => { setVideo(video) } "
            :video="video" />
        </ul>
      </nav>
    </div>
  </Layout>
</template>

<script>
import VideoListItem from '~/components/VideoListItem.vue'
import YTPlayer from '~/components/YTPlayer.vue'
import VimeoPlayer from '~/components/VimeoPlayer.vue';
export default {
	components: { VimeoPlayer, YTPlayer, VideoListItem },
  name: 'Video',
  data() {
    return {
      activePlayer: null,
      activeVideo: null,
      videos: [
        {
          title: 'youtube video about this thing',
          url: 'https://www.youtube.com/watch?v=j77wUsGrvrA',
        },
        {
          title: 'vimeo video. watch it',
          url: 'https://vimeo.com/196345588',
        }
      ]
    }
  },
  methods: {
    setVideo(video) {
      const yt = video.url.includes('youtube')
      if (yt) {
        this.activePlayer = YTPlayer
      } else {
        this.activePlayer = VimeoPlayer
      }
      this.activeVideo = video
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setVideo(this.videos[0])
    })
  },
  created() {
    
  }
}
</script>

<style>

</style>