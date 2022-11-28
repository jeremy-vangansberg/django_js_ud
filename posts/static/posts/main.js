
const helloWorldBox = document.getElementsByClassName('hello-world')
const postsBox = document.getElementById('posts')
const spinnerBox = document.getElementById('spinner-box')

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function (response) {
        console.log('success', response)
        const data = response.data
        setTimeout(() => {
            spinnerBox.classList.add('not-visible')
            data.forEach(el => {
                postsBox.innerHTML += `
                <div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">${el.title}</h5>
                        <p class="card-text">${el.body}</p>
                        
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-1">
                                <a href="#" class="btn btn-primary">Detail</a>
                            </div>
                            <div class="col-1">
                                <a href="#" class="btn btn-primary">Like</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            `
            });
        }, 100)

    },
    error: function (response) {
        console.log('error', response)
    }
})