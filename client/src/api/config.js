const baseUrl = 'http://localhost:3000/api'
const jsonHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const handleResponse = async function(response) {
  if (response.status >= 200 && response.status <= 299) {
    return await response.json()
  } else {
    console.log(response.status, response.statusText)
    return false
  }
}

export {baseUrl, jsonHeaders, handleResponse}
