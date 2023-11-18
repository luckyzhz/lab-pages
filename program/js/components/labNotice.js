const labNotice = {
    data: function () {
        return {
            open: false,
        }
    },
    props: {
        "notice": Object,
    },
    template:
        `
        <div class="lab-notice">
            <div class="summary" @click.stop="open=!open">
                <div class="title">{{ notice.title }}</div>
                <div class="coordinator">{{ notice.coordinator }}</div>
                <div class="date">{{ notice.date }}</div>
            </div>
            <div class="content" v-show="open">{{ notice.content }}</div>
        </div>
        `
}

export { labNotice };