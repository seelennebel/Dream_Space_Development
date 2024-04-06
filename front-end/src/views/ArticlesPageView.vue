<script setup>
import NavBar from "@/components/NavBar.vue";
import Article from "@/components/Articles/Article.vue";
</script>

<template>
  <div>
    <NavBar/>
    <main>
      <div class="full_size_img">
        <div class="container">
            <header>
                <h1>Articles</h1>
            </header>
            <div>
                <Article/>
            </div>
        </div> 
      </div>
    </main>
  </div>
</template>

<style scoped>
.full_size_img {
  background-image: url("/sky.jpg"); 
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  max-width: 1200px; 
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; 
  align-items: center;
}

header {
  display: flex;
  justify-content: center;
}

header h1 {
  color: white;
  font-weight: bold;
  letter-spacing: 0.1em;
  font-size: 2em;
}
</style>
