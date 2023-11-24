import { carousel } from "./carousel.js";

const labHome = {
    props: {
        carouselImagesUrl: String,
    },
    components: {
        carousel: carousel,
    },
    template:
        `
        <div class="lab-home">
            <h1>SELab</h1>
            <div class="lab-carousel">
                <carousel :images-url="carouselImagesUrl"></carousel>
            </div>
        </div>
        `
}

export { labHome };