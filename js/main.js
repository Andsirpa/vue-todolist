const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: {
                text: '',
                done: false
            },
            tasks: [
                {
                    text: 'svolgere la traccia',
                    done: true
                },
                {
                    text: 'fare benzina',
                    done: false
                },
                {
                    text: 'regalo di frank',
                    done: false
                },
                {
                    text: 'reso amazon',
                    done: false
                },

            ]
        }
    },
    created() { },



}).mount('#app')