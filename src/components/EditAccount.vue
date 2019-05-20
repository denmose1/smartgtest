<template>
    <div>
        <b-form >
    <label class="sr-only" >Name</label>
    <b-input
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Jane Doe"
    ></b-input>
        <label class="sr-only" >Username</label>
    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input  placeholder="Username"></b-input>
    </b-input-group>
  
    <label for="text-password">Password</label>
    <b-input type="password" id="text-password" aria-describedby="password-help-block"></b-input>
    <b-form-text id="password-help-block">
      Your password must be 8-20 characters long, contain letters and numbers, and must not
      contain spaces, special characters, or emoji.
    </b-form-text>
 <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
</div>
</template>
<script>
export default {
    data(){
        return{
            Form:{
                 Name:'',
                Username:'',
                Password:'',
            }
        
        }
        
    },
    methods:{
        onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        }
    }
}
</script>