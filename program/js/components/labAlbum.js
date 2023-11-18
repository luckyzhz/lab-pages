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
            if (!this.open) {
                this.open = !this.open;
            } else {
                if (event.target === event.currentTarget) {
                    this.open = !this.open;
                }
            }
        },
        toPreviousImage: function () {
            this.currentImage--;
        },
        toNextImage: function () {
            this.currentImage++;
        },
        toClose: function () {
            this.open = false;
        },
    },
    template:
        `
        <div class="lab-album" @click="switchAlbum">
            <div class="caption" v-show="open">
                {{album.images[currentImage].caption}}
                <div class="close-button" @click.stop="toClose">X</div>
            </div>
            <div class="image-box">
                <img :src="album.images[currentImage].link">
                <div class="left-button" @click.stop="toPreviousImage" v-show="open && currentImage > 0">&lt;</div>
                <div class="right-button" @click.stop="toNextImage" v-show="open && currentImage < album.images.length - 1">
                    &gt;</div>
                <div class="title" v-show="!open">{{album.title}}</div>
            </div>
        </div>
        `
}

export { labAlbum };