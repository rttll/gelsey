<template>
  <Layout>
    <h1>video</h1>
    <div class="flex flex-col items-start flex-initial p-4 space-y-4 md:flex-row md:p-20 md:space-x-10">
      <div class="relative w-full space-y-4 md:w-4/6">
        <component
          v-bind:is="activePlayer"
          :video="activeVideo"
          class="overflow-hidden aspect-w-16 aspect-h-9 player-container">
          >
        </component>
        <div>{{activeVideo.title}}</div>
        <div>{{activeVideo.description}}</div>
      </div>
      <nav class="flex-grow-0 w-full md:w-2/6">
        <ul class="space-y-3">
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
          description: 'this is the description. areyount you glad??'
        },
        {
          title: 'vimeo video. watch it',
          url: 'https://vimeo.com/196345588',
          description: 'this is the description. areyount you glad??'
        },
        {
          title: 'Tips',
          url: 'https://www.youtube.com/watch?v=u9BoG1n1948',
          description: 'this is the description. areyount you glad??'
        },
        {
          title: 'frararar',
          url: 'https://vimeo.com/126060304',
          description: 'this is the description. areyount you glad??'
        },
        {
          title: 'another youtube',
          url: 'https://www.youtube.com/watch?v=4n6LrehCPOQ',
          description: 'this is the description. areyount you glad??'
        },
        
      ]
    }
  },
  methods: {
    setVideo(video) {
      console.log('set vid', video)
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