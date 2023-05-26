import axios from 'axios';

const getData = async() => {
    await axios.get("https://localhost:7038/api/Products/getProducts")
      .then(res => { console.log(res.data)})
      .catch(error => { console.log(error)})
  }

getData()

//<script src="https://unpkg.com/axios/dist/axios.min.js"></script>