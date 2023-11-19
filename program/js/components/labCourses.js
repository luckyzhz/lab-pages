import { fetchMarkdown } from "./base.js";

const labCourses = {
    data: function () {
        return {
            courses: "",
        }
    },
    props: {
        coursesUrl: String,
    },
    methods: {
        fetchCourses: async function () {
            this.courses = await fetchMarkdown(this.coursesUrl);
        },
    },
    template:
        `
        <div class="lab-courses-box">
            <h1>Courses</h1>
            <div class="lab-courses" v-html="courses"></div>
        </div>
        `,
    created: async function () {
        this.fetchCourses();
    },
}

export { labCourses };