<template>
  <div
    class="text-center mx-auto mt-5 rounded"
    style="
      height: 600px;
      max-width: 70%;
      background-color: floralwhite;
      border: 15px solid orange;
    "
  >
    <div class="cont_two">
      <div class="cont_three">
        <div class="cont_four mx-auto">
          <p class="cont_text">Counter Project</p>
        </div>
      </div>
      <div class="card mx-auto" style="height: 70%; background-color: #a1887f">
        <div class="card-body text-center">
          <p class="text_two">{{ $store.state.count }}</p>
          <button class="btn btn-success m-1" @click="$store.commit('increment')">
            Increment
          </button>
          <button class="btn btn-warning m-1" @click="$store.commit('decrement')">
            Decrement
          </button>
          <button class="btn btn-danger m-1" @click="$store.commit('reset')">Reset</button>
        </div>
        <router-link to="/"
          ><button class="btn btn-primary mb-4 mx-auto">
            HomePage
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "myCounter"
}
</script>

<style>
.cont_two {
  background-color: #9f581e;
  border: none;
  height: 550px;
  margin: 10px;
  display: top;
  justify-content: center;
  align-items: center;
}
.cont_three {
  height: 19%;
  width: 100%;
  background-color: #482102;
  display: flex;
  align-items: flex-start;
}
.cont_four {
  height: 90%;
  width: 45%;
  border: 1px solid rgb(248, 244, 241);
  justify-content: center;
}
.cont_text {
  font-size: 30px;
  font-weight: bold;
  margin-top: 12px;
}
.card {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-top: 30px;
  box-shadow: 0 0 35px -2px black;
}
.text_two {
  color: #fff;
  font-size: 130px;
}
</style>
