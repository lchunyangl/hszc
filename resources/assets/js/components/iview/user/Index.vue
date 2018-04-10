<template>
    <div>
        <Table :loading="loading" border ref="selection" :columns="columns4" :data="data1"></Table>
        <Page :total="total" show-elevator show-total @on-change="change" :page-size="per_page"></Page>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: true,
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
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data1: [],
                total: 0,
                per_page: 15,
            }
        },
        methods: {
            handleSelectAll() {
                this.$ajax.get('/api/user')
                    .then(response => {
                        this.data1 = response.data.data;
                        this.total = response.data.meta.total;
                        this.per_page = response.data.meta.per_page;
                        this.loading = false;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            change(page) {
                this.$ajax.get('/api/user', {
                    params: {
                        page: page
                    }
                })
                    .then(response => {
                        this.data1 = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            show(index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data1[index].name}<br>邮箱：${this.data1[index].email}<br>注册时间：${this.data1[index].created_at}`
                })
            },
            remove(index) {
                this.data1.splice(index, 1);
            }
        },
        mounted() {
            this.handleSelectAll();
        }
    }
</script>
