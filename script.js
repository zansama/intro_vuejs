var vm = new Vue({
    el: '#app',
    data: {
        value_test: '',
        message: '',
        changeMessage : '',
        active: false,
        hide :false
    },

    methods: {
        newMessage: function () {
            this.message = this.changeMessage
        }
    }
});


