<template>
  <div>
    <h3 class="pb-2 font-semibold text-gray-600 uppercase">
      {{ project.title }}
    </h3>
    <ul>
      <li v-for="article in project.articles">
        <a
          class="flex items-center py-1 space-x-1 text-sm font-normal text-gray-500 transform -translate-x-1 cursor-pointer"
          :href="article.href"
        >
            <span class="text-xs text-gray-400"><ArrowUpRight /></span>
          <span>
              {{ article.text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PressArticle',
  props: {
    project: Object
  }
}
</script>
