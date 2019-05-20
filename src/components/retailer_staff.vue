<template>
<div class="container">
    <button class="btn btn-success mt-5 mb-5"
    @click="addNewEmployeeforms">
        NEW EMPLOYEE
    </button>
    <div class="card mb-3" v-for=" ( employee, index) in employees" :key='index'>
        <div class="card-body">
            <span class="float-right" style="cursor:pointer"
            @click="deleteemployeeform(index)">
                X
            </span>
            <h4 class="card-tittle">Add Employee(index:{{ index }})</h4>
            <div class="employee-form">
                <input type="text" class="form-controll mb-2" placeholder="name" v-model="employee.name">
                <input type="text" class="form-controll mb-2" placeholder="job"  v-model="employee.job">
                <textarea cols="20" rows="1" placeholder="about" v-model="employee.about"></textarea>
                 <b-button pill variant="outline-secondary" @click="submit" >Submit</b-button>
            </div>
        </div>
        
    </div>
</div>
</templa>

<script>
export default {

    name: 'RetailerStaff',
    data () {
        return {
            employees: [{
            name:'',
            job:'',
            about:'',

        }]
        }
    },
    methods: {
        addNewEmployeeforms (){
            this.employees.push({
                name:'',
                job:'',
                about:''
            })
        },
        submit() {
            console.log('submit to server')
        }
    } 

}

</script>