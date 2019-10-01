<template>
  <div class="contact">
    <h1 class="page-title"><span>Contact</span></h1>
    <p>Want to work together?</p>
    <form action="https://formspree.io/avidnick@gmail.com" method="POST">
      <div class="form-pair"><div class="label">Name</div><input type="text" name="Name" required></div>
      <div class="form-pair"><div class="label">Email</div><input type="email" name="Email" required></div>
      <div class="form-pair"><div class="label">Message</div><textarea rows="5" name="Message" required/></div>
      <input class="std-btn" type="submit" value="Send">
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
form {
  @include card-style();
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  margin: 0 auto;
}
.form-pair {
  .label {
    margin: 20px 0 5px 0;
  }
  input, textarea {
    min-width: 200px;
  }
}
.std-btn {
  margin-top: 20px;
}
p {
  text-align: center;
}
</style>
