document.querySelector('.menu-toggle')?.addEventListener('click', event => {
  const nav = document.querySelector('.nav');
  const open = nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('form[data-kind="newsletter"]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelector('.form-status').textContent = 'A feliratkozás bekötése folyamatban van. Írj nekem e-mailben: hello.elizabeauty@gmail.com.';
  });
});

document.querySelectorAll('form[name="idopontkeres"]').forEach(form => {
  form.addEventListener('submit', () => {
    if (!form.reportValidity()) return;
    let formName = form.querySelector('input[name="form-name"]');
    if (!formName) {
      formName = document.createElement('input');
      formName.type = 'hidden';
      formName.name = 'form-name';
      form.append(formName);
    }
    formName.value = form.getAttribute('name');
    const status = form.querySelector('.form-status');
    const button = form.querySelector('button[type="submit"]');
    status.textContent = 'Küldöm az üzenetedet…';
    button.disabled = true;
  });
});
