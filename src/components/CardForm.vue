<template>
  <form action="">
    <div class="input-wrapper">
      <label for="card-number">Número do cartão</label>
      <input id="card-number"/>
    </div>

    <div class="input-wrapper">
      <label for="card-holder">Nome do titular</label>
      <input id="card-holder"/>
    </div>

    <div class="flex">
      <div class="input-wrapper">
        <label for="expiration-date">Expiração</label>
        <input id="expiration-date"/>
      </div>

      <div class="input-wrapper">
        <label for="security-code">CVC</label>
        <input id="security-code"/>
      </div>
    </div>

    <button id="add-card" type="button">ADICIONAR CARTÃO</button>
  </form>
</template>
<style scoped>
form {
  max-width: 36rem;
  display: grid;
  gap: 1.6rem;
}

form .input-wrapper {
  display: grid;
  gap: 0.6rem;
}

form label {
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: 0.01px;
  text-transform: uppercase;
  color: #e1e1e6;
}

form input {
  background: #121214;
  border: 1px solid #323238;
  border-radius: 6px;
  height: 41px;
  padding-inline: 1.2rem;

  width: 100%;

  color: white;
  text-transform: uppercase;
}

form .flex {
  gap: 1.4rem;
}

form .flex .input-wrapper {
  flex: 1;
}

form button {
  margin-top: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 0;

  background: #42d3ff;
  border-radius: 0.6rem;

  cursor: pointer;

  border: none;

  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #121212;

  transition: filter 0.3s;
}

form button:hover {
  filter: brightness(1.1);
}
</style>