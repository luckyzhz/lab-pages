const labAlbum = {
    data: function () {
        return {
            open: false,
            currentImage: 0,
        }
    },
    props: {
        "album": Object,
    },
    methods: {
        switchAlbum: function (event) {
            this.open = !this.open;
            if (this.open) {
                event.currentTarget.classList.add("open");
            } else {
                event.currentTarget.classList.remove("open");
            }
        },
        toPreviousImage: function () {
            this.currentImage--;
        },
        toNextImage: function () {
            this.currentImage++;
        },
    },
    template:
        `
        <div class="lab-album" @click="switchAlbum">
            <div class="caption" v-show="open">
                {{album.images[currentImage].caption}}
            </div>
            <div class="image-box">
                <img :src="album.images[currentImage].link">
                <div class="left-button" @click.stop="toPreviousImage" v-show="open && currentImage > 0">&lt;</div>
                <div class="right-button" @click.stop="toNextImage" v-show="open && currentImage < album.images.length - 1">
                    &gt;</div>
            </div>
            <div class="title" v-show="!open">{{album.title}}</div>
        </div>
        `
}

export { labAlbum };