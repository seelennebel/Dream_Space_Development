<script setup>
import NavBar from "@/components/NavBar.vue";
import Article from "@/components/Articles/Article.vue";
</script>

<template>
  <div>
    <NavBar/>
    <main>
      
        <div class="container">
            <header>
                <h1>Articles</h1>
            </header>
            <div>
                <Article/>
            </div>
        </div> 
      
    </main>
  </div>
</template>

<style scoped>
main
{
    background-image: url("../assets/photos/sky.jpg");
    width: 100%;
    height:100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: scroll;
}

.container {
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
  width:100%;
}

header h1 {
  color: white;
  font-weight: bold;
  letter-spacing: 0.1em;
  font-size: 50px;
}

@media (max-width:768px)
{
    .container
    {
        max-width:90%;
    }
    
    
}
</style>