class MyHappyComponent {
  async componentDidMount() {
    try{
    axios
      .get(`${baseUrl}/playlists/myPlaylist`)
      .then(res => {
        const data = rest.data
        if(data.list.length) {
          console.log("A lista não está fazia")
        }}catch(){

         else {
          console.log("A lista está vazia")
        }
      }
      })
  }
}
