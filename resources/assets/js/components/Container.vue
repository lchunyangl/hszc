<template>
    <el-container>
        <el-header>
            <Topmenu></Topmenu>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <Leftmenu></Leftmenu>
            </el-aside>
            <el-container>
                <el-main>
                    <Tab></Tab>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import Leftmenu from './Leftmenu.vue';
    import Topmenu from './Topmenu.vue';
    import Tab from './Tab.vue';

    export default {
        name: "Container",
        components: {
            Leftmenu,
            Topmenu,
            Tab
        }
    }
</script>

<style scoped>
    .el-header {
        padding: 0;
    }
</style>