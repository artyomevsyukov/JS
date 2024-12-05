console.log("1")

async function fetchData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

const url = "https://dummyjson.com/posts/2"
fetchData(url).then((data) => console.log("2: ", data))

console.log("3")
