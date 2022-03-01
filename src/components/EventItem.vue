<template>
  <article>
    <header>
      <h3
        class="pb-2 mb-6 text-lg font-semibold text-gray-600 uppercase border-b border-gray-200"
      >
        {{ event.title }}
      </h3>
    </header>
    <div
      class="flex flex-col space-y-8 md:space-y-0 md:space-x-10 md:flex-row pb-9"
    >
      <div class="space-y-4 md:w-1/3">
        <div class="flex items-start justify-between space-x-1">
          <p>{{ event.date_display }}</p>
          <span
            v-if="event.ongoing"
            class="inline-block px-3 text-xs text-white bg-gray-700 rounded-full"
            style="padding-top: 2px; padding-bottom: 2px"
          >
            Ongoing
          </span>
        </div>

        <div class="space-y-1" v-if="event.address">
          <h4 class="font-semibold">
            {{ event.address.name }}
          </h4>
          <BlockContent
            v-if="event.address._rawAddress"
            class="text-xs"
            :blocks="event.address._rawAddress"
          />
          <a
            :href="event.address.link"
            v-if="event.address.link"
            class="block text-sm text-gray-400 truncate"
          >
            {{ event.address.link }}
          </a>
        </div>
      </div>
      <div class="leading-loose md:w-2/3" v-if="event._rawDescription">
        <BlockContent :blocks="event._rawDescription" />
        <div v-if="event.link" class="flex justify-end w-full pt-4">
          <a
            :href="event.link"
            class="inline-flex items-center space-x-1 font-medium"
          >
            <p class="whitespace-nowrap">Visit site</p>
            <span class="text-lg transform -translate-x-1">
              <ArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'EventItem',
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>
