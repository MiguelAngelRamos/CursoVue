const { createApp } = Vue;

const app = createApp( {
  data () {
    return {
      titulo: "Mi Banco",
      servicios: ['Prestamos', 'Cuenta corriente', 'Giros', 'Depositos'],
      saldo: 600,
      estado: false,
      fecha: '2021-04-15'
    }
  },
  methods: {
    agregarSaldo( valor ) {
      this.saldo = this.saldo + valor;
    },

    disminuirSaldo() {
      this.saldo = this.saldo - 100;
    }
  },
  computed: {
    cambiarColorSaldo() {
      return this.saldo > 500? 'text-success': 'text-danger';
    }
  }
});