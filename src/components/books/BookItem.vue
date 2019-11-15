<template>
  <div class="book-item">
    <b-card :title="book.title">
      <b-card-text>{{book.author}}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'BookItem',
  props: ['book']
}
</script>
