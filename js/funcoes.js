const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    nome: null,
    email: null,
    mensagem: null
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.nome) {
        this.errors.push('O nome é obrigatório.');
      }
      if (!this.mensagem) {
        this.errors.push('A mensagem é obrigatória.');
      }
      if (!this.email) {
        this.errors.push('O e-mail é obrigatório.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Utilize um e-mail válido.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
})