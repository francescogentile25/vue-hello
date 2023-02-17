const { createApp } = Vue
console.log(Vue)

const utente = {
    nome: 'Gianni',
    cognome: 'Mimmoli',
}

const cards = ['1F', '2P', '4C', '9Q']

// const createApp = Vue.createApp
const option = {
    data() {
        return {
            message: 'Ciao VUE!',
        }
    },
    methods: {
    },
}
const app = createApp(option)
app.mount('#app')
