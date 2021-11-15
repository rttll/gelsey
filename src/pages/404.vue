<template>
  <Layout>
    <Container>

      <Heading :border="false" :smallDisplay="true">
        404
      </Heading>
      <Heading :display="true">
        page not found
      </Heading>
      <article class="pb-6 my-12">
        <g-link to="/">&larr; Return to homepage</g-link>
      </article>
    </Container>
  </Layout>
</template>


<script>
export default {
  name: '404',

};
</script>
