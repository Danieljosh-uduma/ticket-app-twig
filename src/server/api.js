export async function SignUp(userdata) {
  const res = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userdata),
  })

  if (!res.ok) {
    console.error('error occurred')
    return null
  }
  const data = await res.json()
  return data
}

export async function Login(userdata) {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userdata),
  })

  if (!res.ok) {
    console.error('error occurred')
    return null
  }
  const data = await res.json()
  return data
}

export async function getTicket() {
  const res = await fetch('/api/tickets')

  if (!res.ok) {
    console.error('error occurred')
    return null
  }
  const data = await res.json()
  return data
}

export async function getTicketById(id) {
  const res = await fetch(`/api/tickets/${id}`)

  if (!res.ok) {
    console.error('error occurred')
    return null
  }

  const data = await res.json()
  return data
}

export async function editTicketById(userData, id) {
  const res = await fetch(`/api/tickets/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  if (!res.ok) {
    console.error('error occurred')
    return null
  }

  const data = await res.json()
  return data
}

export async function deleteTicketById(id) {
  const res = await fetch(`/api/tickets/${id}`, {
    method: 'DELETE',
  })

  if (!res.ok) {
    console.error('error occurred')
    return null
  }
  const data = await res.json()
  return data
}

export async function createTicket(userData) {
  const res = await fetch('/api/tickets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  if (!res.ok) {
    console.error('error occurred')
    return null
  }
  const data = await res.json()
  return data
}
