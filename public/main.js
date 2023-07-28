const btn = document.querySelector('button')

////const clickHandler = () => alert('The cat name is: Oreo')

//btn.addEventListener('click', clickHandler)
const getCat = () => {
    //alert('Hi there')
    axios.get('http://localhost:4000/api/cat')
        .then(res => {
            alert('Hi there')
            alert(res.data)
        }
        );
}

btn.addEventListener('click', getCat)
