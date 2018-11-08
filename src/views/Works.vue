<template>
    <div class="works">
        <h1>This is a work page</h1>
    </div>
</template>

<script>
export default {
	beforeCreate: function() {
        document.getElementById('logo').setAttribute('class', 'logo show')
    }
}
</script>
