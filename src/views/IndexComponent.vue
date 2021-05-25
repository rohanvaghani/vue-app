<template>
 <div>
   <h1>Posts</h1>
    <div >
     <div ></div>
     <div >
      <router-link :to="{ name: 'create' }" >Create Post</router-link>
     </div>
    </div><br />

    <table >
      <thead>
      <tr>
       <th>Title</th>
       <th>Body</th>
       <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post._id">
         <td>{{ post.title }}</td>
         <td>{{ post.body }}</td>
         <td><router-link :to="{name: 'edit', params: { id: post._id }}" >Edit</router-link></td>
         <td><button @click.prevent="deletePost(post._id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
 export default {
   data() {
    return {
     posts: []
    }
   },
   async created() {
   const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    await fetch('http://localhost:8000/posts', requestOptions)
      .then(async response => this.posts = await response.json());
  },
  methods: {
   async deletePost(id)
   {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };
    await fetch(`http://localhost:8000/posts/delete/${id}`, requestOptions)
      .then(async response => await response.json())
      .then(this.posts.splice(this.posts.indexOf(id), 1));
   }
  }
 }
</script>