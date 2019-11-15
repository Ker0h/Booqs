<template>
    <div id="books">
        <BookList />
        <BookDetail />
    </div>
</template>

<script>
import BookList from '@/components/books/BookList'
import BookDetail from '@/components/books/BookDetail'

export default {
  name: 'Books',
  components: {
    BookList,
    BookDetail
  }
}
</script>
