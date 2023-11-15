import { labMember } from "./labMember.js";

const labMembers = {
    // `members` is an object;
    // `category` is an array which is ordered.
    props: {
        "members": Object,
        "categories": Array
    },
    components: {
        "lab-member": labMember,
    },
    template:
        `
        <div class="lab-members">
            <div v-for="category in categories" :class="category" :key="Math.random()">
                <h2>{{category}}</h2>
                <div>
                    <lab-member v-for="member in members[category]" :member="member" :key="Math.random()"></lab-member>
                </div>
            </div>
        </div>
        `
}

export { labMembers };