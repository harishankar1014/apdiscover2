<template>
    <div>
    <!-- <label>SWAGGER</label>
    {{ data.info }}
    <br> -->
    <label>TITLE</label>
    {{ data.info.title }}
    <br>
    <label>DESCRIPTION</label>
    {{ data.info.description }}
    <br>
    <!-- <label>TERMS OF SERVICE </label>
    <a href= data.info.termsOfService>{{ data.info.termsOfService }}</a> -->
    <!-- <br> -->
    <hr>
    <!-- <label>Host</label>
    {{ data.host }}
    <br> -->
    <!-- <label>Base Path</label>
    {{ data.basePath }}
    <br> -->
    <!-- <label>Schemes</label>
    {{ data.schemes }}
    <br> -->
    <label>Produces</label>
    {{ data.produces }}
    <br>
    <label>Consumes</label>
    {{ data.consumes }}
    <br>
    <label>Link</label>
    {{ link=data.schemes[0]+'://'+data.host+data.basePath }}
    <br>
    <ol v-for="k in pathsKey" :key="k">
    <!-- {{ requestKeys= Object.keys(data.paths[k]) }} -->
    <!-- <p>Request Parameters</p> -->
        <ol v-for="rk in Object.keys(data.paths[k])" :key="rk">
            <p>Final link =
            {{fulllink= link+ data.paths[k][rk].operationId }}
            </p>
            <br>
            <p>Parameters</p>
            {{parameters=data.paths[k][rk].parameters[0] }}
            <br>
            <!-- <p>Pass parameters</p>
            {{ parameters[0] }}
            <br> -->
            <router-link v-if="rk == 'post'" :to="{name: 'apitest',params:{link:fulllink,data:parameters}}" class="nav-link">&nbsp;Test POST</router-link>
            <router-link v-if="rk == 'get'" :to="{name: 'apitestget',params:{link:fulllink,data:parameters}}" class="nav-link">&nbsp;Test GET</router-link>
            {{ data.paths[k][rk].description }}
            <br>
        </ol>
    </ol>
    <br>
    <hr>
    <br>
    <!-- <label>securityDefinitions</label>
    {{ data.securityDefinitions }}
    <br> -->
    <!-- <label>definitions</label>
    {{ data.definitions }} -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
           data:JSON.parse(this.$route.params.swagger),
           keys:Object.keys(JSON.parse(this.$route.params.swagger)),
           pathsKey:Object.keys(JSON.parse(this.$route.params.swagger).paths),
           requestKeys:[],
           link:'',
           fulllink:'',
           parameters:[]
            }
    },
    methods:{
        test(){
                console.log("request GET");
                let uri = this.link;
                axios.get(uri).then(response => {
                console.log(response.data);
                this.res=response.data;
            });
}
}
}
</script>