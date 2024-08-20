<script setup lang="ts">
   
    const form = reactive({ email: null, password: null })
    const auth = useSupabaseClient().auth
    const login = async () => {
    
       const {error} = await auth.signInWithPassword({
            email: form.email,
            password: form.password,
        }) 

        if(error)
            console.log(error)
        else
            navigateTo('/');
    }
</script>

<template>
<h1 class="text-center py-2 text-2xl font-bold">LOGIN</h1>
  <div class="w-full flex flex-col gap-y-4">
    <UCard :ui="{ body: { base: 'grid grid-cols-3' } }">
      <div class="space-y-4">
        <UForm :state="form" class="space-y-4" v-on:submit="login">
            <UFormGroup label="Email" name="email">
            <UInput v-model="form.email" />
            </UFormGroup>

            <UFormGroup label="Password" name="password">
            <UInput v-model="form.password" type="password" />
            </UFormGroup>

            <UButton label="Login" type="submit" color="gray" block />
        </UForm>
      </div>

      <UDivider label="OR" orientation="vertical" />

      <div class="space-y-4 flex flex-col justify-center">
        <UButton color="black" label="Login with GitHub" icon="i-simple-icons-github" block />
        <UButton color="black" label="Login with Google" icon="i-simple-icons-google" block />
      </div>
    </UCard>
  </div>
</template>
