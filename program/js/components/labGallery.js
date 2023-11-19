import { fetchJson } from "./base.js";
import { labAlbum } from "./labAlbum.js"

const labGallery = {
    data: function () {
        return {
            gallery: [],
            albumsPerPage: 8,
            currentPage: 1,
        }
    },
    props: {
        galleryUrl: String,
    },
    components: {
        "lab-album": labAlbum,
    },
    computed: {
        pages: function () {
            return Math.ceil(
                this.gallery.length / this.albumsPerPage
            );
        },
        currentAlbums: function () {
            let firstAlbum =
                (this.currentPage - 1) * this.albumsPerPage;
            let lastAlbum = firstAlbum + this.albumsPerPage - 1;
            if (lastAlbum > this.gallery.length - 1) {
                lastAlbum = this.gallery.length - 1;
            }
            let result = this.gallery.slice(firstAlbum, lastAlbum + 1);
            return result;
        },
    },
    methods: {
        fetchGallery: async function () {
            this.gallery = await fetchJson(this.galleryUrl);
        },
        toPage: function (event) {
            // the type of value from input box is always string
            const pageValue = Number(event.target.value);
            let remainder = pageValue % this.pages;
            if (remainder === 0) {
                remainder = this.pages;
            }
            this.currentPage = remainder;
        },
    },
    created: async function () {
        this.fetchGallery();
    },
    template:
        `
        <div class="lab-gallery">
            <h1>Gallery</h1>
            <div class="albums">
                <lab-album v-for="album in this.currentAlbums" :album=album :key="album.title"></lab-album>
            </div>
            <div class="gallery-control">
                <div class="left-button" @click.stop="currentPage--" v-show="currentPage > 1">&lt;</div>
                <input type="number" @keyup.enter="toPage" :value="currentPage"> / {{ pages }}
                <div class="right-button" @click.stop="currentPage++" v-show="currentPage < pages">&gt;</div>
            </div>
        </div>
        `,
}

export { labGallery };