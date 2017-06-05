import Load from '../util/load'

export default {
    bind (el, binding, vnode) {
        Load.call(vnode.context, () => {
            el.addEventListener("click", function(event){
                var tapTargetAction = binding.value || 'open';
                $(`#${binding.arg}`).tapTarget(tapTargetAction);
            });
        });
    }
}
