<template>
    <header class="header">
        <div class="header__container">
            <a class="header__logo" href="#">
                <svg class="header__logo-icon">
                    <use xlink:href="@/assets/sprite.svg#logo"></use>
                </svg>
            </a>
            <nav class="header__navigation">
                <a class="header__navigation-button" href="#">Home</a>
                <a class="header__navigation-button" href="#">About Us</a>
                <a class="header__navigation-button" href="#">White paper</a>
                <a class="header__navigation-button" href="#">Tokenomics</a>
                <a class="header__navigation-button" href="#">Road Map</a>
                <a class="header__navigation-button" href="#">How to buy</a>
                <a class="header__navigation-button" href="#">Buy</a>
            </nav>
        </div>
    </header>
</template>

<script setup>
    
</script>

<style scoped>
 @import '@/scss/components/header.scss';
</style>