export default {
    functional: true,

    render: (h, { props, data, children }) => {
        let attrs = Object.keys(data.attrs)
        console.log(props, data)
        attrs.unshift('col')
        data.attrs = {}
        data.attrs.class = attrs.join(' ')

        data.staticClass = data.staticClass || ''
        data.staticClass += ` ${attrs.join(' ')}`

        return h('div', data, children)
    }
}
