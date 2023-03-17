import { createApp } from 'vue'
import store from "./storage/index.js"
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Counter from "./views/Counter.vue"
import Home from "./components/Home.vue"
import NotFound from "./views/NotFound.vue"


/* import bootstrap css */
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

const router = createRouter ({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/counter",
        name: "Counter",
        component: Counter,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    }
]
})

createApp(App).use(router).use(store).mount('#app')
