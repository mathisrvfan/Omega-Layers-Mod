Vue.component("restack-upgrade", {
    props: ["upgrade"],
    methods: {
        getResourceName: function()
        {
            return '<img alt="LC" class="inline" src="images/layercoin.png"/>';
        }
    },
    template: `<resource-upgrade :upgrade="upgrade" :resourcename="getResourceName()"></resource-upgrade>`
});