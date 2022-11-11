const img = ['/assets/prod/1.jpg',
                '/assets/prod/2.jpg',
                '/assets/prod/3.jpg',
                '/assets/prod/4.jpg',
                '/assets/prod/5.jpg',
                '/assets/prod/6.jpg',
                '/assets/prod/7.jpg',
                '/assets/prod/8.jpg',
                '/assets/prod/9.jpg',
                '/assets/prod/10.jpg',
                '/assets/prod/11.jpg',
                '/assets/prod/12.jpg',
            ]

const imgh = ['/assets/prod/1-h.jpg',
                '/assets/prod/2-h.jpg',
                '/assets/prod/3-h.jpg',
                '/assets/prod/4-h.jpg',
                '/assets/prod/5-h.jpg',
                '/assets/prod/6-h.jpg',
                '/assets/prod/7-h.jpg',
                '/assets/prod/8-h.jpg',
                '/assets/prod/9-h.jpg',
                '/assets/prod/10-h.jpg',
                '/assets/prod/11-h.jpg',
                '/assets/prod/12-h.jpg',
]

const titleProduct = ['Zipped Cardigan',
                        'Sweatshirt Shorts',
                        "Round-Neck T-Shirt",
                        "Nylon Windbreaker",
                        "Relaxed Fit Hoodie",
                        "Relaxed Fit Hoodie",
                        "Twil Overshirt",
                        "Relaxed Fit T-Shirt",
                        "Cotton T-Shirt",
                        "Zip Hoodie",
                        "Twil Overshirt",
                        "Hoodie Relaxed Fit",
                      ]       
                        

const priceProduct = ['Rp 599,900',
                        'Rp 199,900',
                        'Rp 899,900',
                        'Rp 599,900',
                        'Rp 459,900',
                        'Rp 459,900',
                        'Rp 599,900',
                        'Rp 199,900',
                        'Rp 379,900',
                        'Rp 429,900',
                        'Rp 549,900',
                        'Rp 459,900',
                        ]
            
const color = ['black',
                'white',
                'red',
                'blue',
                'grey',
                'aliceblue',
                'whitesmoke',
                'pink',
                'yellow',
                'green',
                'purple',
                'orange',
                ]

const listProduct = document.querySelector('.list-product')




for (let i = 0; i < img.length; i++) {

    let randomNumber = Math.floor(Math.random() * 12);
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
        <div class="product-img">
            <img src="${img[i]}" alt="">
        </div>
        <div class="product-title">
            <p>${titleProduct[i]}</p>
        </div>
        <div class="product-price">
            <p>${priceProduct[i]}</p>
        </div>
        <div class="product-color">
            <div class="color" style="background-color: ${color[randomNumber]}"></div>
            <div class="color" style="background-color: ${color[i]}"></div>
            <div class="color" style="background-color: ${color[randomNumber-2]}"></div>
            <div class="more-color">+${randomNumber}</div>
        </div>
    `    
    listProduct.appendChild(div);
}

const productImg = document.querySelectorAll('.product-img');
productImg.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        item.children[0].src = imgh[index];
    });
    item.addEventListener('mouseout', () => {
        item.children[0].src = img[index];
    });
});
