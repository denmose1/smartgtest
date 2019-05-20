<template>
<div>
 <b-navbar variant="dark" type="light">

    <b-navbar-brand href="#">Dashboard</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

    <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <router-link  to="/EditAccount" flat> <p> Edit profile  </p> </router-link>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          <router-link  to="/retailer_staff" flat> <p> retailer_staff </p> </router-link>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
