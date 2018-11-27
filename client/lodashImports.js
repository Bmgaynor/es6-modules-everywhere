import { reverse } from '../node_modules/lodash'

export default () => {
    const array =  [5, 4, 3, 2, 1]

    console.log('array', array)
    console.log('reversed array', reverse(array))
    
}