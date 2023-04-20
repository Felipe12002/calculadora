function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function igual() {
  let exp = document.form.textview.value;

  if (exp) {
    document.form.textview.value = eval(exp);
  }
}

function limpiar() {
  document.form.textview.value = '';
}

function back() {
  let exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}