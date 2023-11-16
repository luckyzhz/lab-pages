import { fetchJson, fetchText } from "./components/base.js";
import { labMembers } from "./components/labMembers.js";
import { labResearches } from "./components/labResearches.js";

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
    }
});

