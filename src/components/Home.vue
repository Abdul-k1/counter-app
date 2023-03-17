<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img
          src="../assets/software-engineer.gif"
          class="img-fluid"
          alt="Responsive image"
        />
      </div>
      <div class="col-md-6">
        <h5 class="h5">ALTSCHOOL AFRICA</h5>
        <h2 class="h2">Third and Final Semester Project</h2>
        <br />
        <h1 class="h1 fw-bold">Task</h1>
        <p class="text-justify">
          Create a new vue js application using the cli then setup a counter
          composable with increment, decrement, reset, setValue functions with a
          valid UI.
          <br />
          <br />

          You can use local state or vuex for state management albeit using vuex
          will attract higher marks. Make sure to house your functionality in a
          page with route - ‘/counter’ any other route should redirect the user
          to a 404 page handled by your wildcard route.
        </p>

        <h1 class="h1 fw-bold">Intuition</h1>
        <br />
        <p class="text-justify">
          This project was built using VueJS, VueX for State management and
          Bootstrap which is a free and open-source CSS framework directed at
          responsive, mobile-first front-end web development.
        </p>
        <br />

        <div class="text-center">
          <router-link to="/counter"
            ><button type="button" class="btn btn-primary">
              View Project
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myHello",
};
</script>

<style></style>
