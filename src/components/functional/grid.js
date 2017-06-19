export default {
    functional: true,

    render: (h, { props, data, children }) => {
        let attrs = Object.keys(data.attrs).filter(function(prop){ return !data.attrs[prop]})
        // remove grid specific attrs
        for(var prop in data.attrs){
            if(new RegExp('^(s|m|l){1}\\d{1,2}$', 'i').test(prop)){
               delete data.attrs[prop] 
            }
        }
        attrs.unshift('col');
        data.staticClass = data.staticClass || '';
        data.staticClass = `${attrs.join(' ')} ` + data.staticClass;

        return h('div', data, children)
    }
}
