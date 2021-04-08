class App {
  $target; // document.getElementById("app")
  $state;

  constructor($target) {
    this.$target = $target;

    this.$Items = new Items($target);
  }
}
