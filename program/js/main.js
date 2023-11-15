import { fetchJson, fetchText } from "./components/base.js";
import { labMembers } from "./components/labMembers.js";

const app = new Vue({
    el: "#app",
    components: {
        "lab-members": labMembers
    },
    data: {
        members: {}, // 如果要新增 key，应直接指向一个新的对象，以使 Vue 能正确追踪数据变化
        memberCategories: [
            "Professor",
            "Postdoctoral",
            "Phd",
            "Master",
            "Undergraduate"
        ],
    },
    created: async function () {
        this.fetchMembers();
    },
    methods: {
        fetchMembers: async function () {
            let url;
            let currentMembers;
            let result = {};
            for (const category of this.memberCategories) {
                url = `config/Members/${category}.json`;
                currentMembers = await fetchJson(url);
                result[category] = currentMembers;
            }
            this.members = result;
        },
    }
})

