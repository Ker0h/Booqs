<template>
  <div class="about">
    <b-row>
      <b-col cols="12" md="9">
        <h2>Booqs</h2>
        <p>
          This is Booqs. A webapplication to manage your online bookcase.
          Have a look at it's <a href="https://github.com/Ker0h/Booqs" target="_blank">GitHub page</a>.
          This webapplication was made for a schoolproject. It was developped with the VueJS framework and uses a NodeJS API to manage it's resources.
        </p>
      </b-col>

      <b-col cols="12" md="3">
        <b-card title="Yannick Willems" img-src="assets/face.png" img-alt="Face" img-top>
          <b-card-text>2128086</b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <h3>Entities</h3>
      </b-col>

      <b-col cols="12" md="6">
        <b-card title="Book">
          <b-card-text>
            <ul>
              <li>ISBN, <code>String</code></li>
              <li>AlternativeIdentifier, <code>String</code></li>
              <li>Title, <code>String</code></li>
              <li>Description, <code>String</code></li>
              <li>Author, <code>ObjectID</code></li>
              <li>Genre, <code>Genre</code></li>
              <li>PublishedDate, <code>Date</code></li>
              <li>Publisher, <code>ObjectID</code></li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>

      <b-col cols="12" md="6">
        <b-card title="Author">
          <b-card-text>
            <ul>
              <li>Name, <code>String</code></li>
              <li>Bio, <code>String</code></li>
              <li>DoB, <code>Date</code></li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>

      <b-col cols="12" md="6">
        <b-card title="Genre">
          <b-card-text>
            <ul>
              <li>Name, <code>String</code></li>
              <li>Description, <code>String</code></li>
              <li>Subgenre, <code>Genre</code></li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>

      <b-col cols="12" md="6">
        <b-card title="Publisher">
          <b-card-text>
            <ul>
              <li>Name, <code>String</code></li>
              <li>Location, <code>String</code></li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>

      <b-col cols="12" md="6">
        <b-card title="Collection">
          <b-card-text>
            <ul>
              <li>Title, <code>String</code></li>
              <li>User, <code>String</code></li>
              <li>Books, <code>Array</code></li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>

      <b-col cols="12" md="6">
        <b-card title="User">
          <b-card-text>
            <ul>
              <li>Username, <code>String</code></li>
              <li>Password, <code>String</code></li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <h3>Use Cases</h3>
      </b-col>

      <b-col cols=12>
        <b-card title="Use Cases Still have to be properly defined.">
          <b-card-text>Aside from Loging Use Cases will be CRUD-functions for all of the above Entities</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
  .card {
    margin: 10px;
  }
</style>
