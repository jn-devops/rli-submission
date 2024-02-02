<template>
     <Head>
        <meta type="description" content="Home information to my app" head-key="description">
        <title>Landing Page</title>
    </Head>

    <section>
        <div class="h-screen flex justify-center items-center">
            <Link 
            href="/upload"
            >
                <img src="../../img/Raemulan Lands Logo.svg" alt="Logo" class="mx-auto">
            </Link>
        </div>
    </section>
</template>

<script setup>
    import { Head, Link } from '@inertiajs/vue3';   
</script>

  
  
  