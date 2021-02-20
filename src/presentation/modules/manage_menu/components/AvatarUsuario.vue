<template>
  <div class="avatar-usuario-container">
    <div class="imagem-avatar">
      <img
        class="icone-close"
        src="../assets/svg/person-circle.svg"
        alt="icone delete"
      />
    </div>
    <div class="container-title-avatar">
      <span class="acess-acount">Acesse sua conta</span>
      <a class="link-enter" href="#"
        >Entrar
        <div class="icone-close">
          <img src="../assets/svg/arrow-right-short.svg" alt="icone delete" />
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component  } from "vue-property-decorator";

@Component({ components: {} })
export default class AvatarUsuario extends Vue {
 
}
</script>

<style scoped>
.avatar-usuario-container {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 15px;
}

.imagem-avatar {
  width: 70px;
  height: 70px;
  display: flex;
  border-radius: 50%;
}
.container-title-avatar {
  display: flex;
  flex-direction: column;
}
.link-enter {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
  color: #b6116e;
  text-decoration: none;
  display: flex;
  align-items: center;
}
.acess-acount {
  font-size: 16px;
  color: #666666;
}
.icone-close {
  display: flex;
  align-items: center;
}
</style>
