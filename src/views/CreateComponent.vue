<template>
 <div>
  <h1>Create A Post</h1>
  <form @submit.prevent="addPost">
   <div >
    <div >
     <div >
      <label>Post Title:</label>
      <input type=text v-model="post.title">
     </div>
    </div>
    </div>
    <div >
     <div >
      <div >
       <label>Post Body:</label>
       <textarea v-model="post.body" rows="5"></textarea>
      </div>
     </div>
    </div><br />
    <div >
     <button >Create</button>
    </div>
  </form>
 </div>
</template>

<script>
  export default {
    data(){
    return {
     post:{}
    }
  },
  methods: {
   async addPost(){
    console.log(this.post);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.post)
    };
    await fetch('http://localhost:8000/posts/add', requestOptions)
      .then(async response => await response.json())
      .then(this.$router.push({name: 'posts'}));
   }
  }
 }
</script>