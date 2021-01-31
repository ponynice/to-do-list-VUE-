var data = {

    show: false,
    re: 'reset',
    newtodo: '',
    todos: [{
        title: '学习VUE',
        check: true
    },
    {
        title: '学习CSS',
        check: false
    }]
}
new Vue({
    el: '#container',
    data: data,
    methods: {
        addNewtodo: function () {
            if (this.newtodo) {
                this.todos.push({
                    title: this.newtodo,
                    check: true
                })
            }
            else {
                alert("输入不能为空");
            }
            this.newtodo = ''
        },//添加任务并清空输入框
        adddone: function (d) {
            d.check = !d.check;

        },
        hide: function () {
            this.show = false;
        },
        reset: function () {
            this.show = !this.show;
            if (this.show) re = 'ok';
            else re = 'reset';
        },

    }
})
