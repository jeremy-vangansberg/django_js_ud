
const helloWorldBox = document.getElementsByClassName('hello-world')

helloWorldBox[0].textContent = 'test'

$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function (response) {
        console.log('success', response)
    },
    error: function (response) {
        console.log('error', response)
    }
})

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function (response) {
        console.log('success', response)
        const data = JSON.parse(response.data)
        console.log(data)
    },
    error: function (response) {
        console.log('error', response)
    }
})