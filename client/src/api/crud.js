import {jsonHeaders, handleResponse} from './config'

const count = url => async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: jsonHeaders
    })

    return handleResponse(response)
  }

const create = url => async data => {
  const response = await fetch(url, {
      method: 'POST',
      headers: jsonHeaders,
      body: JSON.stringify(data)
    }
  )
  
  return handleResponse(response)
}

const update = url => async (id, data) => {
  const response = await fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: jsonHeaders
  })

  return handleResponse(response)
}

const _delete = url => async id => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: jsonHeaders
  })

  return handleResponse(response)
}

const read = url => async () => {
  const response = await fetch(url, {
    method: 'GET',
    headers: jsonHeaders
  })

  return handleResponse(response)
}

const readPage = url => async (skip, limit) => {
  const response = await fetch(`${url}/${skip}/${limit}`, {
    method: 'GET',
    headers: jsonHeaders
  })

  return handleResponse(response)
}

export default {count, create, update, _delete, read, readPage}
