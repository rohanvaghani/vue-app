// EditComponent.vue

<template>
 <div>
  <h1>Edit Post</h1>
  <form @submit.prevent="updatePost">
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
     <button >Update</button>
    </div>
  </form>
 </div>
</template>

<script>
  export default {

   data() {
    return {
     post: {}
    }
   },
   async created() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    await fetch(`http://localhost:8000/posts/edit/${this.$route.params.id}`, requestOptions)
      .then(async response => this.post = await response.json());
   },
   methods: {
    async updatePost() {
     const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.post)
    };
    await fetch(`http://localhost:8000/posts/update/${this.$route.params.id}`, requestOptions)
      .then(async response => await response.json())
      .then(this.$router.push({name: 'posts'}));
    }
   }
  }
</script>