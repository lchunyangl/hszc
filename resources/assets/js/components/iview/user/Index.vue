<template>
    <div>
        <Table border ref="selection" :columns="columns4" :data="data1"></Table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '用户名',
                        key: 'name'
                    },
                    {
                        title: '邮箱',
                        key: 'email'
                    },
                    {
                        title: '注册时间',
                        key: 'created_at'
                    }
                ],
                data1: []
            }
        },
        methods: {
            handleSelectAll() {
                this.$ajax.get('/api/user')
                    .then(response => {
                        console.log(response.data.data);
                        this.data1 = response.data.data;
                    })
                    .catch(response => {
                        console.log(error);
                    });
            }
        }
    }
</script>
