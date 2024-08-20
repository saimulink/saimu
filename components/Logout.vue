<script setup lang="ts">
   
    const form = reactive({ email: null, password: null })
    const auth = useSupabaseClient().auth
    const logout = async () => {
    
       const {error} = await auth.signOut() 

        if(error)
            console.log(error.message)
        else
            navigateTo('/login');
    }
</script>

<template>
  <UButton label="Logout" @click="logout" color="gray" block />
</template>
