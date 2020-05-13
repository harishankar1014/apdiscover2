<template>
    <div>
        <h1>Test an api</h1>
        <hr>
        <div>
        <!-- <li v-for="d in data" :key="d">
            {{ d }}
        </li> -->
            <!-- {{ Object.keys(data) }} -->
        
        <form @submit.prevent="test">
            <li v-for="k in keys" :key="k">
            {{ k }}
            <input type="text" class="form-control" v-model="c[k]" placeholder="enter body data">
        </li>
        <label>LINK</label>
        {{ link }}
        <br>
        <p>Header</p>
        <input type="text" class="form-control" v-model="post.header">
        <br>
        <div class="form-group">
          <button class="btn btn-primary">Send Request</button>
        </div>
        </form>
        </div>
        <hr>
        <p>{{res}}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            post:[],
            link:this.$route.params.link,
            res:'',
            // data:JSON.parse(this.$route.params.data),
            data:this.$route.params.data,
            c:[],
            keys:Object.keys(this.$route.params.data),
            // length:Object.keys(this.$route.params.data).length
            }
    },
    methods:{
        test(){
            var jsonObj = {};
            for ( var i = 0 ; i < this.keys.length; i++) {
             jsonObj[this.keys[i]] = this.c[this.keys[i]];
            }
                console.log("request POST");
                console.log(jsonObj)
                let uri = this.link;
                axios.post(uri,jsonObj).then(response => {
                console.log(response.data);
                this.res=response.data;
            });
}
}
}
</script>
