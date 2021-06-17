app.component('footer-banco', {
  props: ['fechafooter', 'titulofooter'],
  template: `
    <footer class="bg-dark text-white text-center">
    {{ fechafooter }} - {{ titulofooter}}
    </footer>
  `,
});