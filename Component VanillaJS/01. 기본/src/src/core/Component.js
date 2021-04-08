class Component {
  $target; // parent
  $element; // child
  $state;

  constructor($target) {
    this.$target = $target;
    this.append();
    this.setUp();
    this.render();
  } // 처음 실행 해야하는 함수들 호출

  append() {} // createElement, appendChild

  setUp() {} // 초기 state 설정

  template() {
    return "";
  } // $element.innerHTML에 들어갈 tag tamplate return

  setEvent() {} // element 이벤트 설정

  render() {
    this.$element.innerHTML = this.template();
    this.setEvent();
  }

  setState(newState) {
    this.$state = newState;
    this.render();
  } // state 업데이트 후 리렌더링
}
