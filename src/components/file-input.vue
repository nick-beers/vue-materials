<template>
    <div class="file-field input-field">
        <div class="btn">
            <span>File</span>
            <input type="file"
                   :multiple="multiple"
            >
        </div>
        <div class="file-path-wrapper">
            <m-text-input class="file-path validate"></m-text-input>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            multiple: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
