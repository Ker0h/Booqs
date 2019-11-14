<template>
    <div id="book-detail">
        <b-card :title="book.title">
            <b-card-text>
                <p>{{book.description}}</p>
                <ul>
                    <li><b>Genre</b>: {{book.genre}}</li>
                </ul>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "BookDetail"
}
</script>

