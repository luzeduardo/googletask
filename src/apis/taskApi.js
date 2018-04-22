import axios from 'axios'

const getTasks = async _ => {
  const data = await axios.get(`${process.env.TASK_API_URL}`)
  console.log(data)
}

export {
  getTasks,
  
}