<template>
    <div class="card">
        <Menubar :model="items">
            <template #start>
                SAIMU
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <a v-ripple class="flex items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
            </template>
            <template #end>
                <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
                <Logout v-if="user"/>
                <!-- <div class="flex items-center gap-2">
                    <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                </div> -->
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";
const user = useSupabaseUser()

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    }
    // {
    //     label: 'Features',
    //     icon: 'pi pi-star'
    // },
    // {
    //     label: 'Projects',
    //     icon: 'pi pi-search',
    //     items: [
    //         {
    //             label: 'Core',
    //             icon: 'pi pi-bolt',
    //             shortcut: '⌘+S'
    //         },
    //         {
    //             label: 'Blocks',
    //             icon: 'pi pi-server',
    //             shortcut: '⌘+B'
    //         },
    //         {
    //             label: 'UI Kit',
    //             icon: 'pi pi-pencil',
    //             shortcut: '⌘+U'
    //         },
    //         {
    //             separator: true
    //         },
    //         {
    //             label: 'Templates',
    //             icon: 'pi pi-palette',
    //             items: [
    //                 {
    //                     label: 'Apollo',
    //                     icon: 'pi pi-palette',
    //                     badge: 2
    //                 },
    //                 {
    //                     label: 'Ultima',
    //                     icon: 'pi pi-palette',
    //                     badge: 3
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'Contact',
    //     icon: 'pi pi-envelope',
    //     badge: 3
    // }
]);
</script>
