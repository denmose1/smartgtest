<template>
    <div id="app">
        <form v-on:submit.prevent='addTodo' >
            <input v-model="Currenttodos" type="text">
            <button type="submit">Add Products</button>
        </form>
        <ul>
            <li v-for='(todo,index) in todos' :key="index">
                {{
                    todo
                }}
                <button v-on:click="deleteitem(index)">X</button>
            </li>

        </ul>
    </div>
</template>
<script>
export default {
    
        data() {
            return {
                todos:['vue','vuex','nuxt'],
                CurrentTodos:''
            }
        },
        methods: {
            addTodo:function (){
                this.todos.push(this.CurrentTodos)

            }
        },
        deleteItem: function(index){
            this.todos.splice(index, 1)
        }

}
</script>
