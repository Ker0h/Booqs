<template>
  <div id="app">

      <!-- Navbar -->
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">Booqs</b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" />
        <b-collapse is-nav id="nav_collapse">

          <!-- Navigation -->
          <b-navbar-nav>
            <b-nav-item to="home">Home</b-nav-item>
            <b-nav-item to="about">About</b-nav-item>
            <b-nav-item to="books">Books</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

    <!-- Router View -->
    <b-container>
          <router-view/>
    </b-container>

  </div>
</template>

<style>
</style>
