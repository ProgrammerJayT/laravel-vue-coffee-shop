<template>
    <div>
        <footer class="text-center footer text-faded py-5">
            <div class="container">
                <p class="m-0 small">{{ footerParagraph }}</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footerParagraph: 'Copyright © Brand 2023',
        }
    }
}
</script>