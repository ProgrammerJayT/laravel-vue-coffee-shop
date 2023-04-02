<template>
    <div>
        <h1 class="text-center text-white d-none d-lg-block site-heading"><span
                class="text-primary site-heading-upper mb-3">A
                Free Bootstrap 5 Business Theme&nbsp;</span><span class="site-heading-lower">Business Casual</span></h1>
        <nav class="navbar navbar-dark navbar-expand-lg bg-dark py-lg-4" id="mainNav">
            <div class="container"><a class="navbar-brand text-uppercase d-lg-none text-expanded" href="#">Brand</a><button
                    data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarResponsive"><span
                        class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/about" class="nav-link">About us</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/products" class="nav-link">Products</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/store" class="nav-link">Store</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {

}
</script>