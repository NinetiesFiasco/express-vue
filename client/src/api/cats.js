import {baseUrl} from './config'
import crud from './crud'
const url = `${baseUrl}/cats`

const create = crud.create(url)
const readPage = crud.readPage(url)
const update = crud.update(url)
const _delete = crud._delete(url)
const count = crud.count(`${url}/count`)

export default {create, update, _delete, count, readPage}