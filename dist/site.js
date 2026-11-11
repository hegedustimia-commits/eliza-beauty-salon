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
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const status = form.querySelector('.form-status');
    const button = form.querySelector('button[type="submit"]');
    const data = new URLSearchParams(new FormData(form));
    data.set('form-name', form.name);
    status.textContent = 'Küldöm az üzenetedet…';
    button.disabled = true;

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      status.textContent = 'Köszönöm, megkaptam az üzeneted! Hamarosan jelentkezem.';
      button.disabled = false;
    } catch (error) {
      status.textContent = 'Az üzenet most nem ment el. Kérlek, írj a hello.elizabeauty@gmail.com címre, vagy hívj a +36 20 344 9272 számon.';
      button.disabled = false;
    }
  });
});
