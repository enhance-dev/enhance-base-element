import test from 'tape'
import { kebabToCamel } from '../../index.mjs'

test('check attribute name to attribute change callback', async (t) => {
    t.plan(6)
    t.equal(kebabToCamel('myattribute'), 'myattribute', 'lowercase')
    t.equal(kebabToCamel('my-attribute'), 'myAttribute', 'kebab case')
    t.equal(kebabToCamel('my-attribute-two'), 'myAttributeTwo', 'kebab case, multiple words')
    t.equal(kebabToCamel('my-attribute-'), 'myAttribute', 'kebab case, trailing -')
    t.equal(kebabToCamel('my--attribute'), 'myAttribute', 'kebab case, multiple -')
    t.equal(kebabToCamel('my_attribute'), 'my_attribute', 'snake case')
})
