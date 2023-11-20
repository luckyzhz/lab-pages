import { fetchJson } from "./base.js";

const carousel = {
    data: function () {
        return {
            images: [],
            currentImage: 0,
            carouselInterval: {},
        }
    },
    props: {
        imagesUrl: String,
    },
    methods: {
        fetchImages: async function () {
            this.images = await fetchJson(this.imagesUrl);
        },
        goToImage: function (toImage) {
            this.currentImage = toImage % this.images.length;
            this.$refs.imagesBar.style.left = `${-100 * this.currentImage}%`;
            const indicators = this.$refs.control.children;
            for (const indicator of indicators) {
                indicator.classList.remove("active");
            }
            indicators[this.currentImage].classList.add("active");
        },
        toNextImage: function () {
            this.currentImage++;
            this.goToImage(this.currentImage);
        },
        toPreviousImage: function () {
            this.currentImage--;
            this.goToImage(this.currentImage);
        },
        startAutoPlay: function () {
            this.carouselInterval = setInterval(this.toNextImage, 5000);
        },
        stopAutoPlay: function () {
            clearInterval(this.carouselInterval);
        },
        toggleFullScreen: function (event) {
            if (event.currentTarget.classList.contains("open")) {
                event.currentTarget.classList.remove("open");
            } else {
                event.currentTarget.classList.add("open");
            }
        },
    },
    created: async function () {
        this.fetchImages();
        this.startAutoPlay();
    },
    template:
        `
        <div class="carousel-window" @click.stop="toggleFullScreen">
            <div class="images-bar" ref="imagesBar">
                <div class="image-box" v-for="image in images">
                    <img :src="image">
                </div>
            </div>
            <div class="control" ref="control">
                <div class="indicator" v-for="(image, index) in images" :data-index="index" :key=index
                    @click.stop="goToImage(index)"></div>
            </div>
        </div>
        `,
}

export { carousel };
