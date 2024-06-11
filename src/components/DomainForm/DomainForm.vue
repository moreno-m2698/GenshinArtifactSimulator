<script setup lang="ts">
    const model = defineModel()

    const submit = (e: Event) => {
        console.log(e.target.value)
    }
</script>

<!-- We can pass this form into the artifact roller -->

<template>
    <form> 
       <label 
            v-for="(field, index) in model" 
            :key="index"
        >
            <input 
                :type='field.type' 
                :value="index"
                :name="field?.name"
                @change="submit"
            />
                {{ field.label }}
        </label>
    </form>
</template>