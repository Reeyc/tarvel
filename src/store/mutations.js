export default {
  changeCity(state, data) {
    state.city = data;
    localStorage.city = data;
  }
}
