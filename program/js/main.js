import { fetchJson, fetchText } from "./components/base.js";
import { labMembers } from "./components/labMembers.js";
import { labResearches } from "./components/labResearches.js";



const router = new VueRouter();

const app = new Vue({
    el: "#app",
    components: {
        "lab-members": labMembers,
        "lab-researches": labResearches,
    },
    data: {
        memberCategories: [
            "Professor",
            "Postdoctoral",
            "Phd",
            "Master",
            "Undergraduate"
        ],
        researchUrl: `config/Research/Research.json`,
    },
    computed: {
        memberUrls: function () {
            const base = `config/Members/`;
            const result = {};
            for (const category of this.memberCategories) {
                result[category] = base + category + ".json";
            }
            return result;
        },
    },
    methods: {
    },
    router: router,
});


// Configure routes information, and add it to the router that had already been created.
const routes = [
    {
        path: "/member",
        component: labMembers,
        props: {
            memberUrls: app.memberUrls,
        },
    },
    {
        path: "/research",
        component: labResearches,
        props: {
            researchUrl: app.researchUrl,
        }
    },
];
router.addRoutes(routes);
