<template>
  <div id="book-list">
    <b-row>
      <b-col cols="12">
        <div class="search">
          <font-awesome-icon icon="search" />
          <input type="text" placeholder="Search..." v-model="searchTerm" />
        </div>
      </b-col>
    </b-row>

    <b-row v-for="book in books" :key="book.isbn">
        <b-col cols="12">
            <BookItem :book="book"/>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
import BookItem from '@/components/books/BookItem'

export default {
  name: 'BookList',
  components: {
    BookItem
  },

  data () {
    return {
      books: [],
      searchTerm: ''
    }
  },

  computed: {
    filteredBooks () {
      return this.books.filter(book => {
        book.title.toLowerCase().match(this.searchTerm.toLowerCase())
      })
    }
  },
  mounted () {
    axios.get(`http://booqs-api.herokuapp.com/api/books`)
      .then(payload => {
        this.books = payload.data
      })
  }
}
</script>

<style>
    .search {
        padding: 10px;
    }
</style>
