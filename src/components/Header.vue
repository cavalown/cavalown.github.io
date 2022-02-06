<template>
  <div class="header">
    <div class="title">
      <router-link to="/" class="logo">Cavalon's</router-link>
    </div>
    <ul class="nav-links">
      <li><router-link to="/" class="nav-link">Home</router-link></li>
      <li class="nav-link">|</li>
      <li><router-link to="/blog" class="nav-link">Blog</router-link></li>
      <li class="nav-link">|</li>
      <li>
        <router-link to="/project" class="nav-link">Project</router-link>
      </li>
      <li class="nav-link">|</li>
      <li>
        <router-link to="/interest" class="nav-link">Interest</router-link>
      </li>
      <li class="nav-link">|</li>
      <li>
        <a href="https://github.com/cavalown" target="_blank">Github</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #b99726;
  height: 60px;
  .logo {
    font-size: 40px;
    color: #333d51;
    margin-left: 20px;
    text-align: center;
    text-decoration: none;
  }
  ul {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    li {
      font-size: 20px;
      color: #cbd0d8;
      margin-right: 10px;
      :hover {
        background: rgb(173, 169, 169);
        padding: 5px;
        border-radius: 20px;
      }
      .router-link {
        text-decoration: none;
        color: #333d51;
      }
      a {
        text-decoration: none;
        color: #0c5e7c;
      }
    }
  }
}
</style>
