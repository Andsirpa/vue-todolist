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
                    text: 'prepara la cena',
                    done: false
                },

            ]
        }
    },
    created() { },

    // preparo i metodi
    methods: {

        removeTask(index) {
            // uso lo splice per rimuovere un task in base all'indice
            this.tasks.splice(index, 1);
        },


        addTask() {

            if (this.newTask.text !== '') {
                // uso unshift per aggiunger un nuovo task alla lista
                this.tasks.unshift({ ...this.newTask });
            }
            this.newTask.text = '';
        },


        // Cambio lo stato 'done' di un todo quando il testo viene cliccato
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    }



}).mount('#app')