import { fetchText } from "./base.js";
import { carousel } from "./carousel.js";

const labHome = {
    data: function () {
        return {
            introduction: "",
        }
    },
    props: {
        introductionUrl: String,
        carouselImagesUrl: String,
    },
    components: {
        carousel: carousel,
    },
    methods: {
        fetchIntroduction: async function () {
            this.introduction = await fetchText(this.introductionUrl);
        }
    },
    created: async function () {
        await this.fetchIntroduction();
    },
    template:
        `
        <div class="lab-home">
            <h1>SELab</h1>
            <h2>Introduction</h2>
            <div class="lab-introduction">
                {{ introduction }}
            </div>
            <h2>We work on</h2>
            <div class="lab-carousel">
                <carousel :images-url="carouselImagesUrl"></carousel>
            </div>
        </div>
        `
}

export { labHome };