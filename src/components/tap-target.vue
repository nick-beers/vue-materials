<template>
<div class="tap-target" :data-activates="dataActivates">
    <div class="tap-target-content">
    	<slot></slot>
    </div>
  </div>
</template>

<script type="text/babel">
    export default {
    	props: {
            dataActivates: {
                type: String,
                required: true
            },
    	}
    }
</script>
