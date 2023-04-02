<template>
    <div>
        <ul class="list-unstyled text-start mx-auto list-hours mb-5">
            <li class="d-flex list-unstyled-item list-hours-item" v-for="operationDay in operation">
                {{ operationDay.day }}
                <span class="ms-auto">{{ operationDay.hours == null ? 'Closed' : operationDay.hours }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        operation: Object
    }
}
</script>