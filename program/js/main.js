import { router } from "./router.js";



// router can access app's properties through ` router.app`
const app = new Vue({
    el: "#app",
    components: {
        // Components has been registered in routers
        // "lab-members": labMembers,
    },
    data: {
    },
    computed: {
    },
    methods: {
    },
    router: router,
});
